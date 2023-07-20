import React from 'react';
import './Modal.scss';
import { Button } from '../../controls/Button';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
import { CloseBtn } from '../../controls/CloseBtn';

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h3 className="modal__container-message">Are you sure to want delete this product?</h3>

        <div className="modal__container-item">
          <img src="" alt="" className="modal__container-item-photo" />
          <div className="modal__container-item-info">
            <p className="modal__container-item-info-text">Title</p>
            <p className="modal__container-item-info-sn">Type</p>
          </div>
        </div>

        <div className="modal__container-btns">
          <Button classes="modal__container-btns-btn">Cancel</Button>
          <Button classes="modal__container-btns-btn">
            <IconRemove className="modal__container-btns-btn-icon" />
            Delete
          </Button>
        </div>

        <CloseBtn classes="modal__close" />
      </div>
    </div>
  );
};
