import React from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Input } from '../../controls/Input';
import { TopMenu } from '../TopMenu';

export const Header = () => {
  return (
    <div className="header">
      <div className="container-xl">
        <div className="header__content">
          <div className="header__search">
            <div className="header__search-logo">
              <Logo />
            </div>
            <div className="header__search-input">
              <Input />
            </div>
          </div>

          <div className="header__date">
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
