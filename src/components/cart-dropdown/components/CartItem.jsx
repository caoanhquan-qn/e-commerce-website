import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      {/* <img src={item.imageUrl} /> */}
      <div>{item.name}</div>
      {/* <div>{item.price}</div> */}
    </div>
  );
};

export default CartItem;
