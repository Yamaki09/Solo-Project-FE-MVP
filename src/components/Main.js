import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Main() {
	const dummydata = [
		{
			name: "salary",
			value: 100000,
		},
		{
			name: "grocery",
			value: 20000,
		},
		{
			name: "phones",
			value: 5000,
		},
	];
	return (
		<>
			<h1>Welcome user</h1>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table"
					className="mainpage-table"
				>
					<TableHead>
						<TableRow>
							<TableCell>Income</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dummydata.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell>{row.value}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table"
					className="mainpage-table"
				>
					<TableHead>
						<TableRow>
							<TableCell>Expense</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dummydata.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell>{row.value}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
