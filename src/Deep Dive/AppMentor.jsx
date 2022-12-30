import React, { useState } from "react";

export default function AppMentor(props) {
	const [person, setPerson] = useState({
		name: "소연",
		title: "개발자",
		mentor: {
			name: "앨리",
			title: "시니어 개발자",
		},
	});

	return (
		<div>
			<h1>
				{person.name}이는 {person.title}
			</h1>
			<p>
				{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
			</p>
			<button
				onClick={() => {
					const name = prompt(`what's your mentor's name?`);
					setPerson((person) => ({
						...person,
						mentor: { ...person.mentor, name },
					}));
				}}
			>
				멘토 이름 바꾸기
			</button>
			<button
				onClick={() => {
					const title = prompt(`what's your mentor's title?`);
					setPerson((person) => ({
						...person,
						mentor: { ...person.mentor, title },
					}));
				}}
			>
				멘토 타이틀 바꾸기
			</button>
		</div>
	);
}
