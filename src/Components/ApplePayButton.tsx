// components/ApplePayButton.tsx
import {
    useStripe,
    useElements,
    PaymentRequestButtonElement,
  } from '@stripe/react-stripe-js';
  import { useEffect, useState } from 'react';
  
  export default function ApplePayButton({ customerId }: { customerId: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState<any>(null);
  
    useEffect(() => {
      if (!stripe) return;
  
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Example Payment',
          amount: 1500,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
  
      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
  
      pr.on('paymentmethod', async (ev) => {
        const response = await fetch('/api/attach-payment-method', {
          method: 'POST',
          body: JSON.stringify({
            payment_method: ev.paymentMethod.id,
            customer_id: customerId,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          ev.complete('success');
          alert('Payment method saved successfully!');
        } else {
          ev.complete('fail');
          alert('Failed to save payment method.');
        }
      });
    }, [stripe]);
  
    if (!paymentRequest) return null;
  
    return (
      <PaymentRequestButtonElement
        options={{ paymentRequest }}
      />
    );
  }
  