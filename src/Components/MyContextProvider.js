"use client";
import React, { createContext, useState } from "react";

// Create a context
export const MyContext = createContext();

// Example provider
const MyContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = (userData) => setUser(userData);
	const logout = () => setUser(null);

	return (
		<MyContext.Provider value={{ user, login, logout }}>
			{children}
		</MyContext.Provider>
	);
};

export default MyContextProvider;
