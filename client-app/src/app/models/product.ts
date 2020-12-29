export interface IProduct{
    id: number,
    name: string,
    description: string,
    price: number,
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