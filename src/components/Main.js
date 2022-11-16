import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";

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
	fontFamily: "monospace",
};

// const API_URL = "http://localhost:8080"; // for local
const API_URL =
	process.env.REACT_APP_API_URL || `https://nin-money-api.onrender.com`; // for web

export default function Main() {
	const [userName, setUserName] = useState("Koji");
	const [income, setIncome] = useState([]);
	const [expense, setExpense] = useState([]);
	let [balance, setBalance] = useState(0);
	const [name, setName] = useState("");
	const [value, setValue] = useState(0);
	const [incomeID, setIncomeID] = useState("");
	const [expenseID, setExpenseID] = useState("");
	const [openIncome, setOpenIncome] = React.useState(false);
	const handleOpenIncome = () => setOpenIncome(true);
	const handleCloseIncome = () => setOpenIncome(false);
	const [openExpense, setOpenExpense] = React.useState(false);
	const handleOpenExpense = () => setOpenExpense(true);
	const handleCloseExpense = () => setOpenExpense(false);
	const [editIncome, setEditIncome] = React.useState(false);
	const handleEditIncome = () => setEditIncome(true);
	const handleCloseIncomeEdit = () => setEditIncome(false);
	const [editExpense, setEditExpense] = React.useState(false);
	const handleEditExpense = () => setEditExpense(true);
	const handleCloseExpenseEdit = () => setEditExpense(false);

	console.log("this is income ID", incomeID);
	console.log("this is expense ID", expenseID);

	// adding income and expense state handlers
	const inputName = (e) => {
		setName(e.target.value);
	};
	const inputValue = (e) => {
		setValue(e.target.value);
	};

	// form submission on income and expense
	const submitIncome = () => {
		const data = { name, value };
		(async () => {
			console.log(data);
			const rawResponse = await fetch(`${API_URL}/user/income/new`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			console.log(JSON.stringify(rawResponse));
		})();
	};

	const submitExpense = () => {
		const data = { name, value };
		(async () => {
			console.log(data);
			const rawResponse = await fetch(`${API_URL}/user/expense/new`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			console.log(JSON.stringify(rawResponse));
		})();
	};

	// edit income and expense input
	const submitEditedIncome = () => {
		const data = { name, value };
		(async () => {
			console.log(data);
			const rawResponse = await fetch(
				`${API_URL}/user/income/edit/${userid}/${incomeID}`,
				{
					method: "PUT",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			console.log(JSON.stringify(rawResponse));
		})();
	};

	const submitEditedExpense = () => {
		const data = { name, value };
		(async () => {
			console.log(data);
			const rawResponse = await fetch(
				`${API_URL}/user/expense/edit/${userid}/${expenseID}`,
				{
					method: "PUT",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			console.log(JSON.stringify(rawResponse));
		})();
	};

	// getting the balance
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
				const rawIncomeData = await fetch(`${API_URL}/user/income/${userid}`);
				const incomeArray = await rawIncomeData.json();
				const rawExpenseData = await fetch(`${API_URL}/user/expense/${userid}`);
				const expenseArray = await rawExpenseData.json();
				setIncome(incomeArray);
				setExpense(expenseArray);
				getBalance(incomeArray, expenseArray);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	const userid = "1";
	return (
		<>
			<h1>Welcome {userName}</h1>
			<TableContainer>
				<Table
					sx={{
						width: 500,
						border: "2px solid black",
					}}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow
							sx={{
								borderBottom: "2px solid black",
								"& td": {
									fontSize: "30px",
									fontFamily: "Monospace",
									fontWeight: "bold",
									backgroundColor: "#32CD32",
								},
							}}
						>
							<TableCell component="td">Income</TableCell>
							<TableCell component="td"></TableCell>{" "}
							{/* this empty cell is for css only */}
							<TableCell component="td"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{income.map((obj) => {
							return (
								<TableRow
									key={obj.id}
									sx={{
										borderBottom: "1px solid black",
										backgroundColor: "#90EE90",
										"& th": {
											border: 0,
											fontSize: "20px",
										},
									}}
								>
									<TableCell component="th" scope="row">
										{obj.name}
									</TableCell>
									<TableCell component="th" scope="row">
										{obj.value}
									</TableCell>
									<EditIcon
										fontSize="large"
										onClick={() => {
											setIncomeID(obj.id);
											handleEditIncome();
										}}
									/>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<Button
					style={{
						borderRadius: 35,
						backgroundColor: "rgb(33, 114, 227)",
						color: "white",
						margin: "5px",
					}}
					onClick={handleOpenIncome}
				>
					Add Income
				</Button>
				<Modal
					open={openIncome}
					onClose={handleCloseIncome}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box component="form" sx={style} noValidate autoComplete="off">
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={0.5}
						>
							<TextField
								required
								id="incomeName"
								label="income name"
								value={name}
								onChange={inputName}
							/>
							<TextField
								required
								id="incomeValue"
								label="value"
								value={value}
								onChange={inputValue}
							/>
							<Button
								onClick={() => {
									submitIncome();
									window.location.reload();
								}}
								variant="outlined"
							>
								Submit
							</Button>
							<Button
								onClick={() => {
									handleCloseIncome();
								}}
								variant="outlined"
							>
								Close
							</Button>
						</Stack>
					</Box>
				</Modal>
				<br />
				<br />
				<Table
					sx={{ width: 500, borderBottom: "2px solid black" }}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow
							sx={{
								border: "2px solid black",
								"& td": {
									fontSize: "30px",
									fontFamily: "Monospace",
									fontWeight: "bold",
									backgroundColor: "#D2042D",
								},
							}}
						>
							<TableCell component="td">Expense</TableCell>
							<TableCell component="td"></TableCell>
							<TableCell component="td"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{expense.map((obj) => {
							return (
								<TableRow
									key={obj.id}
									sx={{
										borderBottom: "1px solid black",
										backgroundColor: "#E34234",
										"& th": {
											border: 0,
											fontSize: "20px",
										},
									}}
								>
									<TableCell component="th" scope="row">
										{obj.name}
									</TableCell>
									<TableCell component="th" scope="row">
										{obj.value}
									</TableCell>
									<EditIcon
										fontSize="large"
										onClick={() => {
											setExpenseID(obj.id);
											handleEditExpense();
										}}
									/>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<Button
					style={{
						borderRadius: 35,
						backgroundColor: "rgb(33, 114, 227)",
						color: "white",
						margin: "5px",
					}}
					onClick={handleOpenExpense}
				>
					Add Expense
				</Button>
				<Modal
					open={openExpense}
					onClose={handleCloseExpense}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box component="form" sx={style} noValidate autoComplete="off">
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="center"
							spacing={0.5}
						>
							<TextField
								required
								id="expenseName"
								label="Expense Name"
								value={name}
								onChange={inputName}
							/>
							<TextField
								required
								id="expenseValue"
								label="value"
								value={value}
								onChange={inputValue}
							/>
							<Button
								onClick={() => {
									submitExpense();
									window.location.reload();
								}}
								variant="outlined"
							>
								Submit
							</Button>
							<Button
								onClick={() => {
									handleCloseExpense();
								}}
								variant="outlined"
							>
								Close
							</Button>
						</Stack>
					</Box>
				</Modal>
			</TableContainer>
			<div className="balance">
				<h4>Cash remaining:</h4>
				<p>{balance}</p>
			</div>
			{/* This modal is for edit income */}
			<Modal
				open={editIncome}
				onClose={handleCloseIncomeEdit}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box component="form" sx={style} noValidate autoComplete="off">
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={0.5}
					>
						<TextField
							required
							id="incomeName"
							label="income name"
							value={name}
							onChange={inputName}
						/>
						<TextField
							required
							id="incomeValue"
							label="value"
							value={value}
							onChange={inputValue}
						/>
						<Button
							onClick={() => {
								submitEditedIncome();
								window.location.reload();
							}}
							variant="outlined"
						>
							Submit
						</Button>
						<Button
							onClick={() => {
								handleCloseIncomeEdit();
							}}
							variant="outlined"
						>
							Close
						</Button>
					</Stack>
				</Box>
			</Modal>
			{/* This modal is for edit expense */}
			<Modal
				open={editExpense}
				onClose={handleCloseExpenseEdit}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box component="form" sx={style} noValidate autoComplete="off">
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={0.5}
					>
						<TextField
							required
							id="expenseName"
							label="Expense Name"
							value={name}
							onChange={inputName}
						/>
						<TextField
							required
							id="expenseValue"
							label="value"
							value={value}
							onChange={inputValue}
						/>
						<Button
							onClick={() => {
								submitEditedExpense();
								window.location.reload();
							}}
							variant="outlined"
						>
							Submit
						</Button>
						<Button
							onClick={() => {
								handleCloseExpenseEdit();
							}}
							variant="outlined"
						>
							Close
						</Button>
					</Stack>
				</Box>
			</Modal>
		</>
	);
}
