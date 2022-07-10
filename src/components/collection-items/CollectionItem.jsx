import React from 'react';
import Product from './components/Product';
import './CollectionItem.scss';

function CollectionItem(props) {
  const { collectionItem } = props;
  return (
    <div className="collection-items">
      {collectionItem
        .filter((_, idx) => idx < 4)
        .map((item) => {
          return <Product key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} />;
        })}
    </div>
  );
}

export default CollectionItem;
