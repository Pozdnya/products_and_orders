import React from 'react';
import './Orders.scss';
import { OrdersList } from '../../OrdersList';

export const Orders = () => {
  // const { orders, isLoading, error } = useAppSelector(state => state.orders);

  return (
    <div className="orders">
      <div className="orders__header">
        <h2>Orders</h2>
      </div>
      <OrdersList />
    </div>
  );
};
