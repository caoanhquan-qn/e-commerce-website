import React from 'react';
import Product from './components/Product';
import './CollectionItem.scss';

function CollectionItem({ collectionItem, productNumber }) {
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
