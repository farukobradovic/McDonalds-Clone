import { configure } from "mobx";
import { createContext } from "react";
import ProductStore from "./productStore";


configure({enforceActions:"always"});


export class RootStore{
    productStore: ProductStore;


    constructor(){
        this.productStore = new ProductStore(this);

    }
}



export const RootStoreContext = createContext(new RootStore());