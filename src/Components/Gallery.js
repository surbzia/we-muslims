import { gallery, gallery1, gallery2, gallery3 } from "@/Constant/Index";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "@/Components/MyContextProvider";

const Gallery = () => {
	const { content } = useContext(MyContext);
	const pageContent = content.home['GallerySection'];
	const gallery = pageContent['data'] ?? null;

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
							{gallery && gallery.length > 0 ? (<div className="img-gallery position-relative">
								<Image
									src={gallery[0]['thumbnail']['file_url']}
									className="img-fluid w-100 radius-20"
									alt="Health"
									height={200}
									width={200}
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										{gallery[0]['category']['title']}
									</h5>
									<Link href={`/gallery?category_id=${gallery[0]['category']['id']}`} className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>) : ""}
							{gallery && gallery.length > 1 ? (<div className="img-gallery position-relative mt-3">
								<Image
									src={gallery[1]['thumbnail']['file_url']}
									className="img-fluid w-100 radius-20"
									alt="Education"
									height={200}
									width={200}
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										{gallery[1]['category']['title']}
									</h5>
									<Link href={`/gallery?category_id=${gallery[1]['category']['id']}`} className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>) : ""}


						</div>
						{/* Column 2 */}
						{gallery && gallery.length > 2 ? (<div className="col-lg-3">
							<div className="img-gallery position-relative">
								<Image
									src={gallery[2]['thumbnail']['file_url']}
									className="wrapper-oldimg img-fluid w-100 radius-20"
									alt="Donation"
									height={200}
									width={200}
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										{gallery[2]['category']['title']}
									</h5>
									<Link href={`/gallery?category_id=${gallery[2]['category']['id']}`} className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
						</div>) : ""}

						{/* Column 3 */}
						{gallery && gallery.length > 3 ? (<div className="col-lg-6">
							<div className="img-gallery position-relative">
								<Image
									src={gallery[3]['thumbnail']['file_url']}
									className="wrapper-oldimg img-fluid w-100 radius-20"
									alt="Medical"
									height={200}
									width={200}
								/>
								<div className="galley-content">
									<h5 className="text-white primary-medium-font level-6">
										{gallery[3]['category']['title']}
									</h5>
									<Link href={`/gallery?category_id=${gallery[3]['category']['id']}`} className="arrow-link color-6">
										<FaChevronRight size={14} />
									</Link>
								</div>
							</div>
						</div>) : ""}

					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
