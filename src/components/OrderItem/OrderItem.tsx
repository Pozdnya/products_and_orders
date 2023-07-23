import React, { FC, memo, useCallback } from 'react';
import { ReactComponent as IconList } from '../../images/icon-list.svg';
import { ReactComponent as IconArrow } from '../../images/icon-arrow.svg';
import { Order } from '../../types/order';
import {
  changeMonthView,
  shortDate,
  sumProducts,
} from '../../utils/variables';
import { Button } from '../../controls/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';
import { OrderedProductsList } from '../OrderedProductsList';

interface Props {
  order: Order;
}

export const OrderItem: FC<Props> = memo(({ order }) => {
  const dispatch = useAppDispatch();
  const {
    selectedOrderId,
  } = useAppSelector((state) => state.orders);
  const {
    id,
    date,
    products,
  } = order;
  const prodState = useAppSelector((state) => state.products.products);

  const handleClickProductsOpen = useCallback((orderId: number) => {
    dispatch(orderActions.setSelectedOrderId(orderId));
  }, [dispatch]);

  const handleClickProductsClose = useCallback(() => {
    dispatch(orderActions.setSelectedOrderId(0));
  }, []);

  return (
    <li className="order">
      <div className="order__item">
        <Button
          classes="order__item-list"
          onClick={() => handleClickProductsOpen(id)}
        >
          <IconList className="order__item-list-icon" />
        </Button>

        <div className="order__item-count">
          <div className="order__item-count-number">{products.length || 0}</div>
          <div className="order__item-count-products">Products</div>
        </div>

        <div className="order__item-sum">
          <div className="order__item-sum-usd">
            {`${sumProducts(prodState, products)[0]} USD`}
          </div>
          <div className="order__item-sum-uah">
            {`${sumProducts(prodState, products)[1]} UAH`}
          </div>
        </div>

        <div className="order__item-dates">
          <div className="order__item-dates-small">{shortDate(date)}</div>
          <div className="order__item-dates-normal">{changeMonthView(date)}</div>
        </div>

        <div className="order__item-arrow">
          {selectedOrderId === id && (
            <Button
              classes="order__item-arrow-btn"
              onClick={handleClickProductsClose}
            >
              <IconArrow className="order__item-arrow-btn-icon" />
            </Button>
          )}
        </div>
      </div>

      {selectedOrderId === id && (
        <div className="order__products">
          <OrderedProductsList productsIdsInOrder={order.products} />
        </div>
      )}
    </li>
  );
});
