import { Order } from '../types/order';

export const orders: Order[] = [
  {
    id: 1,
    title: 'Order 1 Order 1 Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: [1, 2],
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-12-29 12:09:33',
    description: 'desc',
    products: [2],
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: [1],
  },
];
