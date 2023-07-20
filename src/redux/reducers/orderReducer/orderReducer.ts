import { OrderActions, OrdersActionTypes, OrdersState } from '../../../types/order';

const initialState: OrdersState = {
  orders: [],
  isLoading: false,
  error: null,
  selectedOrderId: 0,
  isClickedOrder: false,
  order: null,
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

    default:
      return state;
  }
};
