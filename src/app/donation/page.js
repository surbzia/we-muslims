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

const Donation = () => {
	const { categories } = useContext(MyContext);
	const query = useSearchParams();
	// Form state
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
		amount: '',
		custom_amount: '',
		payment_oken: '',
		payment_method: 'Test Donation',
		frequency: 'One Time',
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
		{ value: "Credit Card", label: "Credit Card" },
	];

	const donationFrequencies = [
		{ value: "One Time", label: "One Time" },
		{ value: "Quarterly", label: "Quarterly" },
		{ value: "Yearly", label: "Yearly" },
	];

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	// Get programs when category changes
	const getPrograms = async (e) => {
		const categoryId = e.target.value;
		setFormData(prev => ({ ...prev, categoryId, programId: '' }));

		if (categoryId) {
			const { data } = await request.get(api.program(`?loop=true&category_id=${categoryId}`));
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

		if (!formData.amount && !formData.custom_amount) {
			setSubmitError("Please select or enter a donation amount");
			setIsSubmitting(false);
			return;
		}

		const donationData = {
			...formData,
			amount: formData.amount === "custom" ? formData.custom_amount : formData.amount,
		};

		try {
			console.log("Submitting donation data:", donationData);

			const response = await request.post(api.donate, donationData);
			setSubmitSuccess(true);
			setFormData({
				first_name: '',
				last_name: '',
				email: '',
				message: '',
				amount: '',
				custom_amount: '',
				payment_method: 'Test Donation',
				frequency: 'One Time',
				category_id: null,
				program_id: null,
				event_id: null
			});
			setPrograms([]);
		} catch (error) {
			console.error("Donation failed:", error);
			setSubmitError(error.message || "Failed to process donation. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Initialize with programId from URL
	useEffect(() => {
		const programIdFromUrl = query.get("programId");
		if (programIdFromUrl) {
			setFormData(prev => ({ ...prev, programId: programIdFromUrl }));
		}
	}, [query]);

	return (
		<>
			<PageHeader description="this is description"  pagename="Donation" />
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
															name="categoryId"
															value={formData.category_id}
															onChange={(e) => {
																handleChange(e);
																getPrograms(e);
															}}
														>
															<option value="">Select Donation Type</option>
															{categories.map((category) => (
																<option key={category.id} selected={category.id == formData.category_id} value={category.id}>
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
															name="programId"
															value={formData.program_id}
															onChange={handleChange}
														>
															<option value="">Donate To (Programs)</option>
															{programs.map((program) => (
																<option key={program.id} selected={program.id == formData.program_id} value={program.id}>
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
											<div className="row mt-4">
												<div className="col-lg-12">
													<h3 className="calibri-bold mb-3">Payment Info </h3>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-12">
													{formData.payment_method === "Credit Card" && (
														<PaymentMethodStripeElement StripeResponse={(response) => setFormData(prev => ({ ...prev, payment_token: response.payment_method }))} />
													)}
												</div>
											</div>

											{/* Submit Button */}
											<div className="row mt-4">
												<div className="col-lg-12">
													<button
														type="submit"
														className="btn-wrapper w-100"
														disabled={isSubmitting}
													>
														{isSubmitting ? "Processing..." : "Submit Donation"}
													</button>
													{submitError && (
														<div className="alert alert-danger mt-3">
															{submitError}
														</div>
													)}
												</div>
											</div>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Donation;