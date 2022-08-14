import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomButton from '../custom-button/CustomButton';
import './PaymentForm.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const data = await fetch('/api/create-payment-intent.js', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    console.log(data);
  };
  return (
    <form className="payment-form-container" onSubmit={paymentHandler}>
      <h2>Credit Card Payment: </h2>
      <CardElement />
      <CustomButton buttonType="default">Pay Now</CustomButton>
    </form>
  );
};
export default PaymentForm;
