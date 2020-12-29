import { makeObservable, observable } from "mobx";
import { IUser } from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore{
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @observable loadingUser = false;


}