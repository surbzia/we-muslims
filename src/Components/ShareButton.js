"use client";

import { galleryimg3 } from "@/Constant/Index";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ShareButton = ({ link }) => {
	const [shareLink, setShareLink] = useState(`${window.location.origin}${link}`)

	const handleShareModal = () => {
		console.log(shareLink);
	}

	return (
		<>
			<button
				className="wrapper-share"
				onClick={handleShareModal}
				style={{
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
					borderRadius: "30px",
					padding: 0,
					border: "none",
					background: "transparent",
					cursor: "pointer",
				}}
			>
				<Image
					src={galleryimg3}
					className="img-fluid w-100 radius-30"
					alt="Share Icon"
				/>
			</button></>
	);
};

export default ShareButton;
