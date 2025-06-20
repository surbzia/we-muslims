// ✅ About Us page: app/aboutus/page.js
"use client";

import React, {useContext, useState} from "react";
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
import {MyContext} from "@/Components/MyContextProvider";

const AboutUs = () => {
	const [showModal, setShowModal] = useState(false);

	const { content } = useContext(MyContext);
	const pageContent = content.aboutUs;

	console.log(pageContent['SectionOne']['images']);

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
										src={pageContent['SectionOne']['images'][0]}
										className="img-fluid w-100 "
										alt="Lang Icon"
										width={200}
										height={200}
									/>{" "}
								</div>
								<Image
									src={pageContent['SectionOne']['images'][1]}
									className="img-fluid w-100 about-main"
									alt="Lang Icon"
									width={200}
									height={200}
								/>{" "}
								<div className="position-about1">
									<Image
										src={pageContent['SectionOne']['images'][2]}
										className="img-fluid w-100 "
										alt="Lang Icon"
										width={200}
										height={200}
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
										{pageContent['SectionOne']['top_heading']}
									</h4>
								</div>
								<h2 className="dark-color primary-semibold-font level-2">
									{pageContent['SectionOne']['heading']}
								</h2>
								<p>
									{pageContent['SectionOne']['note_one']}
								</p>
							</div>
							<div className="about-content ps-lg-5 ms-lg-5 ps-md-5 ms-md-5 mt-4">
								<p>
									{pageContent['SectionOne']['note_two']}
								</p>
								<div className="d-flex align-items-start gap-3">
									<Image width={200}
										   height={200} src={pageContent['SectionOne']['sub_section_image'][0]} className="img-fluid " alt="Lang Icon" />
									<div>
										<h4>{pageContent['SectionOne']['sub_heading']}</h4>
										<p>
											{pageContent['SectionOne']['sub_heading_note']}
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
								{pageContent['VideoSection']['heading']}
							</h2>
							<p className="text-white mt-3 mb-3">
								{pageContent['VideoSection']['note']}
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
							<Image src={pageContent['VideoSection']['image'][0]} width={200}
								   height={200} className="img-fluid" alt="About Image" />
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
								<source src={pageContent['VideoSection']['video'][0]} type="video/mp4" />
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
									{pageContent['TeamSection']['heading']}
								</h2>
							</div>
						</div>
					</div>


					{pageContent['TeamSection']['teams'].map((teamObj, index) => (
						<div className="row" key={index}>
							<div className="col-lg-8 mx-auto">
								<div className="text-center mt-5 mb-5 pt-3 pb-3">
									<h4 className="calibri-bold mt-5 text-center level-3 color-6">
										{teamObj.designation_title}
									</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 mx-auto">
									<div className="row">
										{JSON.parse(teamObj.team).map((member, teamIndex) => (
											<div className="col-lg-6 mb-4" key={teamIndex}>
												<Image
													src={member.file_url || meetimg} // Fallback to meetimg if no image provided
													className="img-fluid w-100 radius-30"
													alt={member.name || "Team Member"}
													width={200}
													height={200}
												/>
												<h4 className="calibri-bold mt-2 level-5 color-6">
													{member.name || "Jessica Lauren"}
												</h4>
												<h5 className="calibri-bold mt-1 level-7 color-16">
													{member.designation || "Volunteer"}
												</h5>

												<div className="d-flex align-items-center mt-3">
															<Link href={member.facebook_url} className="text-black mx-2">
																<FaFacebookF />
															</Link>
															<span className="border-start mx-2" style={{ height: "20px" }}></span>

															<Link href={member.x_url} className="text-black mx-2">
																<FaTwitter />
															</Link>
															<span className="border-start mx-2" style={{ height: "20px" }}></span>

															<Link href={member.instagram_url} className="text-black mx-2">
																<FaInstagram />
															</Link>
															<span className="border-start mx-2" style={{ height: "20px" }}></span>

														{/*<Link href={member.linkedin_url} className="text-black mx-2">*/}
														{/*	<FaBehance />*/}
														{/*</Link>*/}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}

				</div>
			</section>
			<Footer />
		</>
	);
};

export default AboutUs;
