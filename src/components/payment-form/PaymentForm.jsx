import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomButton from '../custom-button/CustomButton';
import './PaymentForm.scss';

const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amountInCents = amount * 100;
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const response = await fetch('/api/create-payment-intent.js', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amountInCents }),
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Quan',
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Successful Payment');
      }
    }
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
