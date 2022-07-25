import React from 'react';
import Collections from '../../components/collections/Collections';
import { useSelector } from 'react-redux';

const ShopPage = () => {
  const collections = useSelector((state) => state.collections.collections);
  return (
    <div>
      <Collections collections={collections} />
    </div>
  );
};

export default ShopPage;
