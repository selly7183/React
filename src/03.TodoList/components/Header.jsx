import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header>
			<button onClick={toggleDarkMode}>
				{!darkMode && <p style={{ color: "blue" }}>Dark</p>}
				{darkMode && <p style={{ color: "red" }}>Light</p>}
			</button>
			<ul>
				{filters.map((value, index) => (
					<li key={index}>
						<button onClick={() => onFilterChange(value)}>{value}</button>
					</li>
				))}
			</ul>
		</header>
	);
}
