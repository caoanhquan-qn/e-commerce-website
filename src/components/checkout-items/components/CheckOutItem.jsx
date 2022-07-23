import React, { useContext } from 'react';
import removeIcon from '../../../assets/img/remove.png';
import './CheckOutItem.scss';

import { CartContext } from '../../../context/CartContext';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus-icon.svg';

const removeType = {
  minus: 'minus',
  remove: 'remove',
};

const CheckOutItem = ({ checkoutItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = checkoutItem;
  const handleAddItemToCart = () => {
    addItemToCart(checkoutItem);
  };
  const handleMinusItemFromCart = () => {
    removeItemFromCart(checkoutItem, removeType['minus']);
  };
  const handleRemoveCheckOutItem = () => {
    removeItemFromCart(checkoutItem, removeType['remove']);
  };
  return (
    <div className="checkout-item">
      <img alt={name} src={imageUrl} />
      <span className="checkout-item-name">{name}</span>
      <div className="checkout-item-quantity">
        <div className="plus-minus-icon" onClick={handleMinusItemFromCart}>
          <MinusIcon />
        </div>
        <span>{quantity}</span>
        <div className="plus-minus-icon" onClick={handleAddItemToCart}>
          <PlusIcon />
        </div>
      </div>
      <span className="checkout-item-price">{price}</span>
      <img alt="remove icon" className="remove-icon" src={removeIcon} onClick={handleRemoveCheckOutItem} />
    </div>
  );
};

export default CheckOutItem;
