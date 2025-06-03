"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/Constant/Index";

const Foundationfact = () => {
	const cardData = [
		{
			title: "Lorum Ipsum",
			text: "Cillum potenti consequuntur cupidita terre perferendis ac natoque.",
			value: "14,246",
			colorClass: "color-13",
		},
		{
			title: "Lorum Ipsum",
			text: "Cillum potenti consequuntur cupidita terre perferendis ac natoque.",
			value: "864",
			colorClass: "color-3",
		},
		{
			title: "Lorum Ipsum",
			text: "Cillum potenti consequuntur cupidita terre perferendis ac natoque.",
			value: "$ 20,050",
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
									Foundation Facts
								</h2>{" "}
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Image src={Map} className="img-fluid w-100 mt-5 pt-2" alt="map" />{" "}
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
