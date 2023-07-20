/* eslint-disable no-console */
import React, { FC } from 'react';
import { Product } from '../../types/product';
import './OrderedProducts.scss';
import { OrderedProductCard } from '../OrderedProductCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';
import { CloseBtn } from '../../controls/CloseBtn';

interface Props {
  products: Product[];
}

export const OrderedProducts: FC<Props> = ({ products }) => {
  const dispatch = useAppDispatch();
  const { selectedOrderId, orders } = useAppSelector((state) => state.orders);

  const handleCloseModal = () => {
    dispatch(orderActions.setSelectedOrderId(0));
  };

  const getOrderTitle = (orderId: number) => {
    return orders.find((item) => item.id === orderId)?.title;
  };

  return (
    <div className="ordered">
      <div className="ordered__title">
        <h3 className="ordered__title-text">{getOrderTitle(selectedOrderId)}</h3>
      </div>

      <div className="ordered__products">
        {products.map(product => (
          <ul className="ordered__products-item" key={product.id}>
            <OrderedProductCard product={product} orderId={selectedOrderId} />
          </ul>
        ))}
      </div>
      <CloseBtn classes="ordered__close" handleClose={handleCloseModal} />
    </div>
  );
};
