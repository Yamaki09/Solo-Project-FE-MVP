import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function DataChart({ chartData }) {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Your monthly data",
			},
		},
	};
	return <Bar options={options} data={chartData} />;
}
