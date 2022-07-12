import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={imageUrl} />
      <div className="cart-item-content">
        <div>{name}</div>
        <div>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
