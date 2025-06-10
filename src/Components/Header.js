"use client";

import { hamburger, logo } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import for App Router

const Header = () => {
	const [language, setLanguage] = useState("ENG");
	const router = useRouter(); // ✅ Initialize router

	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === "ENG" ? "اردو" : "ENG"));
		router.push("/aboutus"); // ✅ Navigate to /aboutus
		router.push("/ourprogram"); // ✅ Navigate to /ourprogram
		router.push("/gallery"); // ✅ Navigate to /gallery
		router.push("/getinvolved"); // ✅ Navigate to /gallery
		router.push("/donation"); // ✅ Navigate to /donation
	};

	return (
		<header className="site-header">
			<div className="container">
				<div className="header-wrapper py-3">
					<div className="header-start row align-items-center">
						<div className="col-lg-2">
							<div className="logo-wrapper d-flex align-items-center justify-content-between">
								<div className="header-logo">
									<figure className="header-logo">
										<Link href="/">
											<Image
												src={logo}
												className="logo-here light-image"
												alt="Logo"
											/>
										</Link>
									</figure>
								</div>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="d-lg-flex align-items-center gap-2 d-none">
								<ul className="header-link list-unstyled d-md-flex flex-lg-row align-items-center gap-4 mb-0 z-index-1 d-none">
									<li className="single-item">
										<Link
											href="/"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Home
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/aboutus"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											About Us
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/ourprogram"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Program
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/gallery"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Gallery
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/getinvolved"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Get Involved
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/donation"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Contact Us
										</Link>
									</li>
									<li className="single-item">
										<Link
											href="/contactus"
											className="header-link level-7 link-here primary-semibold-font text-decoration-none color-6"
										>
											Calendar
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 d-flex align-items-center justify-content-center gap-3">
							{/* Donate Button */}
							<Link href="/donate">
								<button className="btn-wrapper">Donate</button>
							</Link>

							{/* Language Toggle - Now redirects to About Us */}
							<div
								className="language-toggle ms-3 fw-bold"
								onClick={toggleLanguage}
								style={{ cursor: "pointer" }}
							>
								{language}
								<Image
									src={hamburger}
									className="img-fluid ps-2"
									alt="Lang Icon"
									width={20}
									height={20}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
