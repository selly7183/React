import React, { useEffect, useState } from "react";
import Counter from "./Counter";

export default function Toggle() {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const handleClick = () => {
		setCount((prev) => prev + 1);
	};
	useEffect(() => {
		setLoading(true);
		setLoading(false);
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<>
			<h2>Total Count :{count}</h2>
			<Counter total={count} onClick={handleClick} />
			<Counter total={count} onClick={handleClick} />
		</>
	);
}
