import { Dispatch } from 'redux';
import {
  GetOrderByIdAction,
  Order,
  OrdersActionTypes,
  RemoveProductFromOrderAction,
  SetErrorAction,
  SetIsClickedOrderAction,
  SetLoadingAction,
  SetOrdersAction,
  SetSelectedOrderIdAction,
  SetProductsInOrderAction,
} from '../../types/order';
import { orders } from '../../api/orders';
import { Product } from '../../types/product';

const setOrders = (payload: Order[]): SetOrdersAction => ({
  type: 'orders/SET_ORDERS',
  payload,
});

const setLoading = (): SetLoadingAction => ({
  type: 'orders/SET_LOADING',
});

const setError = (error: string): SetErrorAction => ({
  type: 'orders/SET_ERROR',
  payload: error,
});

const setSelectedOrderId = (orderId: number): SetSelectedOrderIdAction => ({
  type: 'orders/SET_SELECTED_ORDER_ID',
  payload: orderId,
});

const setIsClickedOrder = (isClickedOrder: boolean): SetIsClickedOrderAction => ({
  type: 'orders/SET_IS_CLICKED_ORDER',
  payload: isClickedOrder,
});

const getOrderById = (orderId: number): GetOrderByIdAction => ({
  type: 'orders/GET_ORDER_BY_ID',
  payload: orderId,
});

const setProductsInOrder = (products: Product[]): SetProductsInOrderAction => ({
  type: 'order/SET_PRODUCTS_IN_ORDER',
  payload: products,
});

const deleteProductFromOrder = (
  orderId: number,
  productId: number,
): RemoveProductFromOrderAction => ({
  type: 'order/REMOVE_PRODUCT_FROM_ORDER',
  payload: { orderId, productId },
});

const fetchOrders = () => {
  return async (dispatch: Dispatch<OrdersActionTypes>) => {
    // const response = await fetch('URL');
    // const orders = await response.json();

    // setOrders(orders);
    //  code in comments is for real fetch

    dispatch(setLoading());
    try {
      dispatch(setOrders(orders));
    } catch {
      // eslint-disable-next-line no-useless-escape
      dispatch(setError('Something went wrong...¯\_(ツ)_/¯'));
    }
  };
};

export const actions = {
  setOrders,
  setLoading,
  setError,
  fetchOrders,
  setSelectedOrderId,
  setIsClickedOrder,
  getOrderById,
  deleteProductFromOrder,
  setProductsInOrder,
};
