import React from 'react';
import './SideBar.scss';
import { UserLogo } from '../UserLogo';
import { RoutesList } from '../RoutesList';

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <UserLogo />
      <RoutesList />
    </aside>
  );
};
