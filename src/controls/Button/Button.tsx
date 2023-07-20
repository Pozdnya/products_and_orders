import React, { FC, MouseEventHandler } from 'react';

type ButtonType = (MouseEventHandler<HTMLButtonElement>);

interface Props {
  classes?: string;
  children?: unknown;
  onClick?: ButtonType;

}

export const Button: FC<Props> = ({ children, classes, onClick }) => {
  return (
    <button
      type="button"
      className={`${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
