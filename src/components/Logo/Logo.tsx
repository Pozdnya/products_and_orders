import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import logo from '../../images/logo.png';

export const Logo = () => {
  return (
    <div className="logo">
      <NavLink
        to="/"
        className="logo__link"
      >
        <img
          src={logo}
          alt="Logo"
          className="logo__link-img"
        />

        <span className="logo__link-text">Inventory</span>
      </NavLink>
    </div>
  );
};
