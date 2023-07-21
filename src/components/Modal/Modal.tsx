import React from 'react';
import './Modal.scss';
import { Button } from '../../controls/Button';
import { ReactComponent as IconRemove } from '../../images/icon-trash.svg';
// import { CloseBtn } from '../../controls/CloseBtn';

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <Button classes="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer d-flex jusify-content-between">
            <Button classes="btn btn-secondary" data-bs-dismiss="modal">
              Delete
              <IconRemove style={{ width: '10px', height: '10px' }} />
            </Button>
            <Button classes="btn btn-primary">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
