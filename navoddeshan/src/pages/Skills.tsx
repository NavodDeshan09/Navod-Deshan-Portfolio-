import React from "react";
import "../css/skills.css";

const skills = [
	{
		name: "JavaScript",
		icon: "🟨",
		description: "Experienced in ES6+, React, and Node.js.",
	},
	{
		name: "TypeScript",
		icon: "🔷",
		description: "Strongly typed JavaScript for scalable applications.",
	},
	{
		name: "React",
		icon: "⚛️",
		description: "Building interactive UIs with hooks and context.",
	},
	{
		name: "HTML & CSS",
		icon: "🌐",
		description: "Semantic markup and modern, responsive layouts.",
	},
	{
		name: "Git & GitHub",
		icon: "🐙",
		description: "Version control and collaboration best practices.",
	},
	{
		name: "Node.js",
		icon: "🟩",
		description: "Backend development with Express and REST APIs.",
	},
	{
		name: "MongoDB",
		icon: "🍃",
		description: "NoSQL database design and aggregation.",
	},
	{
		name: "Python",
		icon: "🐍",
		description: "Scripting, automation, and data analysis.",
	},
	{
		name: "Figma",
		icon: "🎨",
		description: "UI/UX prototyping and design collaboration.",
	},
	{
		name: "Docker",
		icon: "🐳",
		description: "Containerization and deployment workflows.",
	},
	{
		name: "Sass/SCSS",
		icon: "🎀",
		description: "Advanced CSS with variables and mixins.",
	},
	{
		name: "Jest",
		icon: "🧪",
		description: "Unit and integration testing for JavaScript apps.",
	},
	// Add more skills as needed
];

const Skills: React.FC = () => (
	<section className="skills-container">
		<h1>Skills</h1>
		<div className="skills-list">
			{skills.map((skill) => (
				<article
					className="skill-card"
					key={skill.name}
					aria-label={skill.name}
				>
					<span
						className="skill-icon"
						role="img"
						aria-label={skill.name + " icon"}
					>
						{skill.icon}
					</span>
					<h3>{skill.name}</h3>
					<p className="skill-description">{skill.description}</p>
				</article>
			))}
		</div>
	</section>
);

export default Skills;