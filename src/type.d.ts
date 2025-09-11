
type listOrder = {
    no: number,
    name: string,
    qty: number
}
type statusOrderIn = 'new' | 'pending' | 'idle' | 'canceled';
type statusOrderOut = 'process' | 'done' | 'canceled';

interface baseOrder {
    no: number; // no as id
    name?: string;
    notes?: string;
}
// why base order not in

export type IOrderOut  = {
    items: listOrder[];
    status: statusOrderOut;
    cancelReason?: string[];
    cancelDetails?: string;
} & baseOrder;

export type IOrderIn  = {
    items: listOrder[];
    status: statusOrderIn;
    cancelReason?: string[];
    cancelDetails?: string;
} & baseOrder;


// create interface from menu below
export interface IMenu {
    id: number;
    img: string;
    name: string;
    dsc: string;
    price: number;
    rate: number;
    country: string;
    qty?: number;
}

export interface ICart {
    id: number;
    items: IMenu[];
    total: number;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface IOrder {
    id: string;
    user: IUser;
    cart: ICart[];
    status: 'pending' | 'completed' | 'canceled';
}
