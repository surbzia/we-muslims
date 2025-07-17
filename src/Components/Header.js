"use client";

import { signupimg } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MyContext } from "./MyContextProvider";
import GoogleTranslate from "./GoogleTranslate";

const Header = () => {
	const { setting } = useContext(MyContext);
	const [showModal, setShowModal] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/") {
			const alreadyShown = localStorage.getItem("welcomeModalShown");
			if (!alreadyShown) {
				setTimeout(() => {
					setShowModal(true);
					localStorage.setItem("welcomeModalShown", "true");
				}, 500); // small delay for smooth appearance
			}
		}
	}, [pathname]);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const closeModal = () => setShowModal(false);
	const closeMenu = () => setMenuOpen(false);

	const navLinks = [
		{ name: "About Us", path: "/aboutus" },
		{ name: "Program", path: "/ourprogram" },
		{ name: "Gallery", path: "/gallery" },
		{ name: "Get Involved", path: "/getinvolved" },
		{ name: "Contact Us", path: "/contact" },
		{ name: "Events", path: "/events" },
	];

	return (
		<>
			{/* Welcome Modal */}
			{showModal && (
				<div className="modal-backdrop">
					<div className="modal-content">
						<button
							type="button"
							className="btn-close position-absolute top-0 end-0 p-3"
							onClick={closeModal}
						></button>
						<div className="row align-items-center">
							<div className="col-lg-6 d-none d-lg-block p-0">
								<Image
									src={signupimg}
									alt="Signup"
									className="img-fluid rounded-start"
									width={600}
									height={800}
								/>
							</div>
							<div className="col-lg-6 p-4">
								<h5 className="text-start color-12 level-7">
									Lorem ipsum dolor sit amet
								</h5>
								<h5 className="modal-title mb-3 text-start level-6 dark-color">
									Subscribe to Mission Ummah
								</h5>
								<form>
									<input
										type="text"
										className="form-control bg-transparent mb-3"
										placeholder="Enter Email Or Phone Number"
										required
									/>
									<button type="submit" className="form-btn w-100">
										Submit
									</button>
									<p className="color-16 mt-3">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									</p>
									<div className="d-flex justify-content-center gap-3">
										<FaFacebook className="color-12" />
										<FaTwitter className="color-12" />
										<FaInstagram className="color-12" />
									</div>
								</form>
							</div>
						</div>
					</div>
					<style jsx>{`
						.modal-backdrop {
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-color: rgba(0, 0, 0, 0.6);
							display: flex;
							justify-content: center;
							align-items: center;
							z-index: 1050;
						}
						.modal-content {
							background: #fff;
							border-radius: 10px;
							width: 90%;
							max-width: 800px;
							position: relative;
							overflow: hidden;
						}
					`}</style>
				</div>
			)}

			{/* Header */}
			<header className="site-header">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center py-3">
						{/* Logo */}
						<Link href="/" className="d-flex align-items-center">
							{setting ? (
								<Image
									src={setting.header_logo_full_url}
									alt="Logo"
									width={60}
									height={60}
									className="logo-here"
								/>
							) : (
								""
							)}
						</Link>

						{/* Hamburger Icon */}
						<button className="hamburger d-lg-none" onClick={toggleMenu}>
							<span className={`bar ${menuOpen ? "open" : ""}`}></span>
							<span className={`bar ${menuOpen ? "open" : ""}`}></span>
							<span className={`bar ${menuOpen ? "open" : ""}`}></span>
						</button>

						{/* Navigation */}
						<nav className={`main-nav ${menuOpen ? "open" : ""}`}>
							<ul className="nav-list d-lg-flex align-items-center gap-4 list-unstyled mb-0">
								{navLinks.map((link) => (
									<li key={link.path} onClick={closeMenu}>
										<Link
											href={link.path}
											className={`header-link level-7 link-here color-6 primary-semibold-font text-decoration-none ${
												pathname === link.path ? "active-link" : "color-6"
											}`}
										>
											{link.name}
										</Link>
									</li>
								))}
								<li className="ps-lg-5 ps-md-5">
									<Link href="/donation" onClick={closeMenu}>
										<button className="btn-wrapper mt-lg-0 mt-3">Donate</button>
									</Link>
								</li>
								<li>
									<GoogleTranslate />
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
