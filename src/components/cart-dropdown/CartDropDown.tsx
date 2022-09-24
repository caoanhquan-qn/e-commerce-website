import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import './CartDropDown.scss';
import CartItem from './components/CartItem';
import { selectCartItems } from '../../redux/selector';
const CHECKOUT_BUTTON_TITLE = 'GO TO CHECKOUT';

type cartDropDownPropsType = {
  onClickOutside: () => void;
};

const CartDropDown = ({ onClickOutside }: cartDropDownPropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  const cartItems = useSelector(selectCartItems);
  const cartIcon = document.querySelector('.cart-icon-container');
  const productImg = document.querySelectorAll('.image');
  const removeIcon = document.querySelectorAll('.remove-icon');
  const plusMinusIcon = document.querySelectorAll('.plus-minus-icon');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clicked = false;
      let inputElement = event.target as HTMLInputElement;
      productImg.length > 0 &&
        productImg.forEach((img) => {
          if (img.contains(inputElement)) clicked = true;
        });

      removeIcon.length > 0 &&
        removeIcon.forEach((icon) => {
          if (icon.contains(inputElement)) clicked = true;
        });

      plusMinusIcon.length > 0 &&
        plusMinusIcon.forEach((icon) => {
          if (icon.contains(inputElement)) clicked = true;
        });

      if (ref.current && cartIcon && !ref.current.contains(inputElement) && !cartIcon.contains(inputElement) && !clicked) {
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
