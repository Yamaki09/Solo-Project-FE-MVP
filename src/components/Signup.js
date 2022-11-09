import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Signup() {
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
					/>
					<br />
					<label className="signup-form" for="last_name">
						Last Name
					</label>
					<input className="signup-input" type="text" placeholder="Last Name" />
					<br />
					<label className="signup-form" for="email">
						Email
					</label>
					<input className="signup-input" type="text" placeholder="Email" />
					<br />
					<label className="signup-form" for="password">
						Password
					</label>
					<input className="signup-input" type="text" placeholder="Password" />
					<br />
					<label className="signup-form" for="password2">
						Confirm Password
					</label>
					<input
						className="signup-input"
						type="text"
						placeholder="Confirm Password"
					/>
				</div>
			</div>
			<Box textAlign="center">
				<Button className="signup-button" variant="contained">
					Signup
				</Button>
			</Box>
		</>
	);
}
