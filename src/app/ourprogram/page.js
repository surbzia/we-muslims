// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
	programs,
	programs2,
	programs3,
	programs4,
	programs5,
	programs6,
	testemonialarrow,

} from "@/Constant/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
const Ourprogram = () => {
	const [selected, setSelected] = useState('Foods'); // Default selected

	const ourprograms = [
		'Community',
		'Educations',
		'Fundraising',
		'Foods',
		'Medical Help',
		'Water Support',
	];
	const activities = [
		{
			img: programs2,
			date: '23 June, 2025',
			title: 'Charity Of The Month Golden Futures...'
		},
		{
			img: programs3,
			date: '23 June, 2025',
			title: 'Partner For Good Corporate Sponsor'
		},
		{
			img: programs4,
			date: '23 June, 2025',
			title: 'Every Contribution Counts Difference'
		}
	];

	return (
		<>
			<Header />
			<PageHeader pagename="Our Programs" />
			<section className="about-one">
				<div className="container">
					<div className="row mt-5 mb-5 pt-5">
						<div className="col-lg-8">
							<div className="position-relative main-wrapper-program radius-30">

								<Image
									src={programs}
									className="img-fluid w-100 radius-30"
									alt="Lang Icon"
								/>{" "}
								<div className="wrapper-content-programm">
									<h2 className="dark-color mt-3 calibri-bold level-5">
										See Your Impact: Transparent Donation Tracking
									</h2>
									<p className="color-16 line-height-wrapper">
										Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork
										and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and
										interests. Volunteers are the heart of our organization. Join our team to make a hands-on difference in your
										community. Whether you have a few hours or a few days, your time and skills can help us achieve our
										goals and support those we serve.
									</p>
									<div className="specialized-content position-relative">
										<div className="arrowimg position-absolute  p-3 bg-white
										" ><Image
												src={testemonialarrow}
												className="img-fluid w-100 radius-30"
												alt="Lang Icon"
											/>{" "}</div>
										<h4 className="color-16 ps-4 level-6 calibri-bold level-5">Specialized cleaning to remove construction dust, debris, and residues left after
											renovation or remodeling projects.</h4>
										<div className="clippath mb-0" >  <h5 className="mb-0">Michel Clarck</h5> </div>
									</div>
									<p className="color-16 line-height-wrapper mt-5">
										Our secure online donation platform allows you to make contributions quickly and safely. Choose from
										various payment methods and set up one-time or recurring donations with ease. Your support helps us
										continue our mission and reach those in need.

									</p>
									<div className="row mt-5">
										<div className="col-lg-6"><Image
											src={programs5}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/></div>
										<div className="col-lg-6"><Image
											src={programs6}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/></div>
									</div>
									<p className="color-16 line-height-wrapper mt-5 border-bottom pb-4">
										Our secure online donation platform allows you to make contributions quickly and safely. Choose from
										various payment methods and set up one-time or recurring donations with ease. Your support helps us
										continue our mission and reach those in need.

									</p>
									<div className="row mt-3">
										<div className="col-lg-6"><div className="d-flex align-items-center gap-3">
											<h4 className=" level-6 calibri-bold level-5">Tags:</h4>

											<button className="border radius-40 px-4	 py-2 color-16 calibri-bold bg-transparent">Donations</button>
											<button className="border radius-40 px-4	 py-2 color-16 calibri-bold bg-transparent">Educations</button>
										</div></div>
										<div className="col-lg-6 d-flex align-items-center gap-3 justify-content-end">											<h4 className=" level-6 calibri-bold level-5">Share:</h4>
											<div className="program-lists ">
												<ul className="list-unstyled d-flex ps-0 mb-0 gap-2">
													<li>
														<Link
															href="#"
															className="icon-badge  radius-40 border p-4 dark-color"
														>
															<FontAwesomeIcon icon={faTwitter} />
														</Link>
													</li>
													<li>
														<Link
															href="#"
															className="icon-badge  radius-40 border p-4 dark-color"
														>
															<FontAwesomeIcon icon={faFacebookF} />
														</Link>
													</li>
													<li>
														<Link
															href="#"
															className="icon-badge  radius-40 border p-4 dark-color"
														>
															<FontAwesomeIcon icon={faYoutube} />
														</Link>
													</li>
													<li>
														<Link
															href="#"
															className="icon-badge  radius-40 border p-4 dark-color"
														>
															<FontAwesomeIcon icon={faInstagram} />
														</Link>
													</li>
													<li>
														<Link
															href="#"
															className="icon-badge  radius-40 border p-4 dark-color"
														>
															<FontAwesomeIcon icon={faLinkedinIn} />
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="position-relative radius-20 p-4 bg-17">
								<div className="programs-container">
									<h3 className="heading">Our Programs</h3>
									<form className="program-form">
										{ourprograms.map((program) => (
											<label key={program} className="program-label">
												<input
													type="radio"
													name="program"
													value={program}
													checked={selected === program}
													onChange={() => setSelected(program)}
												/>
												<span className={`program-btn ${selected === program ? 'active' : ''}`}>
													{program}
												</span>
											</label>
										))}
									</form>
									<Link href="/donation">
										<button className="donate-btn">Donate Now</button>
									</Link>
								</div>
							</div>
							<div className="position-relative radius-20 mt-3 p-4 bg-17">
								<div className="programs-container">
									<h3 className="heading">Recent Activity</h3>
									<div className="activity-list space-y-4 mt-4">
										{activities.map((item, index) => (
											<div key={index} className="d-flex gap-3 items-start">
												<Image
													src={item.img}
													alt={item.title}
													width={150}
													height={64}
													className="radius-20 img-fluid "
												/>
												<div>
													<div className="text-sm color-16 calibri-bold">
														<FontAwesomeIcon icon={faCalendarAlt} className="color-2 pe-2" />
														{item.date}
													</div>
													<div className="heading">
														{item.title}
													</div>
												</div>
											</div>
										))}
									</div>
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

export default Ourprogram;
