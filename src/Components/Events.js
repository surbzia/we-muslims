"use client";

import React, { useContext } from "react";
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
import { MyContext } from "@/Components/MyContextProvider";

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
	const { content } = useContext(MyContext);
	const pageContent = content.home["EventSection"];
	const data = pageContent.data ?? [];
	return (
		<section className="newinsgths pb-3">
			<div className="container">
				<div className="row mt-lg-5 pt-lg-5 mt-md-5 pt-md-5 mt-2 pt-2">
					<div className="col-lg-7 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h4 className="primary-bold-font color-6 level-2">
									{pageContent["top_heading"]}
								</h4>
							</div>
							<h2 className="primary-semibold-font color-6 level-3">
								{pageContent["note"]}
							</h2>
						</div>
					</div>
				</div>

				<div className="row mt-5 pt-2 pb-5 mb-5">
					{data.map((event, index) => (
						<div className="col-lg-6 mt-4" key={index}>
							<div className="row">
								<div className="col-lg-6">
									<Image
										src={event.logo_url}
										className="img-fluid w-100 radius-20"
										alt=""
										width={500}
										height={300}
										loading="lazy"
									/>
								</div>
								<div className="col-lg-6">
									<h4 className="color-16 primary-medium-font level-6">
										{event.formated_created_at}
									</h4>
									<h3 className="calibri-bold level-5">{event.name}</h3>
									<p>{event.short_detail}</p>
									<Link
										href={`/events/${event.id}`}
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
