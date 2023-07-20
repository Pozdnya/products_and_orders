import { Order } from '../types/order';
import { Product } from '../types/product';

export const modifyMonth = (value = '') => {
  return value.length > 3 ? `${value.slice(0, 3)}` : value;
};

export const modifyDate = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

export const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octember', 'November', 'December'];

export const changeDateView = (date: string) => {
  return new Date(date).toLocaleDateString().replaceAll('.', ' / ');
};

export const changeMonthView = (date: string) => {
  const dateToArray = changeDateView(date).split('/');
  const monthString = monthes[Number(dateToArray[1]) - 1];

  return `${dateToArray[0]} / ${modifyMonth(monthString)} / ${dateToArray[2]}`;
};

export const shortDate = (date: string) => {
  return changeDateView(date).slice(0, 7);
};

export const sumProducts = (prods: Product[], prodIds: number[]) => {
  const prices = prodIds.map(prodId => prods.find(prod => prod.id === prodId)?.price);
  const priceUAH = prices
    .map(price => price?.[1]?.value ?? 0)
    .reduce((acc, val) => acc + val, 0);
  const priceUSD = prices
    .map(price => price?.[0]?.value ?? 0)
    .reduce((acc, val) => acc + val, 0);

  return [priceUSD, priceUAH];
};

export const getProductsFromOrder = (
  clickedOrder: Order,
  allproducts: Product[],
) => {
  const productsFromOrder = allproducts.filter((product) => (
    clickedOrder.products.includes(product.id)
  ));

  return productsFromOrder;
};
