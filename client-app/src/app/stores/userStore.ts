import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/user";
import { RootStore } from "./rootStore";
import { history } from "../..";
import { toast } from "react-toastify";

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;
  @observable loadingUser = false;
  @observable loadingRegister = false;
  @observable loadingEdit = false;

  @action login = async (loginInfo: IUserFormValues) => {
    this.loadingUser = true;
    try {
      var user = await agent.User.login(loginInfo);
      runInAction(() => {
        this.user = user;
        this.loadingUser = false;
      });
      this.rootStore.commonStore.setToken(user.token);
      history.push("/");
      toast.error("Dobrodošli nazad");
      // toast.error("Wellcome back");
    } catch (err) {
      runInAction(() => (this.loadingUser = false));
      console.log(err.response);
    }
  };

  @action register = async (registerInfo: IUserFormValues) => {
    this.loadingRegister = true;
    try {
      var user = await agent.User.register(registerInfo);
      runInAction(() => {
        this.rootStore.commonStore.setToken(user.token);
        this.user = user;
        this.loadingRegister = false;
      });
      history.push("/");
    } catch (err) {
      runInAction(() => (this.loadingRegister = false));
      console.log(err.response);
    }
  };

  @action editUser = async (editData: IUserFormValues) => {
    this.loadingEdit = true;
    try {
      await agent.User.edit(editData);
      runInAction(() => {
        this.loadingEdit = false;
        this.user!.adress = editData.adress ?? this.user!.adress;
        this.user!.name = editData.name ?? this.user!.name;
        this.user!.lastname = editData.lastname ?? this.user!.lastname;
        this.user!.phoneNumber = editData.phoneNumber ?? this.user!.phoneNumber;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingEdit = false;
      });
      console.log(err.response);
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.current();
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      console.log(err);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push("/");
  };
}
