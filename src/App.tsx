import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Products } from './components/pages/Products';
import { PageNotFound } from './components/pages/PageNotFound';
import { useAppDispatch } from './redux/hooks';
import { actions as orderActions } from './redux/actions/orderActions';
import { actions as productActions } from './redux/actions/productActions';
import { Orders } from './components/pages/Orders';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(orderActions.fetchOrders());
    dispatch(productActions.fetchProducts());
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
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
