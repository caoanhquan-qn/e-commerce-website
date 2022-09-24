import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomButton from '../custom-button/CustomButton';
import { selectCurrentUser } from '../../redux/selector';
import './PaymentForm.scss';

interface IPaymentForm {
  amount: number;
}

const PaymentForm = ({ amount }: IPaymentForm) => {
  const stripe = useStripe();
  const elements = useElements();
  const amountInCents = amount * 100;
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);
    const response = await fetch('/api/create-payment-intent.js', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amountInCents }),
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;
    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser && currentUser.displayName ? currentUser.displayName : 'Guest',
          },
        },
      });
      setIsProcessingPayment(false);
      if (paymentResult.error) {
        alert(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          setShowToast(true);
        }
      }
    }
  };
  return (
    <form className="payment-form-container" onSubmit={paymentHandler}>
      <h2>Credit Card Payment: </h2>
      <CardElement />
      <CustomButton buttonType="default" isLoading={isProcessingPayment}>
        Pay Now
      </CustomButton>
      <Toast className="d-inline-block m-1" bg="primary" onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
        <Toast.Header>
          <strong className="me-auto">Stripe</strong>
        </Toast.Header>
        <Toast.Body className="text-white">Successful Payment</Toast.Body>
      </Toast>
    </form>
  );
};
export default PaymentForm;
