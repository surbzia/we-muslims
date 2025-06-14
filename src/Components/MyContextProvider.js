"use client";
import api from "@/services/apis";
import { request } from "@/services/request";
import React, { createContext, useEffect, useState } from "react";
import PageLoader from "./PageLoader";

// Create a context
export const MyContext = createContext();

// Example provider
const MyContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [pageLoader, setPageLoader] = useState(true);
	const [setting, setSetting] = useState(null);
	const [gallery, setGallery] = useState(null);
	const login = (userData) => setUser(userData);
	const logout = () => setUser(null);

	async function getSetting() {
		try {
			const [settingResponse, galleryResponse] = await Promise.all([
				request.get(api.setting),
				request.get(api.gallery)
			]);
			setSetting(settingResponse.data);
			setGallery(galleryResponse.data);
		} catch (error) {
			console.error('Error:', error);
			throw error;
		}
	}

	useEffect(() => {
		getSetting();
		setPageLoader(false);
	}, []);



	if (pageLoader) {
		return (<PageLoader />)
	}

	return (
		<MyContext.Provider value={{ user, login, logout, setting, gallery }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyContextProvider;
