import React, { useEffect, useRef, useContext } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      let onImgClick = false;
      productImg.length > 0 &&
        productImg.forEach((img) => {
          if (img.contains(event.target)) onImgClick = true;
        });

      if (ref.current && cartIcon && !ref.current.contains(event.target) && !cartIcon.contains(event.target) && !onImgClick) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);
  return (
    <div ref={ref} className="cart-dropdown-container">
      {cartItems.map((cartItem, idx) => {
        return <CartItem key={idx} item={cartItem} />;
      })}
      <CustomButton buttonType="default">{CHECKOUT_BUTTON_TITLE}</CustomButton>
    </div>
  );
};

export default CartDropDown;
