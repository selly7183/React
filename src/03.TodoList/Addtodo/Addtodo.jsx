import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Addtodo({ onAdd }) {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length === 0) {
			return;
		}
		onAdd({ id: uuidv4(), text, status: "active" });
		setText("");
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={handleChange}
				placeholder="Add todo"
			/>
			<button>Add</button>
		</form>
	);
}
