import React, { useState } from "react";

export default function Counter({ total, onClick }) {
	const [counter, setCounter] = useState(0);
	const handleClick = () => {
		setCounter(counter + 1);
		onClick();
	};

	return (
		<div>
			<div>
				{counter} / {total}
			</div>
			<button onClick={handleClick}>Add+</button>
		</div>
	);
}
