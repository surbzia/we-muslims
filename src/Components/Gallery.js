import { gallery, gallery1, gallery2, gallery3 } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

const Gallery = () => {
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

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	// 👇 Grouped slides array (each slide = 1 set of 4 images arranged in 3 columns)
	const slides = [
		[
			{
				col: 3,
				items: [
					{ src: gallery, title: "Health" },
					{ src: gallery1, title: "Education" },
				],
			},
			{
				col: 3,
				items: [
					{ src: gallery2, title: "Donation", imgclassadd: "wrapper-oldimg" },
				],
			},
			{
				col: 6,
				items: [
					{ src: gallery3, title: "Medical", imgclassadd: "wrapper-oldimg" },
				],
			},
		],
		[
			{
				col: 3,
				items: [
					{ src: gallery, title: "Health" },
					{ src: gallery1, title: "Education" },
				],
			},
			{
				col: 3,
				items: [
					{ src: gallery2, title: "Donation", imgclassadd: "wrapper-oldimg" },
				],
			},
			{
				col: 6,
				items: [
					{ src: gallery3, title: "Medical", imgclassadd: "wrapper-oldimg" },
				],
			},
		],
	];

	return (
		<section className="gallery pb-3">
			<div className="container">
				<div className="row mt-5 pt-5">
					<div className="col-lg-7 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h4 className="primary-bold-font color-6 level-2">Gallery</h4>
							</div>
							<h2 className="primary-semibold-font color-6 level-3">
								Muslims has been supporting emergency feeding programmes
							</h2>
						</div>
					</div>
				</div>

				<div className="slider-wrapper mt-5 pt-5 pb-5 mb-5">
					<Slider {...settings}>
						{slides.map((slide, index) => (
							<div
								className="row d-flex align-items-center justify-content-between"
								key={index}
							>
								{slide.map((column, colIndex) => (
									<div className={`col-lg-${column.col}`} key={colIndex}>
										{column.items.map((item, itemIndex) => (
											<div
												className={`img-gallery position-relative ${
													itemIndex > 0 ? "mt-3" : ""
												}`}
												key={itemIndex}
											>
												<Image
													src={item.src}
													className={`${item.imgclassadd} img-fluid  w-100 radius-20`}
													alt={item.title}
												/>
												<div className="galley-content">
													<h5 className="text-white primary-medium-font level-6">
														{item.title}
													</h5>
													<Link href="/" className="arrow-link color-6">
														<FaChevronRight size={14} />
													</Link>
												</div>
											</div>
										))}
									</div>
								))}
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
