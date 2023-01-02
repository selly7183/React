import React, { useState } from "react";
import AddTodoList from "./AddTodoList/AddTodoList";
import "./AppTodoList.css";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "acitve", "completed"];
export default function App() {
	const [filter, setFilter] = useState(filters[0]);
	return (
		<DarkModeProvider>
			<Header filters={filters} filter={filter} onFilterChange={setFilter} />
			<AddTodoList filter={filter} />
		</DarkModeProvider>
	);
}
