import React, { ChangeEvent } from 'react';
import './Select.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SortTypes } from '../../types/filter';
import { actions as filterActions } from '../../redux/actions/filterActions';

export const Select = () => {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterActions.setSort(event.target.value as SortTypes));
  };

  return (
    <label htmlFor="select" className="filter-types">
      Type: &nbsp;
      <select
        name="select"
        id="select"
        className="filter-types__select"
        onChange={handleSelect}
      >
        <option value="all" className="filter-types__select-option">All</option>
        {products.map(({ id, type }) => (
          <option
            key={id}
            value={type.toLowerCase()}
            className="filter-types__select-option"
          >
            {type}
          </option>
        ))}
      </select>
    </label>
  );
};
