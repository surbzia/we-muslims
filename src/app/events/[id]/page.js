// ✅ About Us page: app/aboutus/page.js
"use client";

import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";

const Privacy = () => {

    return (
        <>
            <Header />
            <PageHeader pagename="Privacy Policy" />
            <section className="content-pricavy-cookies pt-4 mt-4 pb-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="calibri-bold color-6">News Detail</h2>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Privacy;
