'use client';

import React, { useState } from "react";
import "../assets/css/stripeElement.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

const PaymentForm = ({ StripeResponse }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  // Call this when card details are complete
  const handleCardChange = async (event) => {
    setError(null);
    if (event.complete && stripe && elements) {
      try {
        const { error: paymentMethodError, paymentMethod } =
          await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
          });

        if (paymentMethodError) {
          throw paymentMethodError;
        }

        if (StripeResponse) {
          StripeResponse({ paymentMethod: paymentMethod.id });
        }
      } catch (err) {
        setError(err.message || "Payment failed. Please try again.");
        console.error("Payment error:", err);
      }
    }
  };

  return (
    <>
      <CardElement
        onChange={handleCardChange}
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
              iconColor: "#666ee8",
            },
            invalid: {
              color: "#9e2146",
              iconColor: "#FFC7EE",
            },
          },
          hidePostalCode: true,
        }}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
};

const PaymentMethodStripeElement = (props) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm StripeResponse={props.StripeResponse} />
    </Elements>
  );
};

export default PaymentMethodStripeElement;