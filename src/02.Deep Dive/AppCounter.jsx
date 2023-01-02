import React, { useState } from "react";
import Toggle from "./components/Toggle";

export default function AppCounter() {
	const [toggle, setToggle] = useState(false);
	const handleClick = () => setToggle(!toggle);

	return (
		<>
			{toggle && <Toggle />}
			<button onClick={handleClick}>toggle</button>
		</>
	);
}
