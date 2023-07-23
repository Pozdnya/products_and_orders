export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  order: number;
  date: string;
}

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: null | string;
  selectedProductId: number;
}

export interface SetProductsAction {
  type: 'products/SET_PRODUCTS';
  payload: Product[];
}

export interface SetLoadingAction {
  type: 'products/SET_LOADING';
}

export interface SetErrorAction {
  type: 'products/SET_ERROR';
  payload: string;
}
export interface SelectedProductIdAction {
  type: 'products/SELECTED_PRODUCT_ID';
  payload: number;
}

export type ProductsActionTypes = SetProductsAction
| SetLoadingAction
| SetErrorAction
| SelectedProductIdAction;

// eslint-disable-next-line no-shadow
export enum ProductActions {
  SET_PRODUCTS = 'products/SET_PRODUCTS',
  SET_LOADING = 'products/SET_LOADING',
  SET_ERROR = 'products/SET_ERROR',
  SELECTED_PRODUCT_ID = 'products/SELECTED_PRODUCT_ID',
}
