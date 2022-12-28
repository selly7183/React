import "./App.css";

function AppJSX() {
	const list = ["우유", "딸기", "사과"];
	return (
		<>
			<h1>Hello</h1>
			<ul>
				{list.map((item) => (
					<li>{item}</li>
				))}
			</ul>
		</>
	);
}

export default AppJSX;
