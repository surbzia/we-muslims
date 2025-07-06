"use client";

import { galleryimg3 } from "@/Constant/Index";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShareLinks from "./ShareLinks";

const ShareButton = ({ link }) => {
	const [shareLink, setShareLink] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		// Set shareLink after component mounts (when window is available)
		setShareLink(`${window.location.origin}${link}`);
	}, [link]);

	const handleShareModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(shareLink);
		// You can add a toast notification here if you want
		alert("Link copied to clipboard!");
	};

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
			</button>

			{/* Modal */}
			{isModalOpen && (
				<div style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0,0,0,0.5)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1000,
				}}>
					<div style={{
						backgroundColor: 'white',
						padding: '20px',
						borderRadius: '8px',
						maxWidth: '500px',
						width: '90%',
					}}>
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<button
								onClick={closeModal}
								className=" btn btn-sm"

							>
								Close
							</button>
						</div>
						<div className="col-lg-12 mt-3 d-flex align-items-center gap-3 justify-content-between">
							<ShareLinks link={shareLink} />
						</div>

					</div>
				</div>
			)}
		</>
	);
};

export default ShareButton;