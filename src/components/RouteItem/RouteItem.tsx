import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './RouteItem.scss';

interface Props {
  route: {
    to: string;
    name: string;
  };
}

export const RouteItem: FC<Props> = ({ route }) => {
  const { to, name } = route;

  return (
    <li
      className="routes-list__item mt-3"
    >
      <NavLink
        to={to}
        className={({ isActive }) => cn('routes-list__item-link fw-bold',
          { 'routes-list__item-link--active': isActive })}
      >
        {name}
      </NavLink>
    </li>
  );
};
