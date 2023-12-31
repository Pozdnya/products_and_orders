import React from 'react';
import { ReactComponent as IconGear } from '../../images/icon-gear.svg';

export const UserLogo = () => {
  return (
    <div className="user-logo py-5">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="user-logo__photo"
      />
      <div className="user-logo__icon">
        <IconGear className="user-logo__icon-gear p-2" />
      </div>
    </div>
  );
};
