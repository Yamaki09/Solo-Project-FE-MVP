import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Login() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	// these functions handles the state handlers
	const inputEmail = (e) => {
		console.log(`This is email: ${e.target.value}`);
		setEmail(e.target.value);
	};
	const inputPassword = (e) => {
		console.log(`This is Password: ${e.target.value}`);
		setPassword(e.target.value);
	};

	const navigate = useNavigate();

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": {
					m: 1,
					width: "25ch",
				},
			}}
			noValidate
			autoComplete="off"
		>
			<div className="login-input">
				<div>
					<TextField
						className="login-user"
						id="useremail"
						label="Email"
						variant="filled"
						onChange={inputEmail}
					>
						Email
					</TextField>
				</div>
				<br />
				<div>
					<TextField
						className="login-password"
						id="password"
						label="password"
						variant="filled"
						onChange={inputPassword}
					/>
				</div>
			</div>
			<Button
				onClick={() => {
					navigate(`/main`);
				}}
				variant="contained"
			>
				Login
			</Button>
		</Box>
	);
}
