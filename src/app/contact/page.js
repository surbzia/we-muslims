// ✅ Donation page: app/aboutus/page.js
"use client";

import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import { contectimg, contectimg1, contectimg2, contectimg3, socailcontent, socailcontent1, socailcontent2, socailcontent3 } from "@/Constant/Index";

const Contact = () => {

	return (
		<>
			<Header />
			<PageHeader pagename="Contact Us" />
			<section className="contact-us">
				<div className="container">
					<div className="row mt-5 pt-4 mb-5 pb-4">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<Image src={contectimg2} className="img-fluid w-100" alt="" />
									<div className="contant-img-contact mt-3 radius-20 bg-12 p-3 d-flex align-content-start gap-2" >
										<Image src={contectimg} className="img-fluid  wrapper-imgcontactus" alt="" />
										<div className="contactus-hding ">
											<h5 className="calibri-bold level-7 text-white">Donation Collection</h5>
											<p className=" text-white level-9 mb-0">Set up a secure and user-friendly online donation platform.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<Image src={contectimg3} className="img-fluid w-100" alt="" />
									<Image src={contectimg1} className="img-fluid w-100" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-contactus-form radius-20 border p-5">
								<form action="">
									<div className="row">
										<div className="col-lg-12">
											<div className="mb-4">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Your Name"
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="mb-4">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Email Address"
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="mb-4">
												<input
													type="number"
													className="form-control bg-transparent"
													placeholder="Phone Number"
													required
												/>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="mb-4">
												<textarea
													className="form-control  bg-transparent radius-20"
													placeholder="Type Your Message"
													rows={4}
													required
												></textarea>
											</div>
										</div>

										<div className="col-lg-12">
											<button className="form-btn">
												Send a Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="contact-information pt-4 pb-4 mt-4 mb-4 bg-17">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="contact-information-content text-center">
								<h2 className="primary-semibold-font mt-5 pt-4 level-2 dark-color">Contact Information</h2>
							</div>
						</div>
					</div>
					<div className="row mt-5 pt-3 pb-5">
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Address</h5>
									<p className="color-16 level-8 mb-0">15 Street Lane, Front Line
										Lorem, USA</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent1} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Phone</h5>
									<p className="color-16 level-8 mb-0">(+1 234568890)</p>
										<p className="color-16 level-8 mb-0">(+1 234568890)</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent2} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Email</h5>
									<p className="color-16 level-8 mb-0">info@m1u_Ummah.com</p>
										<p className="color-16 level-8 mb-0">Contact@m1u_Ummah.com</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent3} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Operation Houes</h5>
									<p className="color-16 level-8 mb-0"> <span className="color-12"> Mon To Fri: </span>10AM to 7PM</p>
									<p className="color-16 level-8 mb-0"> <span className="color-12"> Saturday: </span>12Pm to 6PM</p>
									<p className="color-16 level-8 mb-0"> <span className="color-12"> Sunday: </span>OFF</p>
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

export default Contact;
