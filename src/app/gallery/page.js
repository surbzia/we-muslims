// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import {
    galleryimg,
    galleryimg1,
    galleryimg2,
    galleryimg3,
    programs,
} from "@/Constant/Index";
const Gallery = () => {
    const [selected, setSelected] = useState('Foods'); // Default selected

    const ourprograms = [
        'Community',
        'Educations',
        'Fundraising',
        'Foods',
        'Medical Help',
        'Water Support',
    ];
    const albums = [
        {
            id: 1,
            img: galleryimg1,
            title: "Album Name 01",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
            id: 2,
            img: galleryimg1,
            title: "Album Name 02",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
            id: 3,
            img: galleryimg,
            title: "Album Name 03",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
            id: 4,
            img: galleryimg,
            title: "Album Name 04",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
            id: 5,
            img: galleryimg2,
            title: "Album Name 05",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
            id: 6,
            img: galleryimg2,
            title: "Album Name 06",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
    ];

    return (
        <>
            <Header />
            <PageHeader pagename="Gallery" />
            <section className="about-one">
                <div className="container">
                    <div className="row mt-5 mb-5 pt-5">
                        <div className="col-lg-8">
                            <div className="row">
                                {albums.map(({ id, img, title, desc }) => (
                                    <div key={id} className="col-lg-6 mt-3">
                                        <div className="position-relative">
                                            <Image
                                                src={img}
                                                className="img-fluid w-100 radius-30"
                                                alt={title}
                                            />
                                            <div className="share position-absolute bottom-0 right-0 p-4">
                                                <button className="wrapper-share">
                                                    <Image
                                                        src={galleryimg3}
                                                        className="img-fluid w-100 radius-30"
                                                        alt="Share Icon"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="calibri-bold dark-color mt-3 level-5">{title}</h4>
                                        <p className="color-16">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="position-relative radius-20 p-4 bg-17">
                                <div className="programs-container">
                                    <h3 className="heading">Our Gallery Albums</h3>
                                    <form className="program-form">
                                        {ourprograms.map((program) => (
                                            <label key={program} className="program-label">
                                                <input
                                                    type="radio"
                                                    name="program"
                                                    value={program}
                                                    checked={selected === program}
                                                    onChange={() => setSelected(program)}
                                                />
                                                <span className={`program-btn ${selected === program ? 'active' : 'bg-16'}`}>
                                                    {program}
                                                </span>
                                            </label>
                                        ))}
                                    </form>
                                    <button className="donate-btn">Donate Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
