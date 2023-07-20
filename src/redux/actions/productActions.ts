import { Dispatch } from 'redux';
import {
  Product,
  ProductsActionTypes,
  SetErrorAction,
  SetLoadingAction,
  SetProductsAction,
} from '../../types/product';
import { products } from '../../api/products';

const setProducts = (payload: Product[]): SetProductsAction => ({
  type: 'products/SET_PRODUCTS',
  payload,
});

const setLoading = (): SetLoadingAction => ({
  type: 'products/SET_LOADING',
});

const setError = (error: string): SetErrorAction => ({
  type: 'products/SET_ERROR',
  payload: error,
});

const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsActionTypes>) => {
    dispatch(setLoading());
    try {
      dispatch(setProducts(products));
    } catch {
      dispatch(setError('Something went wrong...'));
    }
  };
};

export const actions = {
  setProducts,
  setLoading,
  setError,
  fetchProducts,
};
