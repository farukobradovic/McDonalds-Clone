import axios, { AxiosResponse } from "axios";

import {
  ICategory,
  IInvoice,
  IProdsInvoices,
  IProduct,
} from "../models/product";
import { IUser, IUserFormValues } from "../models/user";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(500)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(500)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(500)).then(responseBody),
  del: (url: string) => axios.delete(url).then(sleep(500)).then(responseBody),
};

var Products = {
  list: (): Promise<IProduct[]> => requests.get("/products"),
  listByCategories: (): Promise<ICategory[]> =>
    requests.get("/products/bycategory"),
  details: (id: string): Promise<IProduct> => requests.get(`/products/${id}`),
};

var User = {
  login: (user: IUserFormValues): Promise<IUser> =>
    requests.post("/user/login", user),
  register: (user: IUserFormValues): Promise<IUser> =>
    requests.post("/user/register", user),
  edit: (user: IUserFormValues) => requests.put("/user", user),
  current: (): Promise<IUser> => requests.get("/user"),
};

var Invoice = {
  create: () => requests.post("/invoice", {}),
  createProductInvoice: (product: IProdsInvoices) =>
    requests.post("/invoice/prods", product),
  getAll: (): Promise<IInvoice[]> => requests.get("/invoice"),
  details: (id: string): Promise<IInvoice> => requests.get(`/invoice/${id}`),
};

export default {
  Products,
  User,
  Invoice,
};
