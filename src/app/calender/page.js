// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { calenderimgwrapper, galleryimg3 } from "@/Constant/Index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import api from "@/services/apis";
import { request } from "@/services/request";
import Spinner from "@/Components/Spinner";

const Calander = () => {

    const [loading, setLoading] = useState(false);
    const [calanderData, setCalanderData] = useState(null);

    const getCalanderData = async () => {
        try {
            setLoading(true);
            setCalanderData(null);
            const { data } = await request.get(api.calander(' '));
            setCalanderData(data);
        } catch (error) {
            console.log("Error fetching calendar data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCalanderData();
    }, []);
    return (
        <>
            <PageHeader description="this is description"  pagename="Calander " />
            <section className="calender pt-5 pb-5 mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">

                            {loading ? (<Spinner />) : (
                                <>
                                    <div className="calender-image position-relative">
                                        <div className="position-absolute right-0 bottom-0 m-4"> <Link href="">
                                            <button
                                                className="wrapper-share"
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
                                        </Link></div>
                                        <Image src={calanderData?.logo_url} width={200} height={200} loading="lazy" className="img-fluid w-100" alt="" />
                                        <div className="eduction-content position-absolute top-0 left-0 m-3">
                                            <h4 className="bg-2 text-white primary-medium-font py-2 px-3 radius-40 level-7">
                                                {calanderData?.category?.title ?? 'n/a'}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="mt-3 mb-3" style={{ display: 'flex', gap: '30px', fontSize: '14px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', color: '#b18927' }}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                                            <span className="color-6 primary-medium-font">{calanderData?.location}</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', color: '#b18927' }}>
                                            <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
                                            <span className="color-6 primary-medium-font">{calanderData?.date}</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', color: '#b18927' }}>
                                            <FontAwesomeIcon icon={faClock} style={{ marginRight: '8px' }} />
                                            <span className="color-6 primary-medium-font">{calanderData?.time}</span>
                                        </div>

                                    </div>
                                    <h2 className="calibri-bold color-6">{calanderData?.name}</h2>
                                    <p className="color-16"
                                        dangerouslySetInnerHTML={{ __html: calanderData?.detail }}
                                    ></p>
                                    <div className="d-flex align-items-center gap-3">
                                        <button style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: '#ffb300',
                                            border: 'none',
                                            borderRadius: '999px',
                                            padding: '10px 20px',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            fontWeight: '500',
                                            color: '#000'
                                        }}>
                                            <span style={{
                                                backgroundColor: '#fff',
                                                borderRadius: '50%',
                                                padding: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '10px'
                                            }}>
                                                <FontAwesomeIcon icon={faCalendarAlt} color="#000" />
                                            </span>
                                            Add To Calendar
                                        </button>
                                        <button type="button" className="btn-wrapper calibri-bold  view">Donate Now </button>
                                    </div>
                                </>)}


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Calander;
