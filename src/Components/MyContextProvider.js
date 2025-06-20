import React, { createContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import api from "@/services/apis";
import { request } from "@/services/request";
import PageLoader from "./PageLoader";

// Create a context
export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [pageLoader, setPageLoader] = useState(true);
	const [setting, setSetting] = useState(null);
	const [content, setContent] = useState({home:null,aboutUs:null});
	const [gallery, setGallery] = useState(null);
	const [error, setError] = useState(null);

	const login = (userData) => setUser(userData);
	const logout = () => setUser(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [settingResponse, galleryResponse, homeResponse, aboutResponse] = await Promise.all([
					request.get(api.setting),
					request.get(api.gallery),
					request.get(api.content('home')),
					request.get(api.content('about-us')),
				]);

				setSetting(settingResponse.data);
				setGallery(galleryResponse.data);
				setContent((prev) => ({ ...prev, home: homeResponse.data }));
				setContent((prev) => ({ ...prev, aboutUs: aboutResponse.data }));
			} catch (err) {
				console.error("Error:", err);
				setError("Failed to load settings.");
			} finally {
				setPageLoader(false);
			}
		};
		fetchData();
	}, []);

	const contextValue = useMemo(() => ({
		user,
		login,
		logout,
		setting,
		error,
		gallery,
		content
	}), [user, setting, gallery, error, content]);

	if (pageLoader) {
		return <PageLoader />;
	}

	if (error) {
		return <div style={{ color: "red", padding: 16 }}>{error}</div>;
	}

	return (
		<MyContext.Provider value={contextValue}>
			{children}
		</MyContext.Provider>
	);
};

MyContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export default MyContextProvider;
