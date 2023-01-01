import React, { useState } from "react";
import AddTodoList from "./AddTodoList/AddTodoList";
import "./AppTodoList.css";
import Header from "./components/Header";

const filters = ["all", "acitve", "completed"];
export default function App() {
	const [filter, setFilter] = useState(filters[0]);
	return (
		<div>
			<Header
				filters={filters}
				filter={filter}
				onFilterChange={(filter) => setFilter(filter)}
			/>
			<AddTodoList filter={filter} />
		</div>
	);
}
