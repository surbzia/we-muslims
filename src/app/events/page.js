"use client";

import React, {useEffect, useState} from "react";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Header from "@/Components/Header";
import {
    galleryimg3,
    maineventimg,
    maineventimg1,
    maineventimg2,
    maineventimg3,
    maineventimg4,
    maineventimg5,
} from "@/Constant/Index";
import Image from "next/image";
import { FaCalendar, FaMap } from "react-icons/fa";
import Link from "next/link";
import {useParams} from "next/navigation";
import {request} from "@/services/request";
import api from "@/services/apis";
import Spinner from "@/Components/Spinner";

const tabs = ["daily", "weekly", "monthly"];

const DailyEvents = () => {
    const [activeTab, setActiveTab] = useState("daily");

    const eventsData = [
        {
            id: 1,
            category: "Daily",
            image: maineventimg5,
            title: "Food For Thoughts",
            desc: "Some short description...",
            location: "Lorem ipsum Street 145, USA",
            readMoreLink: "/events/2",
            calendarLink: "/events/2",
        },
        {
            id: 2,
            category: "Weekly",
            image: maineventimg4,
            title: "MBA Meetup",
            desc: "Another event description...",
            location: "Lorem ipsum Street 145, USA",
            readMoreLink: "/events/2",
            calendarLink: "/events/2",
        },
        {
            id: 3,
            category: "Monthly",
            image: maineventimg3,
            title: "Janaza Announcements",
            desc: "A longer explanation...",
            location: "Lorem ipsum Street 145, USA",
            readMoreLink: "/events/2",
            calendarLink: "/events/2",
        },
    ];

    const filteredEvents = eventsData.filter(event => event.category === activeTab);





    const [loading, setLoading] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        try {
            if(!loadMore){
                setLoading(true);
            }
            const { data } = await request.get(api.events( `?by=${activeTab}&page=${page}`));
            if(loadMore){
                setEvents(prev => [...prev, ...data.data]);
            }else{
                setEvents(data.data);
            }
            setPage(data.current_page);
            setLastPage(data.last_page);
        } catch (error) {
            console.log("Error fetching calendar data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getEvents();
    }, [activeTab, page]);



    return (
        <div>
            <PageHeader description="this is description"  pagename="Events" />
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <h2 className="calibri-bold level-2 color-6">Events List</h2>
                <div className="mt-3" style={{ display: "inline-flex", gap: "10px" }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setPage(1);
                                setLoadMore(false); setActiveTab(tab)}}
                            className="text-capitalize"
                            style={{

                                padding: "10px 40px",
                                borderRadius: "25px",
                                border: "1px solid #ccc",
                                color: activeTab === tab ? "#fff" : "#333",
                                backgroundColor: activeTab === tab ? "#18665b" : "#fff",
                                fontWeight: activeTab === tab ? "bold" : "normal",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>


            <section className="event-wrapper pt-5 mt-4 mb-5 pb-4">
                {loading?(<Spinner/>):(  <div className="container">
                    <div className="row">
                        {events.length > 0? events.map((event, key) => (
                            <div className="col-lg-6 mt-3" key={key}>
                                <div className="event-content-wrapper position-relative">
                                    <div className="date-wrapper">
                                        <h4 className="calibri-bold level-6 color-6 mb-0 text-white">{event?.month}</h4>
                                        <h4 className="calibri-bold level-8 color-6 mb-0 text-white">{event?.year}</h4>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="position-relative">
                                                <Image
                                                    src={event.logo_url}
                                                    className="img-fluid w-100 radius-30"
                                                    alt="Event Image"
                                                    width={200}
                                                    height={200}

                                                />
                                                <div className="calender-wrapper">
                                                    <Link
                                                        href={`/events/${event.id}`}
                                                    >
                                                        <FaCalendar className="color-6" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="calibri-bold level-5 color-6">{event.name}</h3>
                                            <p className="color-16">{event.short_detail}</p>
                                            <div className="map-event d-flex align-items-center gap-2">
                                                <FaMap className="color-15" />
                                                <h4 className="calibri-bold level-7 mb-0">{event.location}</h4>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mt-3">
                                                <Link   href={`/events/${event.id}`}>
                                                    <button className="form-btn">Read More</button>
                                                </Link>
                                                <Link   href={`/events/${event.id}`}>
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
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )):""}
                    </div>
                    {lastPage > page?(<div className="row mb-3 mt-4 pt-3">
                        <div className="col-lg-2 mx-auto">
                            <button className="btn-wrapper border view" onClick={()=> {
                                setLoadMore(true);
                                setPage(page + 1);
                            }}>
                                Load More
                            </button>
                        </div>
                    </div>):''}

                </div>)}
            </section>
        </div>
    );
};

export default DailyEvents;
