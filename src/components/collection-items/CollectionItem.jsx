import React from 'react';
import './CollectionItem.scss';

function CollectionItem(props) {
  const { collectionItem } = props;
  return (
    <div className="collection-items">
      {collectionItem
        .filter((_, idx) => idx < 4)
        .map((item) => {
          return (
            <div key={item.id} className="collection-item">
              <div
                className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              {/* <img key={item.id} src={item.imageUrl} alt={item.name} /> */}
              <div className="item-content">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CollectionItem;
