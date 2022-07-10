import React from 'react';
import './CustomButton.scss';

function CustomButton({ children, buttonType, ...otherProps }) {
  const buttonStyle = {
    isGoogleSignIn: 'google-sign-in',
    addToCart: 'add-to-cart-btn',
    default: '',
  };
  return (
    <button className={`${buttonStyle[buttonType]} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
