import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
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
						id="username"
						label="username"
						variant="filled"
					>
						Username
					</TextField>
				</div>
				<br />
				<div>
					<TextField
						className="login-password"
						id="password"
						label="password"
						variant="filled"
					/>
				</div>
			</div>
			<Button variant="contained">Login</Button>
		</Box>
	);
}
