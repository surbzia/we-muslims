// ✅ Home page: app/page.js
"use client";

import React, { useContext, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Banner from "@/Components/Banner";
import DonationForm from "@/Components/DonationForm";
import Yoursupport from "@/Components/Yoursupport";
import Program from "@/Components/Program";
import Foundationfact from "@/Components/Foundationfact";
import Newsinsights from "@/Components/Newsinsights";
import Gallery from "@/Components/Gallery";
import Events from "@/Components/Events";
import api from "@/services/apis";
import { request } from "@/services/request";
import { MyContext } from "@/Components/MyContextProvider";

const Home = () => {

	return (
		<>
			<Header />
			<Banner />
			<DonationForm />
			<Yoursupport />
			<Program />
			<Foundationfact />
			<Newsinsights />
			<Gallery />
			<Events />
			<Footer />
		</>
	);
};

export default Home;