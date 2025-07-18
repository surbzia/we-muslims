"use client";

import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PageHeader = ({ pagename, description = "" }) => {
	return (
		<section className="main-banner-heading">
			<div className="container">
				<h1 className="main-heading level-2 text-center text-white mt-3 mb-3 calibri-bold  ">
					{pagename}
				</h1>
				<p className=" text-center text-white mt-3 mb-3 calibri-bold ">{description}</p>
			</div>
		</section>
	);
};

export default PageHeader;
