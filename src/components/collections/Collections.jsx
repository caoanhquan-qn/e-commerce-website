import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-items/CollectionItem';
import './Collections.scss';

function Collections({ collections }) {
  const navigate = useNavigate();
  const handleClickTitle = (event) => {
    const title = event.target.innerHTML.toLowerCase();
    navigate(`/shop/${title}`);
  };

  return (
    <div className="collections">
      <h1>Collections</h1>
      <div>
        {collections.map((collection) => {
          return (
            <div key={collection.id}>
              <h2>
                <span className="title" onClick={handleClickTitle}>
                  {collection.title.toUpperCase()}
                </span>
              </h2>
              <CollectionItem collectionItem={collection.items} productNumber={4} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
