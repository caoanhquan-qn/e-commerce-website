import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './CustomButton.scss';

type customButtonProp = {
  children?: ReactNode;
  buttonType?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({ children, buttonType, isLoading, ...otherProps }: customButtonProp) => {
  const buttonStyle = {
    isGoogleSignIn: 'google-sign-in',
    addToCart: 'add-to-cart-btn',
    default: '',
  };

  return (
    <button className={`${buttonStyle[buttonType as keyof typeof buttonStyle]} custom-button`} disabled={isLoading} {...otherProps}>
      {isLoading ? <Spinner animation="border" role="status" /> : children}
    </button>
  );
};

export default CustomButton;
