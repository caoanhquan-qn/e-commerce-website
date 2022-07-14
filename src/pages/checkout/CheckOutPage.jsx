import React, { useContext } from 'react';
import CheckOutHeader from '../../components/checkout-header/CheckOutHeader';
import CustomButton from '../../components/custom-button/CustomButton';
import CheckOutItems from '../../components/checkout-items/CheckOutItems';
import './CheckOutPage.scss';
import { CartContext } from '../../context/CartContext';
const CheckOutPage = () => {
  const { cartItems } = useContext(CartContext);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * item.price;
  });
  return (
    <div className="checkout-page">
      <CheckOutHeader />
      <CheckOutItems checkOutItems={cartItems} />
      <div className="checkout-footer">
        <div className="total">TOTAL: ${total}</div>
        <div>
          <CustomButton buttonType="default">Pay Now</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
