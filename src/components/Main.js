import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const API_URL =
	process.env.REACT_APP_API_URL || `https://nin-money-api.onrender.com`;

export default function Main() {
	const [income, setIncome] = useState([]);
	const [expense, setExpense] = useState([]);
	let [balance, setBalance] = useState(0);

	function getBalance(array1, array2) {
		let result = balance;
		for (const element of array1) {
			for (const key in element) {
				if (key === "value") {
					result += element[key];
				}
			}
		}
		for (const element of array2) {
			for (const key in element) {
				if (key === "value") {
					result -= element[key];
				}
			}
		}
		console.log(`this is income balance ${result}`);
		setBalance(result);
		return;
	}

	useEffect(() => {
		(async () => {
			try {
				const rawIncomeData = await fetch(`${API_URL}/user/income/1`);
				const incomeArray = await rawIncomeData.json();
				const rawExpenseData = await fetch(`${API_URL}/user/expense/1`);
				const expenseArray = await rawExpenseData.json();
				console.log("this is income", incomeArray);
				console.log(expenseArray);
				setIncome(incomeArray);
				setExpense(expenseArray);
				getBalance(incomeArray, expenseArray);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
			<h1>Welcome user</h1>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table"
					className="mainpage-table-income"
				>
					<TableHead>
						<TableRow>
							<TableCell>Income</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{income.map((obj) => {
							return (
								<TableRow
									key={obj.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{obj.name}
									</TableCell>
									<TableCell>{obj.value}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="simple table"
					className="mainpage-table-expense"
				>
					<TableHead>
						<TableRow>
							<TableCell>Expense</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{expense.map((obj) => {
							return (
								<TableRow
									key={obj.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{obj.name}
									</TableCell>
									<TableCell>{obj.value}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<div>
				<h4>Cash remaining</h4>
				<p>{balance}</p>
			</div>
		</>
	);
}
