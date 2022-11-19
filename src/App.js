import React from "react";
import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Graphs from "./components/Graphs";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/main" element={<Main />} />
				<Route exact path="/graph" element={<Graphs />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
