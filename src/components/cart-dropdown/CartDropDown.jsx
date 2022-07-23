import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import './CartDropDown.scss';
import { CartContext } from '../../context/CartContext';
import CartItem from './components/CartItem';
const CHECKOUT_BUTTON_TITLE = 'GO TO CHECKOUT';

const CartDropDown = ({ onClickOutside }) => {
  const ref = useRef(null);
  const { cartItems } = useContext(CartContext);
  const cartIcon = document.querySelector('.cart-icon-container');
  const productImg = document.querySelectorAll('.image');
  const removeIcon = document.querySelectorAll('.remove-icon');
  const plusMinusIcon = document.querySelectorAll('.plus-minus-icon');

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clicked = false;
      productImg.length > 0 &&
        productImg.forEach((img) => {
          if (img.contains(event.target)) clicked = true;
        });

      removeIcon.length > 0 &&
        removeIcon.forEach((icon) => {
          if (icon.contains(event.target)) clicked = true;
        });

      plusMinusIcon.length > 0 &&
        plusMinusIcon.forEach((icon) => {
          if (icon.contains(event.target)) clicked = true;
        });

      if (ref.current && cartIcon && !ref.current.contains(event.target) && !cartIcon.contains(event.target) && !clicked) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div ref={ref} className="cart-dropdown-container">
      <div className="cart-items-list">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, idx) => {
            return <CartItem key={idx} item={cartItem} />;
          })
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton buttonType="default">{CHECKOUT_BUTTON_TITLE}</CustomButton>
      </Link>
    </div>
  );
};

export default CartDropDown;
