import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMove = (e) => {
		setPosition({ x: e.clientX, y: e.clientY });
		// 수평 이동
		//setPosition((prev) => ({ x: e.clientX, y: prev.y }));
	};
	return (
		<>
			<div className="container" onPointerMove={handleMove}>
				<div
					className="pointer"
					style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
				></div>
			</div>
		</>
	);
}
