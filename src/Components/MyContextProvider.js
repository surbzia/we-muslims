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
	const [page, setPage] = useState({ privacyPolicy: null, cookiesNotice: null });
	const [content, setContent] = useState({ home: null, aboutUs: null, contactUs: null, getInvolved: null });
	const [error, setError] = useState(null);
	const [categories, setCategories] = useState([]);

	const login = (userData) => setUser(userData);
	const logout = () => setUser(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [settingResponse, homeResponse, aboutResponse, categoriesResponse, pageResponse, contactUsResponse, getInvolvedResponse] = await Promise.all([
					request.get(api.setting),
					request.get(api.content('home')),
					request.get(api.content('about-us')),
					request.get(api.content('categories')),
					request.get(api.content('service-pages')),
					request.get(api.content('contact-us')),
					request.get(api.content('get-involved')),
				]);

				setPage({ privacyPolicy: pageResponse.data[0], cookiesNotice: pageResponse.data[1] });
				setSetting(settingResponse.data);
				setContent((prev) => ({ ...prev, home: homeResponse.data }));
				setContent((prev) => ({ ...prev, aboutUs: aboutResponse.data }));
				setCategories(categoriesResponse.data);
				setContent((prev) => ({ ...prev, contactUs: contactUsResponse.data }));
				setContent((prev) => ({ ...prev, getInvolved: getInvolvedResponse.data }));
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
		content,
		categories,
		page,
	}), [user, setting, error, content, categories, page]);

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
