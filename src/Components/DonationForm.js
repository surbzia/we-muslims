"use client";

import React, { useState } from "react";

const DonationForm = () => {
	const [selectedAmount, setSelectedAmount] = useState("");

	const amounts = ["10", "25", "50", "100", "250", "custom"];

	return (
		<section className="donation">
			<div className="container">
				<div className="wrapper-donation">
					<div className="row">
						{/* Left Section */}
						<div className="col-lg-4">
							<h2 className="primary-semibold-font color-6 level-3">
								MAKE A DONATION
							</h2>
							<p className="text-sm text-gray-600 mt-2">
								Sociis aute euismod, vulputate. Porta amet tortor nibh wisi
								saepe.
							</p>
						</div>

						{/* Right Section */}
						<div className="col-lg-8">
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
												onChange={() => setSelectedAmount(amt)}
											/>
											<label
												htmlFor={`donation-${amt}`}
												className="donation-option"
											>
												{amt === "custom" ? "Custom Amount" : `$${amt}`}
											</label>
										</div>
									))}
								</div>
								<div className="row">
									{selectedAmount === "custom" ? (
										<>
											<div className="col-lg-6">
												<div className="donation-input-group">
													<span>$</span>
													<input type="number" placeholder="100" />
												</div>
											</div>
											<div className="col-lg-6">
												<button className="donation-submit">DONATE NOW</button>
											</div>
										</>
									) : (
										<div className="col-lg-12">
											<button className="donation-submit">DONATE NOW</button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DonationForm;
