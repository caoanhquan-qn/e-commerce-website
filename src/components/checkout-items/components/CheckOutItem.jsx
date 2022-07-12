import React, { useContext } from 'react';
import removeIcon from '../../../assets/img/remove.png';
import './CheckOutItem.scss';

import { CartContext } from '../../../context/CartContext';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus-icon.svg';

const CheckOutItem = ({ checkoutItem }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = checkoutItem;
  return (
    <div className="checkout-item">
      <img src={imageUrl} />
      <span>{name}</span>
      <span>
        <div className="plus-minus-icon" onClick={() => {}}>
          <MinusIcon />
        </div>
        {quantity}
        <div className="plus-minus-icon" onClick={() => addItemToCart(checkoutItem)}>
          <PlusIcon />
        </div>
      </span>
      <span>{price}</span>
      <img className="remove-icon" src={removeIcon} />
    </div>
  );
};

export default CheckOutItem;
