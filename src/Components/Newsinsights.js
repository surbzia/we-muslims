import {
	FaCalendarAlt,
	FaUserAlt,
	FaComment,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { newsimg1, newimg2, newimg3 } from "@/Constant/Index";
import { useContext } from "react";
import { MyContext } from "@/Components/MyContextProvider";

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
	slidesToShow: 3,
	slidesToScroll: 3,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	responsive: [
		{
			breakpoint: 1024,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 600,
			settings: { slidesToShow: 1 },
		},
	],
};

const Newsinsights = () => {
	const { content } = useContext(MyContext);
	const pageContent = content.home["NewsSection"];
	const data = pageContent.data ?? [];
	return (
		<section className="newinsgths pb-3">
			<div className="container">
				<div className="row mt-5 pt-5">
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

				<div className="mt-5 pt-2 pb-5 mb-5">
					<Slider {...settings}>
						{data.map((item, index) => (
							<div className="px-2" key={index}>
								<div className="insight-content bg-1 radius-20">
									<div className="position-relative">
										<Image
											src={item.logo_url}
											className="img-fluid wrappercharity-img w-100 radius-20"
											alt="insight"
											width={500}
											height={300}
											loading="lazy"
										/>
									</div>

									<div className="p-4">
										<div className="d-flex align-items-center gap-2 text-muted mb-2">
											<FaCalendarAlt size={14} />
											<span className="level-7">
												{item.formated_created_at}
											</span>
										</div>

										<h4 className="dark-color primary-semibold-font level-5 pe-5 mb-2">
											{item.name.length > 45
												? item.name.slice(0, 45) + "..."
												: item.name}
										</h4>

										<Link
											href={`/news/${item.id}`}
											className="text-decoration-none"
										>
											<span className="primary-semibold-font color-6 level-7 border-bottom">
												Read More
											</span>
										</Link>
									</div>

									<div className="bg-12 radius-40 text-white d-flex justify-content-between align-items-center p-3 px-4 ">
										<div className="d-flex align-items-center gap-2">
											<FaUserAlt size={14} />
											<span className="text-uppercase level-7">
												{item.author ?? "n/a"}
											</span>
										</div>
										<div className="d-flex align-items-center gap-2">
											<FaComment size={14} />
											<span className="text-uppercase level-7">
												{item.comments ?? 0} Comment
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Newsinsights;
