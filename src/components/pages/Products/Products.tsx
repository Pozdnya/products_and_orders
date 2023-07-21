/* eslint-disable no-console */
import React from 'react';
import './Products.scss';
import { ProductsList } from '../../ProductsList';
import { Select } from '../../../controls/Select';
import { useAppSelector } from '../../../redux/hooks';

export const Products = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className="products w-100 h-100">
      <div className="d-flex gap-5 align-items-center">
        <h2>{`Products / ${products.length}`}</h2>
        <Select />
      </div>
      <ProductsList />
    </div>
  );
};
