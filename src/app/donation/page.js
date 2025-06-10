// ✅ Donation page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import {
	dollar,
	donation,
	donation1,
	donationsignboard,
} from "@/Constant/Index";
import { FaHeart } from "react-icons/fa";

const Donation = () => {
	const [selectedAmount, setSelectedAmount] = useState("");
	const [customAmount, setCustomAmount] = useState("");
	const [selectedPayment, setSelectedPayment] = useState("Test Donation");
	const [selectedFrequency, setSelectedFrequency] = useState("One Time");

	const amounts = ["10", "25", "50", "100", "250", "custom"];

	const paymentMethods = [
		{
			value: "Test Donation",
			label: "Test Donation",
		},
		{ value: "Offline Donation", label: "Offline Donation" },
		{ value: "Credit Card", label: "Credit Card" },
	];

	const donationFrequencies = [
		{ value: "One Time", label: "One Time" },
		{ value: "Quarterly", label: "Quarterly" },
		{ value: "Yearly", label: "Yearly" },
	];
	return (
		<>
			<Header />
			<PageHeader pagename="Donation" />
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
								<form action="">
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
														{selectedAmount === "custom" && customAmount !== ""
															? customAmount
															: selectedAmount !== ""
															? selectedAmount
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
																	name="donation"
																	id={`donation-${amt}`}
																	value={amt}
																	className="donation-radio"
																	checked={selectedAmount === amt}
																	onChange={() => {
																		setSelectedAmount(amt);
																		if (amt !== "custom") {
																			setCustomAmount(""); // clear custom when normal selected
																		}
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

													{selectedAmount === "custom" && (
														<div className="row">
															<div className="col-lg-6">
																<div className="donation-input-group">
																	<span>$</span>
																	<input
																		type="number"
																		placeholder="100"
																		value={customAmount}
																		onChange={(e) =>
																			setCustomAmount(e.target.value)
																		}
																	/>
																</div>
															</div>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
									<div className="row mt-3 border-bottom pb-3">
										<div className="col-lg-12">
											<h3 className="calibri-bold mb-3">
												Select Payment Method
											</h3>
											<div className="payment-method-group">
												{paymentMethods.map((method) => (
													<label
														key={method.value}
														className={`payment-method-option ${
															selectedPayment === method.value ? "active" : ""
														}`}
													>
														<input
															type="radio"
															name="payment-method"
															value={method.value}
															checked={selectedPayment === method.value}
															onChange={() => setSelectedPayment(method.value)}
														/>
														{method.label}
														{selectedPayment === method.value &&
															method.badge && (
																<div className="payment-badge">
																	{method.badge}
																</div>
															)}
													</label>
												))}
											</div>
										</div>
									</div>
									<div className="row mt-4 border-bottom pb-3">
										<div className="col-lg-12">
											<h3 className="calibri-bold mb-3">
												Choose your donation frequency
											</h3>
											<div className="payment-method-group">
												{donationFrequencies.map((freq) => (
													<label
														key={freq.value}
														className={`payment-method-option ${
															selectedFrequency === freq.value ? "active" : ""
														}`}
													>
														<input
															type="radio"
															name="donation-frequency"
															value={freq.value}
															checked={selectedFrequency === freq.value}
															onChange={() => setSelectedFrequency(freq.value)}
														/>
														{freq.label}
													</label>
												))}
											</div>
										</div>
									</div>
									<div className="row mt-4">
										<div className="col-lg-12">
											<h3 className="calibri-bold mb-3">
												I Would Like Donae To:{" "}
											</h3>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-6">
											<div className="custom-select-wrapper">
												<select className="custom-select" name="" id="">
													<option value="">Select Donation Type</option>
													<option value="monthly">Monthly Donation</option>
													<option value="one-time">One-Time Donation</option>
												</select>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="custom-select-wrapper">
												<select className="custom-select" name="" id="">
													<option value="">Donate To</option>
													<option value="monthly">Monthly Donation</option>
													<option value="one-time">One-Time Donation</option>
												</select>
											</div>
										</div>
									</div>
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
													className="form-control bg-transparent"
													placeholder="Your Name"
													required
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="mb-3">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Last name"
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="mb-3">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Email Address"
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="mb-3">
												<textarea
													className="form-control  bg-transparent radius-20"
													placeholder="Your Message"
													rows={4}
													required
												></textarea>
											</div>
										</div>
									</div>
									<div className="row mt-4">
										<div className="col-lg-12">
											<h3 className="calibri-bold mb-3">Payment Info </h3>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="mb-3">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Card Number"
													required
												/>
											</div>
										</div>
									</div>
									<button
										type="button"
										class="btn-wrapper calibri-bold mt-3 view"
									>
										<FaHeart className="me-2" />
										Donate Now{" "}
									</button>
								</form>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="organizer position-relative text-center bg-17 radius-20 p-3">
								<div className="content-heading">
									<h5 className="calibri-bold text-white">Organizer</h5>
								</div>
								<Image src={donation} className="img-fluid " alt="" />
								<h4>Emanuel Marko</h4>
								<div>
									<FaHeart />
									<h5></h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Donation;
