import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import {
  ICategory,
  IInvoice,
  IProdsInvoices,
  IProduct,
  IProductInvoice,
  ProdsInvoices,
  ProductInvoice,
} from "../models/product";
import { RootStore } from "./rootStore";
import { history } from "../..";
import { toast } from "react-toastify";

export default class ProductStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @observable productsByCategories: ICategory[] | null = null;
  @observable products: IProduct[] | null = null;
  @observable product: IProduct | null = null;
  @observable loadingCategories = true;
  @observable loadingProduct = true;
  @observable inBucket: IProductInvoice[] = [];
  @observable loadingInvoice = false;
  @observable loadingInvoicesGet = false;
  @observable invoices: IInvoice[] | null = null;
  @observable invoice: IInvoice | null = null;
  @observable loadingInvoiceDetails = false;

  @observable.ref hubConnection: HubConnection | null = null;

  @action createHubConnection = (productId: string) => {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/chat", {
        accessTokenFactory: () => this.rootStore.commonStore.token!,
      })
      .configureLogging(LogLevel.Information)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log(this.hubConnection!.state))
      .then(() => {
        console.log("Attempting to joing group");
        this.hubConnection!.invoke("AddToGroup", productId);
      })
      .catch((error) => console.log("Error establishing connection: ", error));

    this.hubConnection.on("ReceiveComment", (comment) => {
      runInAction(() => {
        this.product!.comments.push(comment);
      });
    });

    this.hubConnection.on("Send", (message) => {
      console.log(message);
    });
  };

  @action stopHubConnection = () => {
    this.hubConnection!.invoke("RemoveFromGroup", this.product!.id)
      .then(() => {
        this.hubConnection!.stop();
      })
      .then(() => console.log("Connection stopped"))
      .catch((err) => console.log(err));
  };

  @action addComment = async (values: any) => {
    values.productId = this.product!.id;
    try {
      await this.hubConnection!.invoke("SendComment", values);
    } catch (err) {
      console.log(err);
    }
  };

  @action loadProductsByCategories = async () => {
    // this.loadingCategories = true;
    try {
      const productsByCategory = await agent.Products.listByCategories();
      const products = await agent.Products.list();
      runInAction(() => {
        this.productsByCategories = productsByCategory;
        this.products = products;
        this.loadingCategories = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingCategories = false;
      });
      console.log(err.response);
    }
  };

  getProduct = (id: string) => {
    let product = this.products?.find((c) => c.id.toString() === id);
    return product;
  };

  @action loadProduct = async (id: string) => {
    // this.loadingProduct = true;
    const product = this.getProduct(id);
    if (product) {
      this.product = product;
      this.loadingProduct = false;
    } else {
      try {
        var p = await agent.Products.details(id);
        runInAction(() => {
          this.product = p;
          this.loadingProduct = false;
        });
        return p;
      } catch (err) {
        runInAction(() => (this.loadingProduct = false));
        console.log(err.response);
      }
    }
  };

  @action clearProduct = async () => {
    this.product = null;
  };

  @action orderProduct = (product: any, quantity: any) => {
    // console.log(product.id, quantity);
    let p = new ProductInvoice(product, quantity);
    // console.log("Object created: ", p);
    var temp = this.inBucket!.find((c) => c.product.id === product.id);
    if (temp) {
      console.log("BOG ti mazo");
      this.inBucket! = this.inBucket!.filter(
        (c) => c.product.id !== product.id
      );
    }

    this.inBucket!.push(p);

    history.push("/products");
  };

  @action inBucketSum = () => {
    var sum = 0;
    this.inBucket.map((p) => {
      sum += p.quantity * p.product.price;
    });
    return sum;
  };

  @action removeFromBucket = (id: number) => {
    this.inBucket = this.inBucket.filter((c) => c.product.id !== id);
  };
  @action clearBucket = () => {
    this.inBucket = [];
  };

  @action createInvoice = async (products: IProductInvoice[]) => {
    if (!this.rootStore.userStore.isLoggedIn) {
      toast.error("Prijavite se");
    } else {
      if (this.inBucket.length > 0) {
        this.loadingInvoice = true;
        var prods: IProdsInvoices[] = [];
        products.map((p) => {
          prods.push(new ProdsInvoices(p.product.id, p.quantity));
        });

        try {
          await agent.Invoice.create();
          prods.map(async (p) => {
            await agent.Invoice.createProductInvoice(p);
          });
          runInAction(() => {
            history.push("/user");
            this.clearBucket();
            toast.error("Vaša narudžba je zaprimljena");
          });
        } catch (err) {
          runInAction(() => (this.loadingInvoice = false));
          console.log(err);
        }
      } else {
        toast.error("Vaša korpa je prazna");
      }
    }
  };

  @action getInvoices = async () => {
    this.loadingInvoicesGet = true;
    try {
      var invoices = await agent.Invoice.getAll();
      runInAction(() => {
        this.invoices = invoices;
        this.loadingInvoicesGet = false;
      });
    } catch (err) {
      runInAction(() => (this.loadingInvoicesGet = false));
      console.log(err);
    }
  };

  findInvoice = (id: string) => {
    var invoice = this.invoices?.find((c) => c.id.toString() === id);
    return invoice;
  };

  @action getInvoice = async (id: string) => {
    var inv = this.findInvoice(id);
    this.loadingInvoiceDetails = true;
    if (inv) {
      this.invoice = inv;
      this.loadingInvoiceDetails = false;
    } else {
      try {
        var invoice = await agent.Invoice.details(id);

        runInAction(() => {
          this.invoice = invoice;
          this.loadingInvoiceDetails = false;
        });
      } catch (err) {
        runInAction(() => (this.loadingInvoiceDetails = false));
        console.log(err);
      }
    }
  };
}
