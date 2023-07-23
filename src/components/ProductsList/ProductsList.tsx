import React, { Fragment, useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ProductItem } from '../ProductItem';
import { SortTypes } from '../../types/filter';

export const ProductsList = () => {
  const { products } = useAppSelector(state => state.products);
  const { sort, query } = useAppSelector(state => state.filter);
  const vissibleProducts = useMemo(() => {
    return products
      .filter(product => {
        switch (sort) {
          case SortTypes.Cars:
            return product.type.toLowerCase() === SortTypes.Cars;

          case SortTypes.Monitors:
            return product.type.toLowerCase() === SortTypes.Monitors;

          case SortTypes.Phones:
            return product.type.toLowerCase() === SortTypes.Phones;

          case SortTypes.All:
            return true;

          default:
            return false;
        }
      })
      .filter(product => {
        if (!query) {
          return product;
        }

        const lowerQuery = query.toLowerCase().trim();
        const lowerTitle = product.title.toLowerCase();

        return lowerTitle.includes(lowerQuery);
      });
  }, [products, sort, query]);

  return (
    <div className="products__list">
      {vissibleProducts.map(product => (
        <Fragment key={product.id}>
          <ProductItem product={product} />
        </Fragment>
      ))}
    </div>
  );
};
