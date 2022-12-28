import React, { useState } from "react";

export default function AppMentors() {
	const [person, setPerson] = useState({
		name: "소연",
		title: "개발자",
		mentors: [
			{
				name: "앨리",
				title: "시니어 개발자",
			},
			{
				name: "제임스",
				title: "시니어 개발자",
			},
		],
	});
	return (
		<div>
			<h1>
				{person.name}이는 {person.title}
			</h1>
			<p>{person.name}이의 멘토는</p>
			<ul>
				{person.mentors.map((mentor, index) => (
					<li key={index}>
						{mentor.name} ({mentor.title})
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
					const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

					setPerson((person) => ({
						...person,
						mentors: person.mentors.map((mentor) => {
							if (mentor.name === prev) {
								return { ...mentor, name: current };
							}
							return mentor;
						}),
					}));
				}}
			>
				멘토의 이름을 바꾸기
			</button>
		</div>
	);
}
