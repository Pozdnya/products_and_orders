import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Logo = () => {
  return (
    <div>
      <NavLink
        to="/"
        className="text-decoration-none d-flex align-items-center gap-2"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-25 h-25"
        />

        <span className="fs-4 span-text">Inventory</span>
      </NavLink>
    </div>
  );
};
