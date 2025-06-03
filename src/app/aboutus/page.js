// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
	about,
	about1,
	about2,
	about3,
	about4,
	about5,
	meetimg,
	meetimg1,
	meetimg2,
	meetimg3,
} from "@/Constant/Index";
import {
	FaPlay,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaBehance,
} from "react-icons/fa";

const AboutUs = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Header />
			<PageHeader pagename="About Us" />
			<section className="about-one">
				<div className="container">
					<div className="row mt-5 mb-5 pt-5">
						<div className="col-lg-6">
							<div className="position-relative">
								<div className="position-about">
									<Image
										src={about1}
										className="img-fluid w-100 "
										alt="Lang Icon"
									/>{" "}
								</div>
								<Image
									src={about2}
									className="img-fluid w-100 about-main"
									alt="Lang Icon"
								/>{" "}
								<div className="position-about1">
									<Image
										src={about}
										className="img-fluid w-100 "
										alt="Lang Icon"
									/>{" "}
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-content mt-5 pt-4">
								<div className="d-flex align-items-center gap-2">
									{" "}
									<Image src={about5} className="img-fluid " alt="Lang Icon" />
									<h4 className="level-7 mb-0 color-12 primary-semibold-font">
										Who We Are
									</h4>
								</div>
								<h2 className="dark-color primary-semibold-font level-2">
									Introduce M1U’s mission, core values,
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehender
								</p>
							</div>
							<div className="about-content ps-lg-5 ms-lg-5 ps-md-5 ms-md-5 mt-4">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehender
								</p>
								<div className="d-flex align-items-start gap-3">
									<Image src={about4} className="img-fluid " alt="Lang Icon" />
									<div>
										<h4>Our Vision & Mission</h4>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididun
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-two">
				<div className="container-fluid p-0">
					<div className="row align-items-center">
						<div className="col-lg-6 paragraph-pading">
							<h2 className="text-white primary-semibold-font level-2">
								What Drives Us <br /> Forward
							</h2>
							<p className="text-white mt-3 mb-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamc.
							</p>
							<div className="row mb-3">
								<div className="col-lg-5 ">
									<Link href="">
										<button className="btn-wrapper text-white border-white view">
											View All Donation
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative video-wrapper">
							<Image src={about3} className="img-fluid" alt="About Image" />
							<div
								className="play-button-wrapper"
								onClick={() => setShowModal(true)}
							>
								<div className="wave" />
								<button className="play-button">
									{" "}
									<FaPlay />
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Modal */}
				{showModal && (
					<div className="video-modal">
						<div className="modal-content">
							<span
								className="close-button"
								onClick={() => setShowModal(false)}
							>
								×
							</span>
							<video controls autoPlay>
								<source src="/video.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				)}
			</section>
			<section className="about-three mb-5 pb-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto ">
							<div className="text-center mt-5 mb-5 pt-3 pb-3">
								<h2 className="primary-semibold-font text-center level-2 dark-color">
									Meet The Optimistic Volunteer
								</h2>
								<h4 className="calibri-bold mt-5 text-center level-3 color-6">
									Board of Directors
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 mx-auto">
								<div className="row">
									<div className="col-lg-6">
										<Image
											src={meetimg}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Jessica Lauren
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-6">
										<Image
											src={meetimg3}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Daniel Thomas
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto ">
							<div className="text-center mt-5 mb-5 pt-3 pb-3">
								<h4 className="calibri-bold mt-5 text-center level-3 color-6">
									Executive Committee
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8 mx-auto">
								<div className="row">
									<div className="col-lg-4">
										<Image
											src={meetimg}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Jessica Lauren
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-4">
										<Image
											src={meetimg3}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Daniel Thomas
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-4">
										<Image
											src={meetimg2}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Michel Vetory
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto ">
							<div className="text-center mt-5 mb-5 pt-3 pb-3">
								<h4 className="calibri-bold mt-5 text-center level-3 color-6">
									Board of Advisors{" "}
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 mx-auto">
								<div className="row">
									<div className="col-lg-3">
										<Image
											src={meetimg}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Jessica Lauren
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-3">
										<Image
											src={meetimg3}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Daniel Thomas
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-3">
										<Image
											src={meetimg2}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Michel Vetory
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-3">
										<Image
											src={meetimg1}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Emma Mary
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto ">
							<div className="text-center mt-5 mb-5 pt-3 pb-3">
								<h4 className="calibri-bold mt-5 text-center level-3 color-6">
									Partners
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 mx-auto">
								<div className="row">
										<div className="col-lg-3">
										<Image
											src={meetimg3}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Daniel Thomas
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-3">
										<Image
											src={meetimg}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Jessica Lauren
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
								
									<div className="col-lg-3">
										<Image
											src={meetimg1}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Emma Mary
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
									</div>
									<div className="col-lg-3">
										<Image
											src={meetimg2}
											className="img-fluid w-100 radius-30"
											alt="Lang Icon"
										/>
										<h4 className="calibri-bold mt-2 level-5 color-6">
											Michel Vetory
										</h4>
										<h5 className="calibri-bold mt-1 level-7 color-16">
											Volunteer
										</h5>

										{/* Social Icons */}
										<div className="d-flex align-items-center mt-3">
											<Link href="/" className="text-black mx-2">
												<FaFacebookF />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaTwitter />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaInstagram />
											</Link>
											<span
												className="border-start mx-2"
												style={{ height: "20px" }}
											></span>

											<Link href="/" className="text-black mx-2">
												<FaBehance />
											</Link>
										</div>
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

export default AboutUs;
