import { computed, signal } from "@preact/signals";

import {IOrderIn, IOrderOut, baseOrder} from '../src/type'

export const signalOrderIn = signal<IOrderIn[]>([
    {
        no: 1,
        items: [
            {
                no: 1,
                name: 'Product 1',
                qty: 2
            },
            {
                no: 2,
                name: 'Product 2',
                qty: 1
            }
        ],
        status: 'new'
    },
    {
        no: 2,
        items: [
            {
                no: 1,
                name: 'Product 3',
                qty: 1
            }
        ],
        status: 'new'
    },
    {
        no: 3,
        items: [
            {
                no: 1,
                name: 'Product 4',
                qty: 2
            }
        ],
        status: 'canceled'
    },
    {
        no: 4,
        items: [
            {
                no: 1,
                name: 'Product 5',
                qty: 1
            }
        ],
        status: 'new',
        notes: 'This is a note for order 4'
    }
]);
export const signalOrderOut =   signal<IOrderOut[]>([
    {
        no: 1,
        items: [
            {
                no: 1,
                name: 'Product 1',
                qty: 2
            },
            {
                no: 2,
                name: 'Product 2',
                qty: 1
            }
        ],
        status: 'process'
    },
    {
        no: 2,
        items: [
            {
                no: 1,
                name: 'Product 3',
                qty: 1
            }
        ],
        status: 'process'
    },{
        no: 3,
        items: [
            {
                no: 1,
                name: 'Product 4',
                qty: 2
            }
        ],
        status: 'done'
    }
]);

export const orderOutDone = (no:number) => {
    return signalOrderOut.value.map((item) => {
       return item.no === no ? { ...item, status: 'done' } : item
    })
}

export const getTotalCanceledOrderIn = computed(() => signalOrderIn.value.reduce((acc, item) => {
    if (item.status === 'canceled') {
        acc.push(item);
    }
    return acc;
}, []).length);

// I want to mak total status done
export const getTotalDoneOrderOut = computed(() => signalOrderOut.value.reduce((acc, item) => {
    if (item.status === 'done' && (!item.cancelReason || item.cancelReason.length === 0)) {
        acc.push(item);
    }
    return acc;
}, []).length);