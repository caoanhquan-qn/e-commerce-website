import React from 'react';
import './CheckOutHeader.scss';
const CheckOutHeader = () => {
  return (
    <div className="checkout-header-container">
      <div>Product</div>
      <div>Description</div>
      <div>Quantity</div>
      <div>Price</div>
      <div>Remove</div>
    </div>
  );
};

export default CheckOutHeader;
