import React, { useState, useEffect } from "react";
import DataChart from "./DataChart";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080"; // for local

// const API_URL =
// 	process.env.REACT_APP_API_URL || `https://nin-money-api.onrender.com`; // for web

// Styling the table
const style = { width: 900, backgroundColor: "white", borderRadius: 35 };

export default function Graphs() {
	const navigate = useNavigate();

	function getTotalBalance(array1, array2) {
		let result = totalBalance;
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
		setTotalBalance(result);
		return result;
	}

	function getIncomeBalance(array) {
		let result = totalIncomeBalance;
		for (const element of array) {
			for (const key in element) {
				if (key === "value") {
					result += element[key];
				}
			}
		}
		setTotalIncomeBalance(result);
		return result;
	}

	function getExpenseBalance(array) {
		let result = totalExpenseBalance;
		for (const element of array) {
			for (const key in element) {
				if (key === "value") {
					result += element[key];
				}
			}
		}
		setTotalExpenseBalance(result);
		return result;
	}
	const userid = "3";

	let [totalBalance, setTotalBalance] = useState(0);
	let [totalIncomeBalance, setTotalIncomeBalance] = useState(0);
	let [totalExpenseBalance, setTotalExpenseBalance] = useState(0);
	let [userData, setUserData] = useState({
		labels: ["Income", "Expense", "Balance"],
		datasets: [
			{
				data: [1000, 1000, 1000],
			},
		],
	});
	useEffect(() => {
		(async () => {
			try {
				const rawIncomeData = await fetch(`${API_URL}/user/income/${userid}`);
				const incomeArray = await rawIncomeData.json();
				const rawExpenseData = await fetch(`${API_URL}/user/expense/${userid}`);
				const expenseArray = await rawExpenseData.json();
				getIncomeBalance(incomeArray);
				getExpenseBalance(expenseArray);
				getTotalBalance(incomeArray, expenseArray);
				setUserData({
					labels: ["Income", "Expense", "Balance"],
					datasets: [
						{
							label: "Your monthly data",
							data: [
								getIncomeBalance(incomeArray),
								getExpenseBalance(expenseArray),
								getTotalBalance(incomeArray, expenseArray),
							],
							backgroundColor: [
								"rgba(0, 0, 255, 0.6)",
								"rgba(255, 0, 0, 0.7)",
								"rgba(0, 255, 0, 0.5)",
							],
							borderColor: ["rgb(60, 60, 60)"],
							borderWidth: 3,
						},
					],
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<>
			<div className="graph" style={style}>
				<DataChart chartData={userData} />
			</div>
			<br />
			<Button
				onClick={() => {
					navigate(`/main`);
				}}
				variant="contained"
			>
				Go to main
			</Button>
		</>
	);
}
