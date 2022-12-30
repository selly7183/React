import React, { useState } from "react";
import "./AppTodoList.css";
import Addtodo from "./components/Addtodo";
import Header from "./components/Header";

export default function AppTodoList() {
	const [todos, setTodo] = useState([
		{ id: "123", text: "우유", status: "active" },
		{ id: "124", text: "사과", status: "active" },
	]);

	const handleAdd = (todo) => setTodo([...todos, todo]);

	return (
		<div>
			<Header />
			<section>
				<h3>TodoList</h3>
				<ul>
					{todos.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
				<Addtodo onAdd={handleAdd} />
			</section>
		</div>
	);
}
