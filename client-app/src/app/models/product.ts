export interface IProduct{
    id: number,
    name: string,
    description: string,
    price: number,
    fat: number,
    protein: number,
    carbohydrates: number,
    photo: IPhoto
}


export interface IPhoto{
    id: number,
    url: string
}

export interface ICategory{
    id: number,
    name: string,
    products: IProduct[]
}

export interface IProductInvoice{
    product: any,
    quantity: any
}

export class ProductInvoice implements IProductInvoice{
    product: any;
    quantity: any;

    constructor(product: any, quantity: any){
        Object.assign(this, product,quantity);
    }
}