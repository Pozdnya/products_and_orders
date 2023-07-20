import React, { ChangeEvent } from 'react';
import './Input.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions as filterActions } from '../../redux/actions/filterActions';

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
        className="form__input"
        placeholder="Поиск"
        value={query}
        onChange={event => handleInput(event)}
      />
      <span className="form__clear">
        {query && (
          <button
            type="button"
            className="form__clear-btn"
            onClick={() => dispatch(filterActions.setQuery(''))}
          >
            X
          </button>
        )}
      </span>
    </form>
  );
};
