"use client";

import { useEffect, useRef, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import api from '@/services/apis';
import { request } from '@/services/request';

export default function StripeCardElement({ formData, amount, setErrorsFromServer, onSuccess }) {
    const cardElementRef = useRef(null);
    const stripeRef = useRef(null);
    const elementsRef = useRef(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cardError, setCardError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    // Initialize Stripe Elements
    useEffect(() => {
        let mounted = true;

        async function setupStripe() {
            try {
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
                if (!mounted) return;

                stripeRef.current = stripe;
                const elements = stripe.elements();
                elementsRef.current = elements;

                const cardElement = elements.create('card', {
                    hidePostalCode: true,
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#32325d',
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            '::placeholder': {
                                color: '#aab7c4'
                            }
                        },
                        invalid: {
                            color: '#fa755a',
                            iconColor: '#fa755a'
                        }
                    }
                });

                cardElement.mount(cardElementRef.current);

                // Add real-time validation
                cardElement.on('change', (event) => {
                    if (event.error) {
                        setCardError(event.error.message);
                    } else {
                        setCardError('');
                    }
                });

            } catch (error) {
                console.error('Error initializing Stripe:', error);
                setSubmitError('Failed to initialize payment system. Please refresh the page.');
            }
        }

        setupStripe();

        return () => {
            mounted = false;
            if (elementsRef.current) {
                const elements = elementsRef.current;
                elements.getElement('card')?.unmount();
            }
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitError('');
        setLoading(true);

        if (!stripeRef.current || !elementsRef.current) {
            setSubmitError('Payment system not ready. Please try again.');
            setLoading(false);
            return;
        }

        try {
            const { error, paymentMethod } = await stripeRef.current.createPaymentMethod({
                type: 'card',
                card: elementsRef.current.getElement('card'),
            });

            if (error) {
                setCardError(error.message);
                setLoading(false);
                return;
            }

            setPaymentMethod(paymentMethod);

            const response = await request.post(api.donate, {
                ...formData,
                payment_method: paymentMethod.id,
                amount: amount,
                currency: 'usd'
            });

            if (response.success) {
                onSuccess?.(response.donationId);
                window.location.href = `${process.env.NEXT_PUBLIC_SITE_URL}/donation-success?amount=${amount}&donationId=${response.donationId}`;
            } else {
                setSubmitError(response.message || 'Payment failed. Please try again.');
                setErrorsFromServer(response.errors || {});
            }
        } catch (error) {
            setErrorsFromServer(error.errors || {});
            setSubmitError(error.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <div
                        id="card-element"
                        ref={cardElementRef}
                        className={`p-3 border rounded ${cardError ? 'border-red-500' : 'border-gray-300'}`}
                    ></div>
                    {cardError && (
                        <p className="mt-1 text-sm text-red-600">{cardError}</p>
                    )}
                </div>

                {Object.keys(validationErrors).length > 0 && (
                    <div className="p-4 bg-red-50 rounded-md">
                        <h3 className="text-sm font-medium text-red-800">Please fix the following errors:</h3>
                        <ul className="mt-2 list-disc list-inside text-sm text-red-700">
                            {Object.entries(validationErrors).map(([field, error]) => (
                                <li key={field}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {submitError && (
                    <div className="p-4 bg-red-50 rounded-md">
                        <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        `Donate $${amount}`
                    )}
                </button>
            </form>
        </div>
    );
}