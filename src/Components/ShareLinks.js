"use client";

import {
    faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ShareLinks = ({ link = '' }) => {
    // Get current page URL if no link is provided
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${link}` || currentUrl;
    const shareText = "Check this out!";


    // Social share URLs
    const socialLinks = [
        {
            icon: faTwitter,
            shareURL: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
            name: "Twitter"
        },
        {
            icon: faFacebookF,
            shareURL: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            name: "Facebook"
        },
        {
            icon: faYoutube,
            shareURL: "https://youtube.com",
            name: "YouTube"
        },
        {
            icon: faInstagram,
            shareURL: "https://instagram.com",
            name: "Instagram"
        },
        {
            icon: faLinkedinIn,
            shareURL: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            name: "LinkedIn"
        },
    ];

    const handleSocialClick = (e, url) => {
        // Open share links in popup window
        if (url.includes('facebook.com') || url.includes('twitter.com') || url.includes('linkedin.com')) {
            e.preventDefault();
            window.open(url, 'share-popup', 'width=600,height=600');
            return false;
        }
        // For others, let the default Link behavior work
    };

    return (
        <>
            <h4 className="level-6 calibri-bold mb-0">Share:</h4>
            <div className="program-lists">
                <ul className="list-unstyled d-flex ps-0 mb-0 gap-2">
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <Link
                                href={social.shareURL}
                                className="icon-badge radius-40 border p-3 dark-color"
                                aria-label={`Share on ${social.name}`}
                                onClick={(e) => handleSocialClick(e, social.shareURL)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ShareLinks;