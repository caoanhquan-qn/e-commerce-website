import React, { useContext } from 'react';
import CollectionItem from '../collection-items/CollectionItem';
import { ProductContext } from '../../context/ProductContext';
import Spinner from 'react-bootstrap/Spinner';
import './CollectionPage.scss';

const CollectionPage = ({ collectionName }) => {
  const { collections } = useContext(ProductContext);
  const collection = collections.find((collection) => collection.title.toLowerCase() === collectionName);
  if (collection) {
    const { title, items } = collection;
    return (
      <div className="collection-page-container">
        <h2>{title.toUpperCase()}</h2>
        <CollectionItem collectionItem={items} productNumber={items.length} />
      </div>
    );
  } else {
    return <Spinner animation="border" role="status" />;
  }
};

export default CollectionPage;
