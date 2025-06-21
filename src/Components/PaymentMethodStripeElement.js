'use client'; // Required for client-side components in Next.js 13+

import React, { useState } from "react";
import "../assets/css/stripeElement.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation"; // Changed from react-router-dom
import { FaHeart } from "react-icons/fa";

const PaymentForm = () => {
  const router = useRouter(); // Changed from useNavigate
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });

      if (paymentMethodError) {
        throw paymentMethodError;
      }

      // Example API call - replace with your actual implementation
      const response = await fetch('/api/payment-methods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: paymentMethod.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        router.push("/setting-payment");
        // You might want to use a toast or other notification here
      } else {
        throw new Error(data.message || "Payment failed");
      }
    } catch (err) {
      setError(err.message || "Payment failed. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <CardElement
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
      <button
        type="submit"
        className="btn-wrapper calibri-bold mt-3 view w-100"
        disabled={!stripe || isSubmitting}
      >
        <FaHeart className="me-2" />

        {isSubmitting ? "Processing..." : "  Donate Now"}
      </button>
    </form>
  );
};

const PaymentMethodStripeElement = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentMethodStripeElement;