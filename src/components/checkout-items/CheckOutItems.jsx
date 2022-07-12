import React from 'react';
import './CheckOutItems.scss';
import CheckOutItem from './components/CheckOutItem';

const CheckOutItems = ({ checkOutItems }) => {
  return checkOutItems.map((checkoutItem, idx) => {
    return <CheckOutItem key={idx} checkoutItem={checkoutItem} />;
  });
};

export default CheckOutItems;
