import React from "react";

export default function AppWrap() {
	return (
		<>
			<Card>
				<p>hi</p>
			</Card>
			<Card>
				<h1>selly</h1>
			</Card>
		</>
	);
}

function Card({ children }) {
	return (
		<div
			style={{
				backgroundColor: "#000",
				borderRadius: "20px",
				color: "#fff",
				minHeight: "200px",
				minWidth: "200px",
				margin: "1rem",
				padding: "1rem",
				textAlign: "center",
			}}
		>
			{children}
		</div>
	);
}
