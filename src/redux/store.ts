import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { orderReducer } from './reducers/orderReducer/orderReducer';
import { productReducer } from './reducers/productReducer/productReducer';
import { filterReducer } from './reducers/filterReducer/filterReducer';

const rootReducer = combineReducers({
  orders: orderReducer,
  products: productReducer,
  filter: filterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
