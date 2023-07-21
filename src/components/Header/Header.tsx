import React from 'react';
import { Logo } from '../Logo';
import { Input } from '../../controls/Input';
import { TopMenu } from '../TopMenu';
import './Header.scss';

export const Header = () => {
  return (
    <div className="border-bottom py-4 shadow-lg header">
      <div className="container-xl">
        <div
          className=" justify-content-between align-items-center d-flex"
        >
          <div className="d-flex align-items-center gap-4">
            <div>
              <Logo />
            </div>
            <div className="header__search-input">
              <Input />
            </div>
          </div>

          <div>
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
