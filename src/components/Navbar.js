import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<h1 className="title-navbar">Nin-Money</h1>
				<Breadcrumbs className="nav-option" aria-label="breadcrumb">
					<Link to="/main" underline="hover" color="inherit">
						Home
					</Link>
					<Link to="/login" underline="hover" color="inherit">
						Login
					</Link>
					<Link to="/signup" underline="hover" color="inherit">
						Signup
					</Link>
				</Breadcrumbs>
			</div>
		</>
	);
}
