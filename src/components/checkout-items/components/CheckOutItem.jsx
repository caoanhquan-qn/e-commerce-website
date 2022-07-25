import React from 'react';
import { useDispatch } from 'react-redux';
import removeIcon from '../../../assets/img/remove.png';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus-icon.svg';
import { addItem, minusItem, removeItem } from '../../../redux/action';
import './CheckOutItem.scss';

const CheckOutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = checkoutItem;
  const handleAddItemToCart = () => {
    dispatch(addItem(checkoutItem));
  };
  const handleMinusItemFromCart = () => {
    dispatch(minusItem(checkoutItem));
  };
  const handleRemoveCheckOutItem = () => {
    dispatch(removeItem(checkoutItem));
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
