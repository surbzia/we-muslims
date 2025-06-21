"use client";
import React, {useContext} from "react";
import Slider from "react-slick";
import {
	charity,
	line,
	line1,
	program1,
	program2,
	program3,
} from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {MyContext} from "@/Components/MyContextProvider";


const PrevArrow = ({ onClick }) => (
	<div className="custom-arrow prev" onClick={onClick}>
		<FaChevronLeft />
	</div>
);

const NextArrow = ({ onClick }) => (
	<div className="custom-arrow next" onClick={onClick}>
		<FaChevronRight />
	</div>
);

const Program = () => {

	const { content } = useContext(MyContext);
	const pageContent = content.home['ProgramSection'];
	const data = pageContent.data ?? [];


	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="programm">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h4 className="primary-bold-font color-6 level-2">{pageContent['top_heading']}</h4>
							</div>
							<h2 className="primary-semibold-font color-6 level-3">
								{pageContent['heading']}
							</h2>
						</div>
					</div>
				</div>

				<div className="mt-5 pt-4 pb-3 mb-5">
					<Slider {...settings}>
						{data.map((program, index) => (
							<div className="px-2" key={index}>
								<div className="charity-content">
									<div className="position-relative">
										<Image
											src={program.thumbnail_url}
											className="img-fluid wrappercharity-img w-100 radius-20"
											alt="programm"
											height={200}
											width={200}
										/>
										<div className="charity-main-content">
											<Image
												src={charity}
												className="img-fluid pcharity-img"
												alt=""
											/>
											<h6 className="dark-color primary-medium-font mb-0">
												{program.category?.title}
											</h6>
										</div>
									</div>
									<h4 className="dark-color ps-5 pe-5 mt-4 primary-semibold-font text-center">
										{program.title}
									</h4>
									<Image
										src={line}
										className="img-fluid pcharity-img w-100"
										alt=""
									/>
									<div className="row align-items-center mt-3">
										<div className="col-lg-8">
											<div className="d-flex align-content-center gap-2">
												<h4 className="color-12 level-7 mb-0 primary-semibold-font">
													{program?.raised_amount}of {program.total_amount_required}
												</h4>
												<span className="wrapper-linn primary-semibold-font level-7">
													Raised
												</span>
											</div>
											<Image
												src={line1}
												className="img-fluid mt-2 pcharity-img w-100"
												alt=""
											/>
										</div>
										<div className="col-lg-4">
											<Link
												href="/"
												className="header-link-donate ps-3 level-7 link-here primary-semibold-font text-decoration-none"
											>
												Donate
											</Link>
										</div>

										<div className="col-lg-12">
											<div className="d-flex align-content-center gap-2">
												<h4 className="color-6 level-7 mb-0 primary-semibold-font">
													{program.total_donations}
												</h4>
												<span className="wrapper-linn color-6 primary-semibold-font level-7">
													donations
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
				<div className="row mb-3">
					<div className="col-lg-3 text-center mx-auto">
						<Link href="">
							<button className="btn-wrapper view">View All Donation</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Program;
