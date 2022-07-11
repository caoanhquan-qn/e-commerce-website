import React, { useEffect, useRef } from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropDown.scss';
const CHECKOUT_BUTTON_TITLE = 'GO TO CHECKOUT';

const CartDropDown = ({ onClickOutside }) => {
  const ref = useRef(null);
  const cartIcon = document.querySelector('.cart-icon-container');
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && cartIcon && !ref.current.contains(event.target) && !cartIcon.contains(event.target)) {
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
      <CustomButton buttonType="default">{CHECKOUT_BUTTON_TITLE}</CustomButton>
    </div>
  );
};

export default CartDropDown;
