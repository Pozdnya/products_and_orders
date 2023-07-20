/* eslint-disable no-console */
import React, { FC, useEffect } from 'react';
import { Product } from '../../types/product';
import './OrderedProductCard.scss';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
import { Button } from '../../controls/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';

interface Props {
  product: Product;
  orderId: number;
}

export const OrderedProductCard: FC<Props> = ({ product, orderId }) => {
  const dispatch = useAppDispatch();
  const { order } = useAppSelector((state) => state.orders);
  const {
    title,
    photo,
    type,
    serialNumber,
    id,
  } = product;

  console.log(order);

  const handleDeleteClick = (currentProductId: number, currentOrderId: number) => {
    dispatch(orderActions.getOrderById(currentOrderId));

    dispatch(orderActions.deleteProductFromOrder(currentOrderId, currentProductId));
  };

  useEffect(() => {
    dispatch(orderActions.getOrderById(orderId));
  }, [order]);

  return (
    <div className="ordered-item">
      <div className="ordered-item__image">
        <img
          src={photo}
          className="ordered-item__image-img"
          alt={type}
        />
      </div>

      <div className="ordered-item__info">
        <p className="ordered-item__info-title">
          {title}
        </p>

        <p className="ordered-item__info-sn">
          {`SN: ${serialNumber}`}
        </p>
      </div>

      <div className="ordered-item__delete">
        <Button
          classes="ordered-item__delete-btn"
          onClick={() => handleDeleteClick(id, orderId)}
        >
          <IconRemove className="ordered-item__delete-btn-icon" />
        </Button>
      </div>
    </div>
  );
};
