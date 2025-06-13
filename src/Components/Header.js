"use client";

import { hamburger, logo, signupimg } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaFacebook, FaInstagram,  FaTwitter } from "react-icons/fa";

const Header = () => {
	const [language, setLanguage] = useState("ENG");
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === "ENG" ? "اردو" : "ENG"));
	};

	useEffect(() => {
		// Show modal only on home page and only once
		if (pathname === "/") {
			const alreadyShown = localStorage.getItem("welcomeModalShown");
			if (!alreadyShown) {
				setShowModal(true);
				localStorage.setItem("welcomeModalShown", "true");
			}
		}
	}, [pathname]);

	const closeModal = () => setShowModal(false);

	return (
		<>
			{showModal && (
				<div
					className="modal-backdrop"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundColor: "rgba(0, 0, 0, 0.2)",
						backdropFilter: "blur(5px)",
						WebkitBackdropFilter: "blur(5px)",
						zIndex: 9999,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						className="modal-content"
						style={{
							backgroundColor: "#fff",
							borderRadius: "10px",
							maxWidth: "800px",
							textAlign: "center",
							boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
							padding:"0",
						}}
					>
						<button
							type="button"
							className="btn-close position-absolute right-0 top-0 p-3"
							onClick={closeModal}
						></button>
						<div className="row align-items-center">
							{/* Left Image */}
							<div className="col-lg-6 d-none p-0 d-lg-block">
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
									<h5 className="color-12 level-7 calibri-bold text-start" >Lorem ipsum dolor sit amet</h5>
									<h5 className="modal-title mb-3 text-start level-6 calibri-bold dark-color">
										Subscribe to Mission Ummah
									</h5>
									<form>
										<div className="mb-3">
											<input
												type="text"
												className="form-control bg-transparent"
												placeholder="Enter Email Or Phone Number"
												required
											/>
										</div>
										<button type="submit" className="form-btn w-100">
											Submit
										</button>
										<p className="color-16 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
										<div className="d-flex align-content-center justify-content-center gap-3">
											<FaFacebook className="color-12" />
											<FaTwitter className="color-12" />
											<FaInstagram className="color-12" />
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			)}

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
								<div className="d-lg-flex align-items-center justify-content-center gap-2 d-none">
									<ul className="header-link list-unstyled d-md-flex flex-lg-row align-items-center gap-4 mb-0 z-index-1 d-none">
										{[
											{ name: "About Us", path: "/aboutus" },
											{ name: "Program", path: "/ourprogram" },
											{ name: "Gallery", path: "/gallery" },
											{ name: "Get Involved", path: "/getinvolved" },
											{ name: "Contact Us", path: "/contact" },
											{ name: "Calendar", path: "/calender" },
										].map((link) => (
											<li key={link.path} className="single-item">
												<Link
													href={link.path}
													className={`header-link level-7 link-here color-6  primary-semibold-font text-decoration-none ${pathname === link.path ? "active-link" : "color-6 "
														}`}
												>
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="col-lg-3 d-flex align-items-center justify-content-center gap-3">
								<Link href="/donation">
									<button className="btn-wrapper">Donate</button>
								</Link>

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
		</>
	);
};

export default Header;
