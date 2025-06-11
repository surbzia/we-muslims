"use client";


import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
	event,
	event1,
	event2,
	event3,
	event4,
	event5,
} from "@/Constant/Index";

const eventData = [
	{
		src: event,
		date: "September 14, 2023",
		title: "Sees boom in younger volunteers following…",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		src: event1,
		date: "June 11, 2023",
		title: "Breaking Barriers: Empowering Women in…",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		src: event2,
		date: "June 3, 2023",
		title: "Summit to focus on responsible use of AI in…",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		src: event3,
		date: "June 3, 2023",
		title: "Charities turning to tech to help safeguard future",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		src: event4,
		date: "April 11, 2023",
		title: "Food pairing perfection: Elevate your…",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		src: event5,
		date: "March 11, 2023",
		title: "Lorum Ipsum dolor sit amit lorum ipsum",
		paragraph:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
];

const Events = () => {
	return (
		<section className="newinsgths pb-3">
			<div className="container">
				<div className="row mt-5 pt-5">
					<div className="col-lg-7 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h4 className="primary-bold-font color-6 level-2">EVENTS</h4>
							</div>
							<h2 className="primary-semibold-font color-6 level-3">
								MAKE SOMEONE’S LIFE BY GIVING OF YOURS.
							</h2>
						</div>
					</div>
				</div>

				<div className="row mt-5 pt-2 pb-5 mb-5">
					{eventData.map((event, index) => (
						<div className="col-lg-6 mt-4" key={index}>
							<div className="row">
								<div className="col-lg-6">
									<Image
										src={event.src}
										className="img-fluid w-100 radius-20"
										alt=""
									/>
								</div>
								<div className="col-lg-6">
									<h4 className="color-16 primary-medium-font level-6">
										{event.date}
									</h4>
									<h3 className="calibri-bold level-5">{event.title}</h3>
									<p>{event.paragraph}</p>
									<Link
										href="/pages/events"
										className="d-flex gap-2 color-12 calibri-bold level-7"
									>
										Read Me
										<span>
											<FaArrowRight style={14} />
										</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
