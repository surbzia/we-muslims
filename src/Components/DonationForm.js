"use client";

import React, { useContext, useState } from "react";
import { MyContext } from "@/Components/MyContextProvider";
import { useRouter } from "next/navigation";

const DonationForm = () => {
	const { content } = useContext(MyContext);
	const pageContent = content.home.DonateSection;
	const [selectedAmount, setSelectedAmount] = useState("");
	const [amountType, setAmountType] = useState("fixed"); // "fixed" or "custom"

	const amounts = ["10", "25", "50", "100", "250", "custom"];

	const router = useRouter();


	const handleCustomDonation = () => {
		if (selectedAmount) {
			const params = new URLSearchParams({ amount: selectedAmount, path: 'home' });
			router.push(`/donation?${params.toString()}`);
		}
	};


	return (
		<section className="donation">
			<div className="container">
				<div className="wrapper-donation">
					<div className="row">
						{/* Left Section */}
						<div className="col-lg-4">
							<h2 className="primary-semibold-font color-6 level-3">
								{pageContent.heading ?? ""}
							</h2>
							<p className="text-sm text-gray-600 mt-2">
								{pageContent.note ?? ""}
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
												checked={amt === selectedAmount}
												onChange={() => {
													setSelectedAmount(amt);
													setAmountType(amt === "custom" ? "custom" : "fixed");
												}}
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
									{amountType === "custom" ? (
										<>
											<div className="col-lg-6">
												<div className="donation-input-group">
													<span>$</span>
													<input type="number" value={selectedAmount} onChange={(e) => setSelectedAmount(e.target.value)} placeholder="100" />
												</div>
											</div>
											<div className="col-lg-6">
												<button onClick={handleCustomDonation} className="donation-submit">DONATE NOW</button>
											</div>
										</>
									) : (
										<div className="col-lg-12">
												<button onClick={handleCustomDonation} className="donation-submit">DONATE NOW</button>
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
