"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faArrowRight,
	faPhone,
	faEnvelope,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; // ✅ next/router ka Link

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="site-footer  overflow-hidden position-relative">
			<div className="container">
				<div className="footer-wrap pt-5 position-relative">
					<div className="container">
						<div className="row">
							<div className="col-lg-10 mx-auto">
								<div className="row align-items-center">
									{/* Quick Links */}
									<div className="col-md-3">
										<div className="footer-lists-heading mb-4">
											<Link href="/donate">
												<button className="btn-wrapper mb-3 color-6 border-radius-wrapper">
													DONATE NOW
												</button>
											</Link>
											<h5 className="level-6 primary-semibold-font extra-color-7 color-2">
												Quick links
											</h5>
										</div>
										<div className="footer-lists">
											<ul className="footer-links p-0">
												{[
													{ label: "Get Involved", href: "/aboutus" },
													{ label: "Donate Now", href: "/services" },
													{
														label: "Become a Volunteer",
														href: "",
													},
													{
														label: "Careers",
														href: "/Careers",
													},
													{ label: "Site Map", href: "/testimonials" },
												].map((item, idx) => (
													<li
														key={idx}
														className="single-items mb-2 d-flex gap-2 align-items-center"
													>
														<Link
															href={item.href}
															className="header-link level-8 primary-regular-font text-white text-decoration-none link-hover"
														>
															{item.label}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
									{/* Logo + Socials */}
									<div className="col-md-4 ">
										<div className="footer-para mt-3">
											<p className="level-8 text-white primary-semibold-font pe-lg-3 pe-md-3">
												Duis aute irure dolor in repreh enderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur.
												Excepteur sint occae cat cupidatat non proident.
											</p>
											<h5 className="level-6 primary-semibold-font extra-color-7 color-2">
												CONNECT WITH US:{" "}
											</h5>
										</div>
										<div className="footer-lists mt-3">
											<ul className="list-unstyled d-flex ps-0 mb-0 gap-2">
												<li>
													<Link
														href="#"
														className="icon-badge bg-7 radius-0 border-0 p-4 text-white"
													>
														<FontAwesomeIcon icon={faTwitter} />
													</Link>
												</li>
												<li>
													<Link
														href="#"
														className="icon-badge bg-9 radius-0 border-0 p-4 text-white"
													>
														<FontAwesomeIcon icon={faFacebookF} />
													</Link>
												</li>
												<li>
													<Link
														href="#"
														className="icon-badge bg-11 radius-0 border-0 p-4 text-white"
													>
														<FontAwesomeIcon icon={faYoutube} />
													</Link>
												</li>
												<li>
													<Link
														href="#"
														className="icon-badge bg-8 radius-0 border-0 p-4 text-white"
													>
														<FontAwesomeIcon icon={faInstagram} />
													</Link>
												</li>
												<li>
													<Link
														href="#"
														className="icon-badge bg-4 radius-0 border-0 p-4 text-white"
													>
														<FontAwesomeIcon icon={faLinkedinIn} />
													</Link>
												</li>
											</ul>
										</div>
									</div>

									{/* Info */}
									<div className="col-md-5">
										<div className="footer-lists-heading mb-4">
											<h5 className="level-6 primary-semibold-font extra-color-7 color-2">
												Join The Newsletter{" "}
											</h5>
										</div>
										<div className="newslatter position-relative">
											<input
												type="text"
												className="form-control new-slatter-input"
												placeholder="Enter your email"
											/>
											<button
												type="submit"
												className="btn-wrapper color-3 w-100 mt-2 border-radius-wrapper"
											>
												Subscrible Now
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				{/* Footer Bottom */}
				<div className="footer-bottom pt-3 pb-3">
					<div className="container">
						<div className="col-lg-10 mx-auto">
							<div className="row justify-content-between align-items-center">
								<div className="col-lg-5">
									<p className="level-7  primary-semibold-font  color-6 mb-0">
										© All right reserved 2025 <span>{year}</span>
										<Link
											href="/"
											className="header-link ps-3 level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Mindurah.com
										</Link>
									</p>
								</div>
								<div className="col-lg-5">
									<ul className="header-link justify-content-end list-unstyled d-md-flex flex-lg-row align-items-center gap-5 mb-0 z-index-1 d-none">
										<li className="single-item">
											<Link
												href="/"
												className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
											>
												Contact{" "}
											</Link>
										</li>
										<li className="single-item">
											<Link
												href="/aboutus"
												className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
											>
												Privacy{" "}
											</Link>
										</li>
										<li className="single-item">
											<Link
												href="/howitwork"
												className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
											>
												Cookies Notice{" "}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
