"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import {
	dollar,
	donation,
	donation1,
	donationsignboard,
	orgiicon,
	orgiicon1,
} from "@/Constant/Index";
import { FaHeart } from "react-icons/fa";
import PaymentMethodStripeElement from "@/Components/PaymentMethodStripeElement";
import { MyContext } from "@/Components/MyContextProvider";
import { request } from "@/services/request";
import api from "@/services/apis";
import { useSearchParams } from "next/navigation";
import StripePayment from "@/Components/StripePayment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
	throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Donation = () => {
	const { categories } = useContext(MyContext);
	const query = useSearchParams();
	// Form state
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
		amount: 12,
		custom_amount: 12,
		payment_token: '',
		payment_method: 'Offline Donation',
		frequency: 'one_time',
		category_id: query.get("category_id") || '',
		program_id: query.get("program_id") || '',
		event_id: query.get("event_id") || '',
	});

	const [programs, setPrograms] = useState([]);
	const [errors, setErrors] = useState({});
	const [formFilled, setFormFilled] = useState(false);

	// Donation options
	const amounts = ["10", "25", "50", "100", "250", "custom"];

	const payment_methods = [
		{ value: "offline", label: "Offline Donation" },
		{ value: "credit_card", label: "Credit Card" },
	];

	const donationFrequencies = [
		{ value: "one_time", label: "One Time" },
		{ value: "monthly", label: "Monthly" },
		{ value: "quarterly", label: "Quarterly" },
		{ value: "yearly", label: "Yearly" },
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors(prev => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	// Get programs when category changes
	const getPrograms = async (e) => {
		const category_id = e.target.value;
		setFormData(prev => ({ ...prev, category_id, program_id: '' }));

		if (category_id) {
			const { data } = await request.get(api.program(`?loop=true&category_id=${category_id}`));
			setPrograms(data);
		} else {
			setPrograms([]);
		}
	};

	useEffect(() => {
		const program_id = query.get("program_id");
		const path = query.get("path");
		const amount = query.get("amount");
		if (program_id) {
			setFormData(prev => ({ ...prev, program_id }));
		}
		if (path && path === "home") {
			setFormData(prev => ({ ...prev, amount }));
			if (amount && !amounts.includes(amount)) {
				setFormData(prev => ({ ...prev, amount: "custom", custom_amount: amount }));
			}
		}
	}, [query]);

	// Helper function to render error message
	const renderErrorMessage = (fieldName) => {
		if (errors[fieldName]) {
			return (
				<div className="text-danger small mt-1">
					{errors[fieldName]}
				</div>
			);
		}
		return null;
	};


	const handleFilledForm = () => {
		const newErrors = {};

		// Validate amount
		if (!formData.amount || (formData.amount === "custom" && (!formData.custom_amount || isNaN(formData.custom_amount) || Number(formData.custom_amount) <= 0))) {
			newErrors.custom_amount = "Please enter a valid donation amount.";
		}

		// Validate payment method
		if (!formData.payment_method) {
			newErrors.payment_method = "Please select a payment method.";
		}

		// Validate frequency
		if (!formData.frequency) {
			newErrors.frequency = "Please select a donation frequency.";
		}

		// Validate category
		if (!formData.category_id) {
			newErrors.category_id = "Please select a donation type.";
		}

		// Validate first name
		if (!formData.first_name.trim()) {
			newErrors.first_name = "First name is required.";
		}

		// Validate last name
		if (!formData.last_name.trim()) {
			newErrors.last_name = "Last name is required.";
		}

		// Validate email
		if (!formData.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address.";
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			setFormFilled(true);
		}
	}

	return (
		<>
			<PageHeader description="this is description" pagename="Donation" />
			<section className="donation-page pt-5 pb-5 mt-4 mb-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="border p-3 radius-20">
								<div className="warning mb-4">
									<div>
										<div className="lineimg"></div>
										<Image
											src={donationsignboard}
											className="img-fluid lineimg1"
											alt=""
										/>
									</div>
									<h4 className="calibri-regular level-6 mb-0">
										<span className="calibri-bold">Notice:</span> Test mode is
										enabled. While in test mode no live donations are processed.
									</h4>
								</div>

								<div className="wrapper-donation1 border-bottom pb-2">
									<div className="row mt-4">
										<div className="col-lg-12 mb-4">
											<div className="wrapper-dollar">
												<Image
													src={dollar}
													className="img-fluid dollar"
													alt=""
												/>
												<h4 className="mb-0 calibri-bold level-5">
													{formData.amount === "custom" && formData.custom_amount !== ""
														? formData.custom_amount
														: formData.amount !== ""
															? formData.amount
															: "0"}
												</h4>
											</div>
										</div>

										<div className="col-lg-12 mb-4">
											<div className="donation-box">
												<div
													className="donation-amounts"
													style={{
														display: "flex",
														flexWrap: "wrap",
														gap: "1rem",
														marginBottom: "1rem",
													}}
												>
													{amounts.map((amt) => (
														<div key={amt}>
															<input
																type="radio"
																name="amount"
																id={`donation-${amt}`}
																value={amt}
																className="donation-radio"
																checked={formData.amount === amt}
																onChange={() => {
																	setFormData(prev => ({
																		...prev,
																		amount: amt,
																		custom_amount: amt === "custom" ? prev.custom_amount : ""
																	}));
																}}
															/>
															<label
																htmlFor={`donation-${amt}`}
																className="donation-option"
															>
																{amt === "custom"
																	? "Custom Amount"
																	: `$${amt}`}
															</label>
														</div>
													))}
												</div>

												{formData.amount === "custom" && (
													<div className="row">
														<div className="col-lg-6">
															<div className="donation-input-group">
																<span>$</span>
																<input
																	type="number"
																	name="custom_amount"
																	placeholder="100"
																	value={formData.custom_amount}
																	onChange={(e) => {
																		setFormData(prev => ({
																			...prev,
																			custom_amount: e.target.value,
																			amount: "custom"
																		}));
																	}}
																/>
															</div>
															{renderErrorMessage('custom_amount')}
														</div>
													</div>
												)}
												{renderErrorMessage('amount')}
											</div>
										</div>
									</div>
								</div>

								{/* Payment Method Section */}
								<div className="row mt-3 border-bottom pb-3">
									<div className="col-lg-12">
										<h3 className="calibri-bold mb-3">
											Select Payment Method
										</h3>
										<div className="payment-method-group">
											{payment_methods.map((method) => (
												<label
													key={method.value}
													className={`payment-method-option ${formData.payment_method === method.value ? "active" : ""
														}`}
												>
													<input
														type="radio"
														name="payment_method"
														value={method.value}
														checked={formData.payment_method === method.value}
														onChange={handleChange}
													/>
													{method.label}
												</label>
											))}
										</div>
										{renderErrorMessage('payment_method')}
									</div>
								</div>

								{/* Donation Frequency Section */}
								<div className="row mt-4 border-bottom pb-3">
									<div className="col-lg-12">
										<h3 className="calibri-bold mb-3">
											Choose your donation frequency
										</h3>
										<div className="payment-method-group">
											{donationFrequencies.map((freq) => (
												<label
													key={freq.value}
													className={`payment-method-option ${formData.frequency === freq.value ? "active" : ""
														}`}
												>
													<input
														type="radio"
														name="frequency"
														value={freq.value}
														checked={formData.frequency === freq.value}
														onChange={handleChange}
													/>
													{freq.label}
												</label>
											))}
										</div>
										{renderErrorMessage('frequency')}
									</div>
								</div>

								{/* Program Selection Section */}
								<div className="row mt-4">
									<div className="col-lg-12">
										<h3 className="calibri-bold mb-3">
											I Would Like To Donate To:{" "}
										</h3>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6">
										<div className="custom-select-wrapper">
											<select
												className="custom-select"
												name="category_id"
												value={formData.category_id}
												onChange={(e) => {
													handleChange(e);
													getPrograms(e);
												}}
											>
												<option value="">Select Donation Type</option>
												{categories.map((category) => (
													<option key={category.id} value={category.id}>
														{category.title}
													</option>
												))}
											</select>
											{renderErrorMessage('category_id')}
										</div>
									</div>
									<div className="col-lg-6">
										<div className="custom-select-wrapper">
											<select
												className="custom-select"
												name="program_id"
												value={formData.program_id}
												onChange={handleChange}
											>
												<option value="">Donate To (Programs)</option>
												{programs.map((program) => (
													<option key={program.id} value={program.id}>
														{program.title}
													</option>
												))}
											</select>
											{renderErrorMessage('program_id')}
										</div>
									</div>
								</div>

								{/* Personal Info Section */}
								<div className="row mt-4">
									<div className="col-lg-12">
										<h3 className="calibri-bold mb-3">Personal Info </h3>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6">
										<div className="mb-3">
											<input
												type="text"
												name="first_name"
												className={`form-control bg-transparent ${errors.first_name ? 'is-invalid' : ''}`}
												placeholder="Your Name"
												value={formData.first_name}
												onChange={handleChange}
												required
											/>
											{renderErrorMessage('first_name')}
										</div>
									</div>
									<div className="col-lg-6">
										<div className="mb-3">
											<input
												type="text"
												name="last_name"
												className={`form-control bg-transparent ${errors.last_name ? 'is-invalid' : ''}`}
												placeholder="Last name"
												value={formData.last_name}
												onChange={handleChange}
												required
											/>
											{renderErrorMessage('last_name')}
										</div>
									</div>
									<div className="col-lg-12">
										<div className="mb-3">
											<input
												type="email"
												name="email"
												className={`form-control bg-transparent ${errors.email ? 'is-invalid' : ''}`}
												placeholder="Email Address"
												value={formData.email}
												onChange={handleChange}
												required
											/>
											{renderErrorMessage('email')}
										</div>
									</div>
									<div className="col-lg-12">
										<div className="mb-3">
											<textarea
												name="message"
												className={`form-control bg-transparent radius-20 ${errors.message ? 'is-invalid' : ''}`}
												placeholder="Your Message"
												rows={4}
												value={formData.message}
												onChange={handleChange}
											></textarea>
											{renderErrorMessage('message')}
										</div>
									</div>
									{formFilled ? (<>
										<div className="col-lg-12">
											<div className="row mt-4">
												<div className="col-lg-12">
													<h3 className="calibri-bold mb-3">Payment Info </h3>
												</div>
											</div>
											<div className="row">
												{formData.payment_method === "credit_card" && (
													<Elements
														stripe={stripePromise}
														options={{
															mode: "payment",
															amount: convertToSubcurrency(formData.amount === "custom" ? formData.custom_amount : formData.amount),
															currency: "usd",
														}}
													>
														<StripePayment
															setErrorsFromServer={(errors) => setErrors(errors)}
															formData={formData}
															amount={formData.amount === "custom" ? formData.custom_amount : formData.amount}
														/>
													</Elements>
												)}
											</div>
										</div>
									</>) : (<div className="col-lg-12">
										<button className="btn-wrapper w-100" onClick={handleFilledForm}>Click to processed</button>
									</div>)}
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	);
};

export default Donation;