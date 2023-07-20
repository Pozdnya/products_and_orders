import React, { Fragment } from 'react';
import { RouteItem } from '../RouteItem';
import './RoutesList.scss';

export const RoutesList = () => {
  const routes = [
    { to: '/products', name: 'Products' },
    { to: '/orders', name: 'Orders' },
  ];

  return (
    <nav>
      <ul className="routes-list">
        {routes.map(route => (
          <Fragment key={route.name}>
            <RouteItem route={route} />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
