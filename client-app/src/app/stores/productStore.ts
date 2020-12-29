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