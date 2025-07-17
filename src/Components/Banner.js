"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { bannerimg } from "@/Constant/Index"; // ✅ Imported constants

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContext } from "@/Components/MyContextProvider";

const Banner = () => {
	const { content } = useContext(MyContext);

	const images = content.home.Banner.images;

	const settings = {
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true, // ✅ animation effect
		arrows: false,
		dots: false,
		pauseOnHover: false,
	};

	return (
		<section className="banner-wrapper">
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-lg-12">
						<Slider {...settings} className="banner-slider">
							{images.map((imgSrc, index) => (
								<div key={index}>
									<Image
										src={imgSrc}
										alt={`Banner Image ${index + 1}`}
										className="img-fluid"
										width={1920}
										height={600}
										priority
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
