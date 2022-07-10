import React, { useContext } from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/svg/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';
import './CartIcon.scss';

const CartIcon = () => {
  const { cartCounter } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
      <ShoppingBag />
      <span className="cart-counter">{cartCounter}</span>
    </div>
  );
};

export default CartIcon;
