import React, { useState } from "react";

export default function Counter({ total, onClick }) {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount((prev) => prev + 1); // 여러번 업데이트 해야하거나, 이전 상태값을 토대로 더하거나 뺄 때 콜백 함수 형태로 set 하는게 안전함.
		onClick();
	};

	return (
		<div className="counter">
			<span className="number">
				{count} / {total}
			</span>
			<button className="button" onClick={handleClick}>
				Add +
			</button>
		</div>
	);
}
