import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
					console.log("The login button is clicked");
				}}
				variant="contained"
			>
				Login
			</Button>
		</Box>
	);
}
