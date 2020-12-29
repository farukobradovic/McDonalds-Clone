import { action, computed, makeObservable, observable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { ICategory, IProduct } from "../models/product";
import { RootStore } from "./rootStore";


export default class ProductStore{
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @observable productsByCategories: ICategory[] | null = null;
    @observable product: IProduct | null = null;
    @observable loadingCategories = true;
    @observable loadingProduct = true;


    @action loadProductsByCategories = async () => {
        // this.loadingCategories = true;
        try{
            const products = await agent.Products.listByCategories();
            runInAction(() => {
                this.productsByCategories = products;
                this.loadingCategories = false;
            })
        }catch(err){
            runInAction(() => {this.loadingCategories = false;})
            console.log(err.response);
        }
    }

    @action loadProduct = async (id: string) => {
        // this.loadingProduct = true;
        try{
            var product = await agent.Products.details(id);
            runInAction(() => {
                this.product = product;
                this.loadingProduct = false;
            })
        }
        catch(err){
            runInAction(() => this.loadingProduct = false)
            console.log(err.response);
        }
    }

    @action clearProduct = async () => {
        this.product = null;
    }

    getProduct = (id: string) => {
        return this.productsByCategories?.find(c => c.id);
    }

}