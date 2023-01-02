import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import Addtodo from "../Addtodo/Addtodo";

export default function AddTodoList({ filter }) {
	const [todos, setTodos] = useState(readTodosFromLocalStorage());

	const handleAdd = (todo) => setTodos([...todos, todo]);
	const handleUpdate = (updated) =>
		setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
	const handleDelete = (deleted) =>
		setTodos(todos.filter((item) => item.id !== deleted.id));

	const filtered = getFilteredItems(todos, filter);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<section>
			<h3>TodoList</h3>
			<ul>
				{filtered.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						onUpdate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</ul>
			<Addtodo onAdd={handleAdd} />
		</section>
	);
}

function readTodosFromLocalStorage() {
	const todos = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
	if (filter === "all") {
		return todos;
	}
	return todos.filter((todo) => todo.status === filter);
}
