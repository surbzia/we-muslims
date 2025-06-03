"use client";
import React from "react";
import MyContextProvider from "./MyContextProvider";

export default function Providers({ children }) {
	return <MyContextProvider>{children}</MyContextProvider>;
}
