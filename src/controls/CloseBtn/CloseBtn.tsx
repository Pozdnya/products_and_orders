import React, { FC, memo } from 'react';
import { Button } from '../Button';

interface Props {
  handleClose?: () => void;
  classes?: string;
}

export const CloseBtn: FC<Props> = memo(({ handleClose, classes }) => {
  return (
    <Button
      classes={classes}
      onClick={handleClose}
    >
      <span className="ordered__close-text">X</span>
    </Button>
  );
});
