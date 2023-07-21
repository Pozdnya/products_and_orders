import React, { ChangeEvent } from 'react';
import './Input.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as filterActions } from '../../redux/actions/filterActions';
import { Button } from '../Button';

export const Input = () => {
  const dispatch = useAppDispatch();
  const { query } = useAppSelector(state => state.filter);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.setQuery(event.target.value as string));
  };

  return (
    <form className="form" action="">
      <input
        type="text"
        className="border-1 border-light px-3 py-2 input bg-light"
        placeholder="Search"
        value={query}
        onChange={event => handleInput(event)}
      />
      {query && (
        <Button
          classes="form__clear shadow-sm"
          onClick={() => dispatch(filterActions.setQuery(''))}
        >
          <span className="form__clear-text text-light">
            X
          </span>
        </Button>
      )}
    </form>
  );
};
