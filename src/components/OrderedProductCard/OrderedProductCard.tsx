import React, { FC, useCallback, memo } from 'react';
import { Product } from '../../types/product';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
import { Button } from '../../controls/Button';
import { useAppDispatch } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';
import { actions } from '../../redux/actions/productActions';

interface Props {
  product: Product;
  orderId: number;
}

export const OrderedProductCard: FC<Props> = memo(({ product, orderId }) => {
  const dispatch = useAppDispatch();
  const {
    title,
    photo,
    type,
    serialNumber,
    id,
  } = product;

  const handleDeleteClick = useCallback((currentProductId: number, currentOrderId: number) => {
    dispatch(orderActions.getOrderById(currentOrderId));
    dispatch(actions.setSelectedProductId(currentProductId));
  }, [dispatch]);

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
});
