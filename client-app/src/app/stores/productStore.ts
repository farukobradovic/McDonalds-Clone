import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { action, computed, makeObservable, observable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { ICategory, IProduct, IProductInvoice, ProductInvoice } from "../models/product";
import { RootStore } from "./rootStore";


export default class ProductStore{
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @observable productsByCategories: ICategory[] | null = null;
    @observable products: IProduct[] | null = null;
    @observable product: IProduct | null = null;
    @observable loadingCategories = true;
    @observable loadingProduct = true;
    @observable inBucket: IProductInvoice[] | null = null;



    @observable.ref hubConnection: HubConnection | null = null;

    @action createHubConnection = (productId: string) => {
        this.hubConnection = new HubConnectionBuilder()
        .withUrl('http://localhost:5000/chat', {
            accessTokenFactory: () => this.rootStore.commonStore.token!
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
        .catch(error => console.log("Error establishing connection: ", error));

        this.hubConnection.on("ReceiveComment", comment => {
            runInAction(() => {
                this.product!.comments.push(comment);
            })
        })

        this.hubConnection.on("Send", message => {
            console.log(message);
        })
    }

    @action stopHubConnection = () =>{
        this.hubConnection!.invoke("RemoveFromGroup", this.product!.id)
        .then(() => {
            this.hubConnection!.stop()
        })
        .then(() => console.log("Connection stopped"))
        .catch(err => console.log(err))
    }

    @action addComment = async (values: any) => {
        values.productId = this.product!.id;
        try{
            await this.hubConnection!.invoke("SendComment", values);
        }
        catch(err){
            console.log(err);
        }
    }



    @action loadProductsByCategories = async () => {
        // this.loadingCategories = true;
        try{
            const productsByCategory = await agent.Products.listByCategories();
            const products = await agent.Products.list();
            runInAction(() => {
                this.productsByCategories = productsByCategory;
                this.products = products;
                this.loadingCategories = false;
            })
        }catch(err){
            runInAction(() => {this.loadingCategories = false;})
            console.log(err.response);
        }
    }

    getProduct = (id: string) => {
     let product = this.products?.find(c => c.id.toString() == id);
     return product;
    }

    @action loadProduct = async (id: string) => {
        // this.loadingProduct = true;
       const product = this.getProduct(id);
       if(product){
           this.product = product;
           this.loadingProduct = false;
       }
       else{
        try{
            var p = await agent.Products.details(id);
            runInAction(() => {
                this.product = p;
                this.loadingProduct = false;
            })
            return p;
        }
        catch(err){
            runInAction(() => this.loadingProduct = false)
            console.log(err.response);
        }
       }
       
    }

    @action clearProduct = async () => {
        this.product = null;
    }

    @action orderProduct = (product: any, quantity: any) => {
       let p = new ProductInvoice(product, quantity);
       console.log("Object created: ",p);
        this.inBucket?.push(p);
       
    }



}