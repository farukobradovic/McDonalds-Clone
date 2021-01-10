import { IUser } from "./user";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  fat: number;
  protein: number;
  carbohydrates: number;
  photo: IPhoto;
  comments: IComment[];
}

export interface IComment {
  id: string;
  body: string;
  username: string;
  createdAt: Date;
}

export interface IPhoto {
  id: number;
  url: string;
}

export interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

export interface IProductInvoice {
  product: IProduct;
  quantity: number;
}

export class ProductInvoice implements IProductInvoice {
  product: any;
  quantity: number = 0;

  constructor(product: number, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}

export interface ICommentFormValues {
  body?: string;
  createdAt?: Date;
  productId?: any;
}

export interface IProdsInvoices {
  productId: any;
  quantity: any;
}
export class ProdsInvoices implements IProdsInvoices {
  productId: any;
  quantity: any;

  constructor(productId: any, quantity: any) {
    this.productId = productId;
    this.quantity = quantity;
  }
}

export interface IInvoice {
  id: number;
  sum: number;
  createdAt: Date;
  author: IUser;
  products: IProductInvoice[];
}
