import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './CustomButton.scss';

function CustomButton({ children, buttonType, isLoading, ...otherProps }) {
  const buttonStyle = {
    isGoogleSignIn: 'google-sign-in',
    addToCart: 'add-to-cart-btn',
    default: '',
  };
  return (
    <button className={`${buttonStyle[buttonType]} custom-button`} disabled={isLoading} {...otherProps}>
      {isLoading ? <Spinner animation="border" role="status" /> : children}
    </button>
  );
}

export default CustomButton;
