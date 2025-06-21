// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
	getimg,
	getimg1,
	getimg2,
	getimg3,
	getimg4,
	signupimg,
} from "@/Constant/Index";
import ReactModal from "react-modal";

const Getinvolved = () => {
	useEffect(() => {
		// Bootstrap Modal needs JS bundle - already loaded if you included the script
	}, []);

	return (
		<>
			<PageHeader pagename="Get Involved" />
			<section className="getinvolved-sec">
				<div className="container">
					<div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
						<div className="col-lg-6">
							<Image
								src={getimg}
								className="img-fluid w-100 radius-30"
								alt=""
							/>
						</div>
						<div className="col-lg-6">
							<div className="content">
								<h2 className="calibri-bold color-6 level-2">
									Register to Get Started
								</h2>
								<p className="color-16 mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna
									aliqua...
								</p>
							</div>

							{/* Open Modal Button */}
							<button
								type="button"
								className="btn-wrapper calibri-bold mt-3 view"
								data-bs-toggle="modal"
								data-bs-target="#signupModal"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Bootstrap Modal */}
			<div
				className="modal fade radius-20"
				id="signupModal"
				tabIndex="-1"
				aria-labelledby="signupModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg modal-dialog-centered radius-20">
					<div className="modal-content p-0 radius-20">
						<div className="modal-body p-0 position-relative">
							<button
								type="button"
								className="btn-close position-absolute right-0 top-0 p-3"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
							<div className="row">
								{/* Left Image */}
								<div className="col-lg-6 d-none d-lg-block">
									<Image
										src={signupimg}
										alt="Signup"
										className="img-fluid rounded-start"
										width={600}
										height={800}
									/>
								</div>

								{/* Right Form */}
								<div className="col-lg-6 ">
									<div className="p-4">
										<h5 className="modal-title mb-3  level-4 calibri-bold dark-color">
											Call To Action
										</h5>
										<form>
											<div className="mb-3">
												<input
													type="text"
													className="form-control bg-transparent"
													placeholder="Your Name"
													required
												/>
											</div>
											<div className="mb-3">
												<input
													type="email"
													className="form-control  bg-transparent"
													placeholder="Email Address"
													required
												/>
											</div>
											<div className="mb-3">
												<input
													type="number"
													className="form-control  bg-transparent"
													placeholder="Phone Number"
													required
												/>
											</div>
											<div className="mb-3">
												<textarea
													className="form-control  bg-transparent radius-20"
													placeholder="Your Message"
													rows={4}
													required
												></textarea>
											</div>
											<button type="submit" className="form-btn ">
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className=" sec-get ">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6">
							<div className="content">
								<h2 className="calibri-bold color-6 level-2">
									Register to Volunteer
								</h2>
								<p className="color-16 mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat
								</p>
							</div>
							<Link href="">
								<button className="btn-wrapper calibri-bold mt-3 view">
									Register Now
								</button>
							</Link>
						</div>
						<div className="col-lg-5">
							<Image
								src={getimg1}
								className="img-fluid w-100 radius-30"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="getinvolved-sec pt-3 pb-3">
				<div className="container">
					<div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
						<div className="col-lg-6">
							<Image
								src={getimg2}
								className="img-fluid w-100 radius-30"
								alt=""
							/>
						</div>
						<div className="col-lg-6">
							<div className="content ps-4">
								<h2 className="calibri-bold color-6 level-2">Careers</h2>
								<p className="color-16 mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat
								</p>
								<Link href="">
									<button className="btn-wrapper calibri-bold mt-3 view">
										Join Team
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="join-mailling">
				<div className="container">
					<div className="row bg-mailling align-items-center">
						<div className="col-lg-6">
							<div className="content ps-4">
								<h2 className="calibri-bold text-white level-2">Careers</h2>
								<p className="text-white mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat
								</p>
								<Link href="">
									<button className="btn-wrapper mt-3 text-white border-white view">
										Join Team
									</button>
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<Image
								src={getimg3}
								className="img-fluid w-100 radius-30"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="getinvolved-sec pt-3 pb-3">
				<div className="container">
					<div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
						<div className="col-lg-6">
							<Image
								src={getimg4}
								className="img-fluid w-100 radius-30"
								alt=""
							/>
						</div>
						<div className="col-lg-6">
							<div className="content ps-4">
								<h2 className="calibri-bold color-6 level-2">
									Partner With Us
								</h2>
								<p className="color-16 mt-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat
								</p>
								<Link href="">
									<button className="btn-wrapper calibri-bold mt-3 view">
										Get Partnership
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Getinvolved;
