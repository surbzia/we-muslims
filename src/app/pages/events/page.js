import EventNavbar from "@/Components/EventNavbar";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PageHeader from "@/Components/PageHeader";
import React from "react";

const EventsPage = () => {
    return (
        <div>
            <Header />
            <PageHeader pagename="Get Involved" />
            <EventNavbar />
            <h3 style={{ textAlign: "center", marginTop: "40px" }}>Events Page</h3>
            <Footer />
        </div>
    );
};

export default EventsPage;
