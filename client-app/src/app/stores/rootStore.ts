import { configure } from "mobx";
import { createContext } from "react";
import ProductStore from "./productStore";
import UserStore from "./userStore";


configure({enforceActions:"always"});


export class RootStore{
    productStore: ProductStore;
    userStore: UserStore;

    constructor(){
        this.productStore = new ProductStore(this);
        this.userStore = new UserStore(this);
    }
}



export const RootStoreContext = createContext(new RootStore());