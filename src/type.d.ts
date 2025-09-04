
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