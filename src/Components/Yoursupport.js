"use client";
import {
	meetimg,
	meetimg1,
	meetimg2,
	support,
	support1,
	support2,
} from "@/Constant/Index";
import Image from "next/image";
import React, { useContext } from "react";
import { MyContext } from "@/Components/MyContextProvider";

const Yoursupport = () => {
	const { content } = useContext(MyContext);
	const pageContent = content.home["SectionOne"];
	return (
		<>
			<section className="yoursupport pt-5 pb-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-6">
									<div className="text-end">
										<Image
											src={support}
											className="wrapper-size img-fluid"
											alt="Logo"
										/>
										<Image
											src={support1}
											className="wrapper-size1 img-fluid"
											alt="Logo"
										/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="position-relative">
										<Image
											src={support2}
											className="wrapper-size2 img-fluid"
											alt="Logo"
										/>
										<div className="main-avatar">
											<h4>Be Our Volunteer</h4>
											<div className="avatar-group">
												<Image
													src={meetimg}
													alt="Volunteer 1"
													className="avatar-img"
												/>
												<Image
													src={meetimg1}
													alt="Volunteer 2"
													className="avatar-img"
												/>
												<Image
													src={meetimg2}
													alt="Volunteer 3"
													className="avatar-img"
												/>
												<div className="avatar-img more-count">+247</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content ps-lg-4">
								<div className="d-flex align-items-center gap-3">
									{" "}
									<span className="line-wrapper"></span>
									<h4 className="primary-semibold-font color-6 level-3">
										{pageContent["top_heading"]}
									</h4>
								</div>
								<h2 className="primary-semibold-font color-6 level-5">
									{pageContent.heading}
								</h2>
								<p>{pageContent.note}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Yoursupport;
