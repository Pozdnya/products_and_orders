import React from 'react';
import './Orders.scss';
import { OrderList } from '../../OrderList';
import { Modal } from '../../Modal';

export const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__header">
        <h2>Orders</h2>
      </div>
      <OrderList />
      <Modal />
    </div>
  );
};
