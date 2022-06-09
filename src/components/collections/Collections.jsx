import React from 'react';
import CollectionItem from '../collection-items/CollectionItem';
import './Collections.scss';

function Collections(props) {
  const { collections } = props;
  return (
    <div className="collections">
      <h1>Collections</h1>
      <div>
        {collections.map((collection) => {
          return (
            <div key={collection.id}>
              <h2 className="title">{collection.title.toUpperCase()}</h2>
              <CollectionItem collectionItem={collection.items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
