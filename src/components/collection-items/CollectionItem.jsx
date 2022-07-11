import React from 'react';
import Product from './components/Product';
import './CollectionItem.scss';

function CollectionItem(props) {
  const { collectionItem } = props;
  return (
    <div className="collection-items">
      {collectionItem
        .filter((_, idx) => idx < 4)
        .map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </div>
  );
}

export default CollectionItem;
