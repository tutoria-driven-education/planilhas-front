import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./Contexts/User";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

import ResetCSS from "./global/styles/ResetCSS";
import GlobalCSS from "./global/styles/GlobalCSS";

export default function App() {
	return (
		<UserProvider>
			<ResetCSS />
      		<GlobalCSS />
			  
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/home" element={<Home />}></Route>

				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
