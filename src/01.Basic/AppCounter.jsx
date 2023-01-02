import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
	const [count, setCount] = useState(0);
	const handleClick = () => setCount((prev) => prev + 1);
	return (
		<>
			<div className="total">
				Total Count : {count} {count > 10 ? "🙉" : "🙈"}
			</div>
			<Counter total={count} onClick={handleClick} />
			<Counter total={count} onClick={handleClick} />
		</>
	);
}
