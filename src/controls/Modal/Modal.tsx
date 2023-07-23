import React, { useCallback, useEffect } from 'react';
import { Button } from '../Button';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as orderActions } from '../../redux/actions/orderActions';
import { actions as productActions } from '../../redux/actions/productActions';
import { getProductById } from '../../utils/variables';
import { CloseBtn } from '../CloseBtn';

export const Modal = () => {
  const { selectedProductId, products } = useAppSelector((state) => state.products);
  const { selectedOrderId } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  const deletedProduct = getProductById(products, selectedProductId);

  const handleDeleteClick = useCallback(() => {
    dispatch(orderActions.deleteProductFromOrder(selectedOrderId, selectedProductId));
    dispatch(productActions.setSelectedProductId(0));
  }, [dispatch, selectedOrderId, selectedProductId]);

  const handleCloseModal = useCallback(() => {
    dispatch(productActions.setSelectedProductId(0));
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.modal-del')) {
        dispatch(productActions.setSelectedProductId(0));
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-del">
      <div className="modal-del__title p-4">
        <h3 className="modal-del__title-text">Are you shure want to delete this item?</h3>
      </div>

      <div className="modal-del__product d-flex align-items-center gap-5 border-top border-bottom">
        <img src={deletedProduct?.photo} alt="" className="modal-del__product-image" />
        <div className="modal-del__product-info">
          <h4 className="modal-del__product-title">{deletedProduct?.title}</h4>
          <p className="modal-del__product-sn">{`SN-${deletedProduct?.serialNumber}`}</p>
        </div>
      </div>

      <div className="modal-del__footer d-flex justify-content-end gap-5 px-3 py-5">
        <Button
          classes="modal-del__footer-btn"
          onClick={handleCloseModal}
        >
          Cancel
        </Button>
        <Button
          classes="modal-del__footer-btn d-flex align-items-center justify-content-center gap-2"
          onClick={handleDeleteClick}
        >
          <IconRemove className="modal-del__footer-btn-icon" />
          Delete
        </Button>
      </div>

      <CloseBtn handleClose={handleCloseModal} classes="modal-del__close" />
    </div>
  );
};
