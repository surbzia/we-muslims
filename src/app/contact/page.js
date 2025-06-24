"use client";

import React, { useContext } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import { contectimg, contectimg1, contectimg2, contectimg3, socailcontent, socailcontent1, socailcontent2, socailcontent3 } from "@/Constant/Index";
import { MyContext } from "@/Components/MyContextProvider";
import { request } from "@/services/request";
import api from "@/services/apis";

const Contact = () => {
	const { setting, content } = useContext(MyContext);
	const pageContent = content.contactUs;

	const [error, setError] = React.useState(null);

	const [form, setForm] = React.useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [submitted, setSubmitted] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		request.post(api.submitQuery, form)
			.then((response) => {
				setSubmitted(true);
				setForm({ name: "", email: "", phone: "", message: "" });
				setLoading(false);
			})
			.catch((error) => {
				setError(error.errors);
				console.error("Error submitting form:", error);
				setSubmitted(false);
				setLoading(false);
			});

		setTimeout(() => {
			setSubmitted(false);
			setError(null);
		}, 5000);
	};

	return (
		<>
			<PageHeader description="this is description"  pagename="Contact Us" />
			<section className="contact-us">
				<div className="container">
					<div className="row mt-5 pt-4 mb-5 pb-4">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<Image src={pageContent.PageContent?.images[0]} width={200} height={200} className="img-fluid w-100" alt="" />
									<div className="contant-img-contact mt-3 radius-20 bg-12 p-3 d-flex align-content-start gap-2" >
										<Image src={contectimg} className="img-fluid  wrapper-imgcontactus" alt="" />
										<div className="contactus-hding ">
											<h5 className="calibri-bold level-7 text-white">{pageContent.PageContent?.heading}</h5>
											<p className=" text-white level-9 mb-0">{pageContent.PageContent?.note}</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<Image src={pageContent.PageContent?.images[1]} width={200} height={200} className="img-fluid w-100" alt="" />
									<Image src={pageContent.PageContent?.images[2]} width={200} height={200} className="img-fluid w-100" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-contactus-form radius-20 border p-5">
								{submitted ? (
									<div className="alert alert-success">Thank you for contacting us!</div>
								) : (
									<form onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-lg-12">
												<div className="mb-4">
													<input
														type="text"
															name="name"
															className="form-control bg-transparent"
															placeholder="Your Name"
															required
															value={form.name}
															onChange={handleChange}
														/>
														{error && error.name && (
															<div className="text-danger small mt-1">{error.name}</div>
														)}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="mb-4">
														<input
															type="email"
															name="email"
															className="form-control bg-transparent"
															placeholder="Email Address"
															required
															value={form.email}
															onChange={handleChange}
														/>
														{error && error.email && (
															<div className="text-danger small mt-1">{error.email}</div>
														)}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="mb-4">
														<input
															type="tel"
															name="phone"
															className="form-control bg-transparent"
															placeholder="Phone Number"
															required
															value={form.phone}
															onChange={handleChange}
														/>
														{error && error.phone && (
															<div className="text-danger small mt-1">{error.phone}</div>
														)}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="mb-4">
														<textarea
															name="message"
															className="form-control  bg-transparent radius-20"
															placeholder="Type Your Message"
															rows={4}
															required
															value={form.message}
															onChange={handleChange}
														></textarea>
														{error && error.message && (
															<div className="text-danger small mt-1">{error.message}</div>
														)}
													</div>
												</div>
												<div className="col-lg-12">
													<button className="form-btn" disabled={loading} type="submit">
														{loading ? 'Processing' : 'Send a Message'}
													</button>
												</div>
											</div>
										</form>
								)}
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
									<p className="color-16 level-8 mb-0">{setting?.address}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent1} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Phone</h5>
									<p className="color-16 level-8 mb-0">{setting?.contact_phone}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent2} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Email</h5>
									<p className="color-16 level-8 mb-0">{setting?.contact_email}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="social-contact d-flex gap-3">
								<Image src={socailcontent3} className="img-fluid social-wrapper-contactus-img" alt="" />
								<div className="">
									<h5 className="color-6 level-6 calibri-bold">Operation Houes</h5>
									<p className="color-16 level-8 mb-0" >
										<span className="color-12" dangerouslySetInnerHTML={{ __html: setting?.operation_hours }}></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
