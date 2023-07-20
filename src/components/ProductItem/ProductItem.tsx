import React, { FC } from 'react';
import cn from 'classnames';
import { Product } from '../../types/product';
import { changeDateView, changeMonthView, shortDate } from '../../utils/variables';
import { useAppSelector } from '../../redux/hooks';
import { ReactComponent as IconAdd } from '../../images/icon-plus.svg';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
import './ProductItem.scss';
import { Button } from '../../controls/Button';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const {
    photo,
    title,
    type,
    serialNumber,
    guarantee,
    isNew,
    price,
  } = product;
  const { orders } = useAppSelector(state => state.orders);
  const getOrder = (orderId: number) => {
    return orders.find(order => order.id === orderId);
  };

  const orderTitle = getOrder(product.order)?.title || '';
  const orderDate = getOrder(product.order)?.date || '';

  return (
    <div className="card">
      <div className="card__image">
        <img
          src={photo}
          alt="Product"
          className="card__image-photo"
        />
      </div>

      <div className="card__info">
        <p className="card__info-title">{title}</p>
        <div className="card__info-sn">{`SN-${serialNumber}`}</div>
      </div>

      <div className="card__type">
        <p className="card__type-text">{type}</p>
      </div>

      <div className="card__guarantie">
        <div className="card__guarantie-interval">
          <p className="card__guarantie-interval-text">From</p>

          <p className="card__guarantie-interval-text">To</p>
        </div>

        <div className="card__guarantie-text">
          <p className="card__guarantie-text-date">{changeDateView(guarantee.start)}</p>

          <p className="card__guarantie-text-date">{changeDateView(guarantee.end)}</p>
        </div>
      </div>

      <div className="card__is-new">
        <p className="card__is-new-text">{isNew ? 'New' : 'Used'}</p>
      </div>

      <div className="card__price">
        <p className={cn('card__price-text',
          { 'card__price-text--default-price': Boolean(price[0].isDefault) })}
        >
          {`${price[0].value} ${price[0].symbol}`}
        </p>

        <p className={cn('card__price-text',
          { 'card__price-text--default-price': Boolean(price[1].isDefault) })}
        >
          {`${price[1].value} ${price[1].symbol}`}
        </p>
      </div>

      <div className="card__order">
        <p className="card__order-name">{orderTitle || '-'}</p>
      </div>

      <div className="card__date">
        <p className="card__date-small-text">
          {orderDate === '' ? '' : shortDate(orderDate)}
        </p>
        <p className="card__date-text">
          {orderDate === '' ? '-' : changeMonthView(orderDate)}
        </p>
      </div>

      <div className="card__icons">
        <Button classes="card__icons-btn">
          <IconAdd className="card__icons-btn-add" />
        </Button>

        <Button classes="card__icons-btn">
          <IconRemove className="card__icons-btn-trash" />
        </Button>
      </div>
    </div>
  );
};
