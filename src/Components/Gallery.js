import { gallery, gallery1, gallery2, gallery3 } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "@/Components/MyContextProvider";

const Gallery = () => {
	const { content } = useContext(MyContext);
	const pageContent = content.home['GallerySection'];

	return (
		<section className="gallery pb-3">
			<div className="container">
				<div className="row mt-5 pt-5">
					<div className="col-lg-7 mx-auto text-center">
						<div className="content">
							<div className="d-flex align-items-center justify-content-center gap-3">
								<span className="line-wrapper"></span>
								<h4 className="primary-bold-font color-6 level-2">{pageContent['top_heading']}</h4>
							</div>
							<h2 className="primary-semibold-font color-6 level-3">
								{pageContent['note']}
							</h2>
						</div>
					</div>
				</div>

				<div className="slider-wrapper mt-5 pt-5 pb-5 mb-5">
					<div className="row d-flex align-items-center justify-content-between">
						{/* Column 1 */}
						<div className="col-lg-3">
							<div className="img-gallery position-relative">
								<Image
									src={gallery}
									className="img-fluid w-100 radius-20"
									alt="Health"
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										Health
									</h5>
									<Link href="/" className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
							<div className="img-gallery position-relative mt-3">
								<Image
									src={gallery1}
									className="img-fluid w-100 radius-20"
									alt="Education"
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										Education
									</h5>
									<Link href="/" className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
						</div>
						{/* Column 2 */}
						<div className="col-lg-3">
							<div className="img-gallery position-relative">
								<Image
									src={gallery2}
									className="wrapper-oldimg img-fluid w-100 radius-20"
									alt="Donation"
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										Donation
									</h5>
									<Link href="/" className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
						</div>
						{/* Column 3 */}
						<div className="col-lg-6">
							<div className="img-gallery position-relative">
								<Image
									src={gallery3}
									className="wrapper-oldimg img-fluid w-100 radius-20"
									alt="Medical"
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										Medical
									</h5>
									<Link href="/" className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
