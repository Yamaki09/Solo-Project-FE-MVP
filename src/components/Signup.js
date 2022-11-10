import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Signup() {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [password2, setPassword2] = useState(null);

	// these functions handles the state handlers
	function inputFirstName(e) {
		setFirstName(e.target.value);
	}
	function inputLastName(e) {
		setLastName(e.target.value);
	}
	function inputEmail(e) {
		setEmail(e.target.value);
	}
	function inputPassword(e) {
		setPassword(e.target.value);
	}
	function inputPassword2(e) {
		setPassword2(e.target.value);
	}
	return (
		<>
			<div className="form">
				<div className="signup-fname">
					<label className="signup-form" for="first_name">
						First Name
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="First Name"
						id="firstname"
						value={firstName}
						onChange={inputFirstName}
					/>
					<br />
					<label className="signup-form" for="last_name">
						Last Name
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="Last Name"
						id="lastname"
						value={lastName}
						onChange={inputLastName}
					/>
					<br />
					<label className="signup-form" for="email">
						Email
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="Email"
						id="email"
						value={email}
						onChange={inputEmail}
					/>
					<br />
					<label className="signup-form" for="password">
						Password
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="Password"
						id="password"
						value={password}
						onChange={inputPassword}
					/>
					<br />
					<label className="signup-form" for="password2">
						Confirm Password
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="Confirm Password"
						id="password2"
						value={password2}
						onChange={inputPassword2}
					/>
				</div>
			</div>
			<Box textAlign="center">
				<Button
					className="signup-button"
					variant="contained"
					onClick={() => {
						console.log("signup button is clicked");
					}}
				>
					Signup
				</Button>
			</Box>
		</>
	);
}
