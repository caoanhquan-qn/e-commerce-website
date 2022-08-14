import React from 'react';
import { useSelector } from 'react-redux';
import CheckOutHeader from '../../components/checkout-header/CheckOutHeader';
import CheckOutItems from '../../components/checkout-items/CheckOutItems';
import { selectCartItems } from '../../redux/selector';
import './CheckOutPage.scss';
import PaymentForm from '../../components/payment-form/PaymentForm';

const CheckOutPage = () => {
  const cartItems = useSelector(selectCartItems);
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
      </div>
      <PaymentForm />
    </div>
  );
};

export default CheckOutPage;
