"use client";
import { support } from "@/Constant/Index";
import Image from "next/image";
import React, {useContext} from "react";
import {MyContext} from "@/Components/MyContextProvider";

const Yoursupport = () => {

	const { content } = useContext(MyContext);
	const pageContent = content.home['SectionOne'];
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
										{pageContent['top_heading']}
									</h4>
									
								</div>
								<h2 className="primary-semibold-font color-6 level-3">
									{pageContent.heading}
									</h2>
									<p>
										{pageContent.note}
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
