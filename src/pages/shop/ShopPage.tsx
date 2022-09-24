import React from 'react';
import Collections from '../../components/collections/Collections';
import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/selector';

const ShopPage = () => {
  const collections = useSelector(selectCollections);
  return (
    <div>
      <Collections collections={collections} />
    </div>
  );
};

export default ShopPage;
