"use client";

import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PageHeader = ({ pagename, description = "" }) => {
	return (
		<section className="main-banner-heading">
			<div className="container">
				<h1 className="main-heading level-2 text-center text-white mt-lg-3 mb-lg-3 mt-md-3 mb-md-3 mt-2 mb-2 calibri-bold  ">
					{pagename}
				</h1>
				<p className=" text-center text-white mt-lg-3 mb-lg-3 mt-md-3 mb-md-3 mt-1 mb-1 calibri-bold ">
					{description}
				</p>
			</div>
		</section>
	);
};

export default PageHeader;
