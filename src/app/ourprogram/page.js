"use client";

import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { testemonialarrow } from "@/Constant/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { request } from "@/services/request";
import api from "@/services/apis";
import Spinner from "@/Components/Spinner";
import ProgramCategorySidebar from "@/Components/ProgramCategorySidebar";

const Ourprogram = () => {
    const [program, setProgram] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [images, setImages] = useState([]);
    const [tags, setTags] = useState([]);
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProgram = async () => {
        try {
            setLoading(true);
            setError(null);
            setProgram(null);
            setImages([]);
            setQuote(null);
            setTags([]);

            if (!selectedCategory?.id) {
                setLoading(false);
                return;
            }

            const { data } = await request.get(api.program(`?category_id=${selectedCategory?.id}`));


            setProgram(data);
            setImages(data?.images ? JSON.parse(data.images) : []);
            setQuote(data?.quote ? JSON.parse(data.quote) : null);
            setTags(data?.tags ? JSON.parse(data.tags) : []);
        } catch (err) {
            console.error("Error fetching program:", err);
            setError(err.message || "Failed to load program");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProgram();
    }, [selectedCategory]);


    const renderProgramContent = () => {
        if (loading) return <Spinner />;

        if (program == null) return <div className="container"></div>;

        return (
            <div className="position-relative main-wrapper-program radius-30">
                <Image
                    src={program?.thumbnail_url}
                    className="img-fluid w-100 radius-30"
                    alt="Program Thumbnail"
                    height={400}
                    width={800}
                    priority
                />

                <div className="wrapper-content-programm">
                    <h2 className="dark-color mt-3 calibri-bold level-5">
                        {program?.title}
                    </h2>

                    <div
                        className="color-16 line-height-wrapper"
                        dangerouslySetInnerHTML={{ __html: program?.detail }}
                    />

                    {quote?.comment && (
                        <div className="specialized-content position-relative mt-4">
                            <div className="arrowimg position-absolute p-3 bg-white">
                                <Image
                                    src={testemonialarrow}
                                    className="img-fluid"
                                    alt="Quote icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h4 className="color-16 ps-4 level-6 calibri-bold">
                                {quote.comment}
                            </h4>
                            {quote.comment_by && (
                                <div className="clippath mb-0">
                                    <h5 className="mb-0">{quote.comment_by}</h5>
                                </div>
                            )}
                        </div>
                    )}

                    {images.length > 0 && (
                        <div className="row mt-5">
                            {images.map((image, index) => (
                                <div className="col-lg-6 mb-3" key={index}>
                                    <Image
                                        src={image?.full_path}
                                        className="img-fluid w-100 radius-30"
                                        alt={`Program image ${index + 1}`}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="row mt-4">
                        {tags.length > 0 && (
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <div className="d-flex align-items-center flex-wrap gap-3">
                                    <h4 className="level-6 calibri-bold">Tags:</h4>
                                    {tags.map((tag, index) => (
                                        <button
                                            key={index}
                                            className="border radius-40 px-3 py-1 color-16 calibri-bold bg-transparent"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="col-lg-6 d-flex align-items-center gap-3 justify-content-lg-end">
                            <h4 className="level-6 calibri-bold mb-0">Share:</h4>
                            <div className="program-lists">
                                <ul className="list-unstyled d-flex ps-0 mb-0 gap-2">
                                    {[
                                        { icon: faTwitter, name: "Twitter" },
                                        { icon: faFacebookF, name: "Facebook" },
                                        { icon: faYoutube, name: "YouTube" },
                                        { icon: faInstagram, name: "Instagram" },
                                        { icon: faLinkedinIn, name: "LinkedIn" },
                                    ].map((social, index) => (
                                        <li key={index}>
                                            <Link
                                                href="#"
                                                className="icon-badge radius-40 border p-3 dark-color"
                                                aria-label={`Share on ${social.name}`}
                                            >
                                                <FontAwesomeIcon icon={social.icon} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <PageHeader description="this is description"  pagename="Our Programs" />

            <section className="about-one">
                <div className="container">
                    <div className="row mt-5 mb-5 pt-5">
                        <div className="col-lg-8">
                            {renderProgramContent()}
                        </div>

                        <div className="col-lg-4">
                            <div className="position-relative radius-20 p-4 bg-17 mb-4">

                                <ProgramCategorySidebar
                                    program={program}
                                    onCategorySelect={(category) => setSelectedCategory(category)}
                                />
                            </div>
                            {/* <RecentActivities activities={activities} /> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Ourprogram;