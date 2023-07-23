import React, {
  FC,
  Fragment,
  memo,
  useCallback,
} from 'react';
import { OrderedProductCard } from '../OrderedProductCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';
import { CloseBtn } from '../../controls/CloseBtn';

interface Props {
  productsIdsInOrder: number[];
}

export const OrderedProductsList: FC<Props> = memo(({ productsIdsInOrder }) => {
  const dispatch = useAppDispatch();
  const { selectedOrderId, orders } = useAppSelector((state) => state.orders);
  const { products } = useAppSelector((state) => state.products);

  const getOrderTitle = useCallback((orderId: number) => {
    return orders.find((item) => item.id === orderId)?.title;
  }, [orders]);

  const productsInOrder = productsIdsInOrder.map((productId) => {
    return products.find((item) => item.id === productId);
  });

  const handleCloseModal = useCallback(() => {
    dispatch(orderActions.setSelectedOrderId(0));
  }, [dispatch]);

  return (
    <div className="ordered">
      <div className="ordered__title">
        <h3 className="ordered__title-text">{getOrderTitle(selectedOrderId)}</h3>
      </div>

      <div className="ordered__products">
        <ul className="ordered__products-item">
          {productsInOrder.length !== 0 ? (
            <>
              {
                productsInOrder.map(product => {
                  if (!product) {
                    return null;
                  }

                  return (
                    <Fragment key={product.id}>
                      <OrderedProductCard product={product} orderId={selectedOrderId} />
                    </Fragment>
                  );
                })
              }
            </>
          ) : (
            <p className="ordered__products-empty">No products in this order</p>
          )}
        </ul>
      </div>
      <CloseBtn classes="ordered__close" handleClose={handleCloseModal} />
    </div>
  );
});
