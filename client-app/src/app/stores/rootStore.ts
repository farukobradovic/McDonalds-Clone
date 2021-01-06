import { configure } from "mobx";
import { createContext } from "react";
import CommonStore from "./commonStore";
import ProductStore from "./productStore";
import UserStore from "./userStore";


configure({enforceActions:"always"});


export class RootStore{
    productStore: ProductStore;
    userStore: UserStore;
    commonStore: CommonStore;

    constructor(){
        this.productStore = new ProductStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommonStore(this);
    }
}



export const RootStoreContext = createContext(new RootStore());