// "use client";

// import React from "react";
// import Footer from "@/Components/Footer";
// import PageHeader from "@/Components/PageHeader";
// import Header from "@/Components/Header";
// import EventNavbar from "@/Components/EventNavbar";
// import {
//     galleryimg3,
//     maineventimg,
//     maineventimg1,
//     maineventimg2,
//     maineventimg3,
//     maineventimg4,
//     maineventimg5,
// } from "@/Constant/Index";
// import Image from "next/image";
// import { FaCalendar, FaMap } from "react-icons/fa";
// import Link from "next/link";

// const DailyEvents = () => {
//     // Event data array
//     const eventsData = [
//         {
//             id: 1,
//             image: maineventimg5,
//             title: "Food For Thoughts",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/food-for-thoughts",
//             calendarLink: "/calendar/food-for-thoughts",
//         },
//         {
//             id: 2,
//             image: maineventimg4,
//             title: "MBA Meetup",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/mba-meetup",
//             calendarLink: "/calendar/mba-meetup",
//         },
//         {
//             id: 3,
//             image: maineventimg3,
//             title: "Janaza announcements",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/janaza-announcements",
//             calendarLink: "/calendar/janaza-announcements",
//         },
//         {
//             id: 4,
//             image: maineventimg2,
//             title: "Food For Thoughts",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/food-for-thoughts-2",
//             calendarLink: "/calendar/food-for-thoughts-2",
//         },
//         {
//             id: 5,
//             image: maineventimg1,
//             title: "MBA Meetup",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/mba-meetup-2",
//             calendarLink: "/calendar/mba-meetup-2",
//         },
//         {
//             id: 6,
//             image: maineventimg,
//             title: "Janaza announcements",
//             desc: "psum odor amet, consectetuer adipisc ing elit. Arcuma lesuadaet phasellusmus maximus pulvinar Lacuscon.",
//             location: "Lorem ipsum Street 145, USA",
//             readMoreLink: "/event/janaza-announcements-2",
//             calendarLink: "/calendar/janaza-announcements-2",
//         },
//     ];
//     return (
//         <div>
//             <Header />
//             <PageHeader description="this is description"  pagename="Events" />
//             <EventNavbar />
//             <section className="event-wrapper pt-5 mt-4 mb-5 pb-4">
//                 <div className="container">
//                     <div className="row">
//                         {eventsData.map((event) => (
//                             <div className="col-lg-6 mt-3" key={event.id}>
//                                 <div className="event-content-wrapper position-relative">
//                                     <div className="date-wrapper">
//                                         <h4 className="calibri-bold level-6 color-6 mb-0 text-white">June</h4>
//                                         <h4 className="calibri-bold level-8 color-6 mb-0 text-white">2025</h4>
//                                     </div>
//                                     <div className="row align-items-center">
//                                         <div className="col-lg-6">
//                                             <div className="position-relative">
//                                                 <Image
//                                                     src={event.image}
//                                                     className="img-fluid w-100 radius-30"
//                                                     alt="Event Image"
//                                                 />
//                                                 <div className="calender-wrapper">
//                                                     <Link href={event.calendarLink}>
//                                                         <FaCalendar className="color-6" />
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6">
//                                             <h3 className="calibri-bold level-5 color-6">{event.title}</h3>
//                                             <p className="color-16">{event.desc}</p>
//                                             <div className="map-event d-flex align-items-center gap-2">
//                                                 <FaMap className="color-15" />
//                                                 <h4 className="calibri-bold level-7 mb-0">{event.location}</h4>
//                                             </div>
//                                             <div className="d-flex align-items-center gap-3 mt-3">
//                                                 <Link href={event.readMoreLink}>
//                                                     <button className="form-btn">Read More</button>
//                                                 </Link>
//                                                 <Link href={event.readMoreLink}>
//                                                     <button
//                                                         className="wrapper-share"
//                                                         style={{
//                                                             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//                                                             borderRadius: "30px",
//                                                             padding: 0,
//                                                             border: "none",
//                                                             background: "transparent",
//                                                             cursor: "pointer",
//                                                         }}
//                                                     >
//                                                         <Image
//                                                             src={galleryimg3}
//                                                             className="img-fluid w-100 radius-30"
//                                                             alt="Share Icon"
//                                                         />
//                                                     </button>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="row mb-3 mt-4 pt-3">
//                         <div className="col-lg-2 mx-auto">
//                             <Link href="">
//                                 <button className="btn-wrapper  border view">
//                                     Load More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default DailyEvents;
