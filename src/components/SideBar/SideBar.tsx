import React from 'react';
import { UserLogo } from '../UserLogo';
import { RoutesList } from '../RoutesList';

export const SideBar = () => {
  return (
    <aside className="aside d-flex flex-column align-items-center border-end">
      <UserLogo />
      <RoutesList />
    </aside>
  );
};
