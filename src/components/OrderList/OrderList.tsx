import React, { Fragment } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { OrderItem } from '../OrderItem';
import './OrderList.scss';

export const OrderList = () => {
  const { orders } = useAppSelector((state) => state.orders);

  return (
    <div className="orders__list">
      {orders.map(order => (
        <Fragment key={order.id}>
          <OrderItem order={order} />
        </Fragment>
      ))}
    </div>
  );
};
