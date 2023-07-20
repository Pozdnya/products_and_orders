import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    photo: require('../images/phone.jpg').default,
    title: 'PhoneI 12 Max Pro',
    type: 'Phones',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    photo: require('../images/monitor.jpg').default,
    title: 'Dell P3421WM (210-BDDU)',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 0 },
      { value: 5200, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 0,
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    photo: require('../images/car.jpg').default,
    title: 'Yotota Cotavia V8 Diesel',
    type: 'Cars',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 10000, symbol: 'USD', isDefault: 0 },
      { value: 260000, symbol: 'UAH', isDefault: 1 },
    ],
    order: 0,
    date: '2017-06-29 12:09:33',
  },
];
