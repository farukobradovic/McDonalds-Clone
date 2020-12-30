import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/user";
import { RootStore } from "./rootStore";
import { history } from "../..";
import { toast } from "react-toastify";

export default class UserStore{
    rootStore: RootStore;
    constructor(rootStore: RootStore){
        makeObservable(this);
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @observable loadingUser = false;
    @observable loadingRegister = false;


    @action login = async (loginInfo : IUserFormValues) => {
        this.loadingUser = true;
        try{
            var user = await agent.User.login(loginInfo); 
            runInAction(() => {
                this.user = user;
                this.loadingUser = false;
            });
            history.push("/");
            toast.error("Wellcome back");
        }
        catch(err){
            runInAction(() => this.loadingUser = false)
            console.log(err.response);
        }
    }

    @action register = async (registerInfo: IUserFormValues) => {
        this.loadingRegister = true;
        try{
            var user = await agent.User.register(registerInfo);
            runInAction(() => {
                this.user = user;
                this.loadingRegister = false;
            })
            history.push("/");
        }
        catch(err){
            runInAction(() => this.loadingRegister = false)
            console.log(err.response);
        }
    }

}