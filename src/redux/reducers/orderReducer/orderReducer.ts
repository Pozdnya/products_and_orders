import { OrderActions, OrdersActionTypes, OrdersState } from '../../../types/order';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
  selectedOrderId: 0,
  isClickedOrder: false,
  order: null,
  productsInOrder: [],
};

export const orderReducer = (
  state = initialState,
  action: OrdersActionTypes,
): OrdersState => {
  switch (action.type) {
    case OrderActions.SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
      };

    case OrderActions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case OrderActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case OrderActions.SET_SELECTED_ORDER_ID:
      return {
        ...state,
        selectedOrderId: action.payload,
      };

    case OrderActions.SET_IS_CLICKED_ORDER:
      return {
        ...state,
        isClickedOrder: action.payload,
      };

    case OrderActions.GET_ORDER_BY_ID:
      return {
        ...state,
        order: state.orders.find((order) => order.id === action.payload) || null,
      };

    case OrderActions.REMOVE_PRODUCT_FROM_ORDER: {
      const { orderId, productId } = action.payload;

      return {
        ...state,
        orders: state.orders.map((order) => (order.id === orderId
          ? {
            ...order,
            products: order.products.filter((product) => product !== productId),
          }
          : order)),
      };
    }

    case OrderActions.SET_PRODUCTS_IN_ORDER:
      return {
        ...state,
        productsInOrder: action.payload,
      };

    default:
      return state;
  }
};
