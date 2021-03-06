import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ShoppingBag } from '../../assets/svg/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ onClick }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.map((item) => item.quantity).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return (
    <div className="cart-icon-container" onClick={onClick}>
      <ShoppingBag />
      <span className="cart-counter">{totalAmount}</span>
    </div>
  );
};

export default CartIcon;
