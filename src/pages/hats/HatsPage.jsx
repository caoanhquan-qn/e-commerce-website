import React, { useContext } from 'react';
import CollectionItem from '../../components/collection-items/CollectionItem';
import { ProductContext } from '../../context/ProductContext';
import Spinner from 'react-bootstrap/Spinner';

const HatsPage = () => {
  const { collections } = useContext(ProductContext);
  const hatsCollection = collections.find((collection) => collection.title.toLowerCase() === 'hats');
  if (hatsCollection) {
    const { title, items } = hatsCollection;
    return (
      <div>
        <h2>{title.toUpperCase()}</h2>
        <CollectionItem collectionItem={items} productNumber={items.length} />
      </div>
    );
  } else {
    return <Spinner animation="border" role="status" />;
  }
};

export default HatsPage;
