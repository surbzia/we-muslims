"use client";

import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import { useSearchParams } from "next/navigation";
import { request } from "@/services/request";
import api from "@/services/apis";

const DonationSuccess = () => {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(true);

    // const updateDonationStatus = async (donationId, payment_intent) => {
    //     try {
    //         const response = await request.get(api.donationUpdatePaymentStatus, {
    //             donationId: donationId,
    //             payment_id: payment_intent,
    //         });

    //         if (response.success) {
    //             setSuccess(true);
    //         } else {
    //             setError(response.message || "Failed to update donation status");
    //             // setTimeout(() => {
    //             //     window.location.href = '/';
    //             // }, 5000);
    //         }
    //     } catch (err) {
    //         console.error("API Error:", err);
    //         setError(err.message || "An error occurred while updating donation status");
    //     } finally {
    //         setLoading(false);
    //     }
    // };



    return (
        <>
            <PageHeader description={success ? "Donation successful" : "Donation failed"} pagename={success ? "Donation Success" : "Donation Failed"} />
            <section className="content-pricavy-cookies pt-4 mt-4 pb-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="calibri-bold color-6">Donation Status</h2>
                            {loading ? (
                                <div className="d-flex align-items-center">
                                    <div className="spinner-border text-primary me-2" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p>Processing your donation payment...</p>
                                </div>
                            ) : error ? (
                                <div className="alert alert-danger">
                                    <p>Error: {error}</p>
                                    <p>Please contact support if the problem persists.</p>
                                </div>
                            ) : success ? (
                                <div className="alert alert-success">
                                    <p>Your donation was successful! Thank you for your support.</p>
                                    <p>A confirmation has been sent to your email.</p>
                                </div>
                            ) : (
                                <div className="alert alert-info">
                                    <p>Donation status unknown. Please check your email for confirmation.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonationSuccess;