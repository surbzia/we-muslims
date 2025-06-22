"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import {
    programs, programs2, programs3, programs4, programs5, programs6, testemonialarrow,

} from "@/Constant/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from "@/Components/MyContextProvider";
import { request } from "@/services/request";
import api from "@/services/apis";
import Spinner from "@/Components/Spinner";

const Ourprogram = () => {
    const { categories } = useContext(MyContext);
    const [selected, setSelected] = useState(categories[0]);


    const [program, setProgram] = useState(null);
    const [images, setImages] = useState([]);
    const [tags, setTags] = useState([]);
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProgram = async () => {
        setLoading(true);
        setProgram(null);
        const { data } = await request.get(api.program(`?category_id=${selected.id}`));
        setProgram(data);
        setImages(data?.images != null ? JSON.parse(data?.images) : []);
        setQuote(data?.quote != null ? JSON.parse(data?.quote) : null);
        setTags(data?.tags != null ? JSON.parse(data?.tags) : null);
        setLoading(false);
    }

    useEffect(() => {
        getProgram();
    }, [selected]);


    const activities = [{
        img: programs2, date: '23 June, 2025', title: 'Charity Of The Month Golden Futures...'
    }, {
        img: programs3, date: '23 June, 2025', title: 'Partner For Good Corporate Sponsor'
    }, {
        img: programs4, date: '23 June, 2025', title: 'Every Contribution Counts Difference'
    }];

    return (<>
        <PageHeader pagename="Our Programs" />
        <section className="about-one">
            <div className="container">
                <div className="row mt-5 mb-5 pt-5">

                    <div className="col-lg-8">
                        {!loading ? (

                            <>
                                {program != null ? (<div className="position-relative main-wrapper-program radius-30">
                                    <Image
                                        src={program?.thumbnail_url}
                                        className="img-fluid w-100 radius-30"
                                        alt="Lang Icon"
                                        height={200}
                                        width={200}
                                    />{" "}
                                    <div className="wrapper-content-programm">
                                        <h2 className="dark-color mt-3 calibri-bold level-5">
                                            {program?.title}
                                        </h2>
                                        <p className="color-16 line-height-wrapper" dangerouslySetInnerHTML={{ __html: program?.detail }}>
                                        </p>

                                        {quote != null && quote?.comment ? (
                                            <div className="specialized-content position-relative">
                                                <div className="arrowimg position-absolute  p-3 bg-white
                                    "><Image
                                                        src={testemonialarrow}
                                                        className="img-fluid w-100 radius-30"
                                                        alt="Lang Icon"
                                                    />{" "}</div>
                                                <h4 className="color-16 ps-4 level-6 calibri-bold level-5">
                                                    {quote?.comment}
                                                </h4>
                                                <div className="clippath mb-0"><h5
                                                    className="mb-0">{quote?.comment_by}</h5></div>
                                            </div>) : ""}


                                        {images.length > 0 ? (<div className="row mt-5">
                                            {images.map((image, index) => (<div className="col-lg-6" key={index}>
                                                <Image
                                                    src={image?.full_path}
                                                    className="img-fluid w-100 radius-30"
                                                    alt="Lang Icon"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>))}

                                        </div>) : ""}


                                        <div className="row mt-3">

                                            {tags.length > 0 ? (<div className="col-lg-6">
                                                <div className="d-flex align-items-center gap-3">
                                                    <h4 className=" level-6 calibri-bold level-5">Tags:</h4>
                                                    {tags.map((tag, index) => (<button key={index}
                                                        className="border radius-40 px-4 py-2 color-16 calibri-bold bg-transparent">{tag}</button>))}
                                                </div>

                                            </div>) : ""}


                                            <div
                                                className="col-lg-6 d-flex align-items-center gap-3 justify-content-end">
                                                <h4 className=" level-6 calibri-bold level-5">Share:</h4>
                                                <div className="program-lists ">
                                                    <ul className="list-unstyled d-flex ps-0 mb-0 gap-2">
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                className="icon-badge  radius-40 border p-4 dark-color"
                                                            >
                                                                <FontAwesomeIcon icon={faTwitter} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                className="icon-badge  radius-40 border p-4 dark-color"
                                                            >
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                className="icon-badge  radius-40 border p-4 dark-color"
                                                            >
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                className="icon-badge  radius-40 border p-4 dark-color"
                                                            >
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href="#"
                                                                className="icon-badge  radius-40 border p-4 dark-color"
                                                            >
                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>) : (
                                    <p>No Data Found</p>
                                )}</>

                        ) : (<Spinner />)}
                    </div>
                    <div className="col-lg-4">
                        <div className="position-relative radius-20 p-4 bg-17">
                            <div className="programs-container">
                                <h3 className="heading">Our Programs</h3>
                                <form className="program-form">
                                    {categories.map((program, key) => (<label key={key} className="program-label">
                                        <input
                                            type="radio"
                                            name="program"
                                            value={program.title}
                                            checked={selected.id === program.id}
                                            onChange={() => setSelected(program)}
                                        />
                                        <span
                                            className={`program-btn ${selected.id === program.id ? 'active' : 'bg-16'}`}>
                                            {program.title}
                                        </span>
                                    </label>))}
                                </form>
                                {program != null ? (
                                    <Link href={`/donation?programId=${program?.id}&categoryId=${selected?.id}`} >
                                        <button className="donate-btn">Donate Now</button>
                                    </Link>
                                ) : ""}

                            </div>
                        </div>
                        {/* <div className="position-relative radius-20 mt-3 p-4 bg-17">
                                <div className="programs-container">
                                    <h3 className="heading">Recent Activity</h3>
                                    <div className="activity-list space-y-4 mt-4">
                                        {activities.map((item, index) => (
                                            <div key={index} className="d-flex gap-3 items-start">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    width={150}
                                                    height={64}
                                                    className="radius-20 img-fluid "
                                                />
                                                <div>
                                                    <div className="text-sm color-16 calibri-bold">
                                                        <FontAwesomeIcon icon={faCalendarAlt} className="color-2 pe-2"/>
                                                        {item.date}
                                                    </div>
                                                    <div className="heading">
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </div>))}
                                    </div>
                                </div>
                            </div> */}

                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default Ourprogram;
