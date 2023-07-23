import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import cn from 'classnames';
import './styles/index.scss';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { actions as orderActions } from './redux/actions/orderActions';
import { actions as productActions } from './redux/actions/productActions';
import { Products } from './pages/Products';
import { Orders } from './pages/Orders';
import { PageNotFound } from './pages/PageNotFound';
import { Modal } from './controls/Modal';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const ordersFetch = orderActions.fetchOrders();
  const productsFetch = productActions.fetchProducts();
  const { selectedProductId } = useAppSelector(state => state.products);

  useEffect(() => {
    ordersFetch(dispatch);
    productsFetch(dispatch);
  }, []);

  return (
    <div>
      <Header />
      {!!selectedProductId && <Modal />}
      <main className={cn({ 'is-modal-open': !!selectedProductId })}>
        <div className="row">
          <div className="col-2 px-0">
            <SideBar />
          </div>
          <div className="col-10 px-0">
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};
