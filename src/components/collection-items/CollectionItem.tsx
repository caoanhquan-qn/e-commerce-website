import React from 'react';
import Product from './components/Product';
import './CollectionItem.scss';
import { collectionType, productType } from '../../redux/types';

type collectionItemPropsType = {
  collectionItem: productType[];
  productNumber: number;
};

function CollectionItem({ collectionItem, productNumber }: collectionItemPropsType) {
  return (
    <div className="collection-items">
      {collectionItem
        .filter((_, idx) => idx < productNumber)
        .map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}

export default CollectionItem;
