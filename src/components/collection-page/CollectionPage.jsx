import React from 'react';
import { useSelector } from 'react-redux';
import CollectionItem from '../collection-items/CollectionItem';
import Spinner from 'react-bootstrap/Spinner';
import { selectCollections } from '../../redux/selector';
import './CollectionPage.scss';

const CollectionPage = ({ collectionName }) => {
  const collections = useSelector(selectCollections);
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
