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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	// Donation options
	const amounts = ["10", "25", "50", "100", "250", "custom"];

	const payment_methods = [
		{ value: "Offline Donation", label: "Offline Donation" },
		{ value: "credit_card", label: "Credit Card" },
	];

	const donationFrequencies = [
		{ value: "one_time", label: "One Time" },
		{ value: "quarterly", label: "Quarterly" },
		{ value: "yearly", label: "Yearly" },
	];

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
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

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitError(null);

		let amountToSend = formData.amount === "custom" ? formData.custom_amount : formData.amount;
		if (!amountToSend) {
			setSubmitError("Please select or enter a donation amount");
			setIsSubmitting(false);
			return;
		}

		const submitData = {
			...formData,
			amount: amountToSend,
		};

		try {
			const response = await request.post(api.donate, submitData);
			setSubmitSuccess(true);
			setFormData({
				first_name: '',
				last_name: '',
				email: '',
				message: '',
				amount: '',
				custom_amount: '',
				payment_token: '',
				payment_method: 'Offline Donation',
				frequency: 'one_time',
				category_id: '',
				program_id: '',
				event_id: ''
			});
			setPrograms([]);
		} catch (error) {
			setSubmitError(error.message || "Failed to process donation. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Initialize with program_id from URL
	useEffect(() => {
		const program_id = query.get("program_id");
		if (program_id) {
			setFormData(prev => ({ ...prev, program_id }));
		}
	}, [query]);

	return (
		<>
			<PageHeader description="this is description"  pagename="Donation" />
			<section className="donation-page pt-5 pb-5 mt-4 mb-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
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

								{submitSuccess ? (
									<div className="alert alert-success">
										<h4>Thank you for your donation!</h4>
										<p>Your donation has been successfully processed.</p>
									</div>
								) : (
									<form onSubmit={handleSubmit}>
										{/* Donation Amount Section */}
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
																	</div>
																</div>
															)}
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
															className="form-control bg-transparent"
															placeholder="Your Name"
															value={formData.first_name}
															onChange={handleChange}
															required
														/>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="mb-3">
														<input
															type="text"
															name="last_name"
															className="form-control bg-transparent"
															placeholder="Last name"
															value={formData.last_name}
															onChange={handleChange}
															required
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="mb-3">
														<input
															type="email"
															name="email"
															className="form-control bg-transparent"
															placeholder="Email Address"
															value={formData.email}
															onChange={handleChange}
															required
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="mb-3">
														<textarea
															name="message"
															className="form-control bg-transparent radius-20"
															placeholder="Your Message"
															rows={4}
															value={formData.message}
															onChange={handleChange}
														></textarea>
													</div>
												</div>
											</div>

											{/* Payment Info Section */}

									</form>
								)}
							</div>
						</div>
						<div className="col-lg-4">
							<div className="row">
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
												<StripePayment amount={formData.amount === "custom" ? formData.custom_amount : formData.amount} />
											</Elements>
										)}
									</div>
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
