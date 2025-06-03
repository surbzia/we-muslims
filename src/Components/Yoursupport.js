"use client";
import { support } from "@/Constant/Index";
import Image from "next/image";
import React from "react";

const Yoursupport = () => {
	return (
		<>
			<section className="yoursupport pt-5 pb-5">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<Image
								src={support}
								className="logo-here light-image"
								alt="Logo"
							/>
						</div>
						<div className="col-lg-6">
							<div className="content">
								<div className="d-flex align-items-center gap-3">
									{" "}
									<span className="line-wrapper"></span>
									<h4 className="primary-semibold-font color-6 level-3">
										Lorum Ipsum
									</h4>
									
								</div>
								<h2 className="primary-semibold-font color-6 level-3">
										YOUR SUPPORT IS REALLY POWERFUL.
									</h2>
									<p>
										{`Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book. Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem Ipsum has been the
										industry's standard dummy text ever since the 1500s, when an
										unknown printer took a galley of type and scrambled it to
										make a type specimen book.`}
									</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Yoursupport;
