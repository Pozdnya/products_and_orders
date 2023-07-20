export interface Order {
  id: number;
  title: string;
  date: string;
  description: string;
  products: number[] | [];
}

export type OrdersState = {
  orders: Order[];
  isLoading: boolean;
  error: null | string;
  selectedOrderId: number;
  isClickedOrder: boolean;
  order: Order | null;
};

export interface SetOrdersAction {
  type: 'orders/SET_ORDERS';
  payload: Order[];
}

export interface SetLoadingAction {
  type: 'orders/SET_LOADING';
}

export interface SetErrorAction {
  type: 'orders/SET_ERROR';
  payload: string;
}

export interface SetSelectedOrderIdAction {
  type: 'orders/SET_SELECTED_ORDER_ID';
  payload: number;
}

export interface SetIsClickedOrderAction {
  type: 'orders/SET_IS_CLICKED_ORDER';
  payload: boolean;
}

export interface GetOrderByIdAction {
  type: 'orders/GET_ORDER_BY_ID';
  payload: number;
}

export interface UpdateOrdersAction {
  type: 'orders/UPDATE_ORDERS';
  payload: Order[];
}

export interface RemoveProductFromOrderAction {
  type: 'order/REMOVE_PRODUCT_FROM_ORDER';
  payload: {
    orderId: number;
    productId: number;
  };
}

export type OrdersActionTypes = SetOrdersAction
| SetLoadingAction
| SetErrorAction
| SetSelectedOrderIdAction
| SetIsClickedOrderAction
| GetOrderByIdAction
| UpdateOrdersAction
| RemoveProductFromOrderAction;

// eslint-disable-next-line no-shadow
export enum OrderActions {
  SET_ORDERS = 'orders/SET_ORDERS',
  SET_LOADING = 'orders/SET_LOADING',
  SET_ERROR = 'orders/SET_ERROR',
  SET_SELECTED_ORDER_ID = 'orders/SET_SELECTED_ORDER_ID',
  SET_IS_CLICKED_ORDER = 'orders/SET_IS_CLICKED_ORDER',
  GET_ORDER_BY_ID = 'orders/GET_ORDER_BY_ID',
  UPDATE_ORDERS = 'orders/UPDATE_ORDERS',
  REMOVE_PRODUCT_FROM_ORDER = 'order/REMOVE_PRODUCT_FROM_ORDER',
}
