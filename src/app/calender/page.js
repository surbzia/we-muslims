// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const Calander = () => {

	return (
		<>
			<Header />
			<PageHeader pagename="Calander" />
			<section className="calender">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="calender-image" >
                            <Image src={socailcontent} className="img-fluid social-wrapper-contactus-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
			<Footer />
		</>
	);
};

export default Calander;
