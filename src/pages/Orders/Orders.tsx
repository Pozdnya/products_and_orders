import React from 'react';
import { OrderList } from '../../components/OrderList';

export const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <h2>Orders</h2>
      </div>
      <OrderList />
    </div>
  );
};
