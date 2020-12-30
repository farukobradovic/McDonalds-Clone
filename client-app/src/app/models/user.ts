export interface IUser{
    name: string;
    lastname: string;
    token: string;
    username: string;
    adress: string;
    phoneNumber: string;

}

export interface IUserFormValues{
    email: string;
    password: string;
    name?: string;
    lastname?: string;
    username?: string;
    adress?: string;
    phoneNumber?: string;
}