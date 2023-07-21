import React from 'react';
import { UserLogo } from '../UserLogo';
import { RoutesList } from '../RoutesList';
import './SideBar.scss';

export const SideBar = () => {
  return (
    <aside className="aside d-flex flex-column align-items-center border-end">
      <UserLogo />
      <RoutesList />
    </aside>
  );
};
