"use client";
import React, {useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/Constant/Index";
import {MyContext} from "@/Components/MyContextProvider";

const Foundationfact = () => {

	const { content } = useContext(MyContext);
	const pageContent = content.home['MapSection'];


	const cardData = [
		{
			title: pageContent['heading_one'],
			text: pageContent['note_one'],
			value: pageContent['sub_note_one'],
			colorClass: "color-13",
		},
		{
			title: pageContent['heading_two'],
			text: pageContent['note_two'],
			value: pageContent['sub_note_two'],
			colorClass: "color-3",
		},
		{
			title: pageContent['heading_three'],
			text: pageContent['note_three'],
			value: pageContent['sub_note_three'],
			colorClass: "color-12",
		},
	];
	return (
		<section className="foundationfact mt-5 pt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h2 className="primary-semibold-font color-6 level-3">
									{pageContent['top_heading']}
								</h2>{" "}
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Image src={pageContent['map_image'][0]} width={600}
							   height={800} className="img-fluid w-100 mt-5 pt-2" alt="map" />{" "}
					</div>
				</div>
				<div className="row mt-3">
					{cardData.map((item, index) => (
						<div className="col-lg-4" key={index}>
							<div>
								<h4>{item.title}</h4>
								<p className="color-16 pe-lg-5 pe-md-5">{item.text}</p>
								<h3 className={`${item.colorClass} calibri-bold level-1`}>
									{item.value}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Foundationfact;
