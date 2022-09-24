import React from 'react';
import { productType } from '../../redux/types';
import './CheckOutItems.scss';
import CheckOutItem from './components/CheckOutItem';

type checkOutItemsPropsType = {
  checkOutItems: productType[];
};

const CheckOutItems = ({ checkOutItems }: checkOutItemsPropsType) => {
  return (
    <>
      {checkOutItems.map((checkoutItem, idx) => {
        return <CheckOutItem key={idx} checkoutItem={checkoutItem} />;
      })}
    </>
  );
};

export default CheckOutItems;
