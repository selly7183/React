import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, status, text } = todo;
	const handleChagne = (e) => {
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};
	const handleDelete = () => onDelete(todo);
	return (
		<div>
			<li>
				<input
					type="checkbox"
					id={id}
					checked={status === "completed"}
					onChange={handleChagne}
				/>
				<label htmlFor={id}>{text}</label>
				<button onClick={handleDelete}>delete</button>
			</li>
		</div>
	);
}
