"use client";

import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import api from "@/services/apis";

const StripePayment = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(api.getPaymentIntent, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => {

                setClientSecret(data.client_secret)
            });

        console.log(clientSecret);
    }, [amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();

        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
            },
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
        }
        setLoading(false);
    };




    if (!clientSecret || !stripe || !elements) {
        return (
            <div className="flex items-center justify-center">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
            <div className="row">
                <div className="col-md-12">
                    <PaymentElement />
                </div>
                {errorMessage && <div>{errorMessage}</div>}
                <div className="col-md-12 mt-3">
                    <button
                        disabled={!stripe || loading}
                        className="btn-wrapper w-100"
                    >
                        {!loading ? `Donate $${amount}` : "Processing..."}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default StripePayment;