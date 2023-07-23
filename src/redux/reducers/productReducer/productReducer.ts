import { ProductActions, ProductsActionTypes, ProductsState } from '../../../types/product';

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  selectedProductId: 0,
};

export const productReducer = (
  state = initialState,
  action: ProductsActionTypes,
): ProductsState => {
  switch (action.type) {
    case ProductActions.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    case ProductActions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ProductActions.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case ProductActions.SELECTED_PRODUCT_ID:
      return {
        ...state,
        selectedProductId: action.payload,
      };

    default:
      return state;
  }
};
