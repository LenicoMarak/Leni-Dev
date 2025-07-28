import React, { useEffect, useState } from "react";
import {
	FaReact,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaJava,
	FaAndroid,
	FaGithub,
	FaMicrosoft,
	FaProjectDiagram,
} from "react-icons/fa";
import "./skills.css";
import ISpringBoot from "../icons/ISpringBoot";
import IFirebase from "../icons/IFirebase";
import { SiGit, SiKotlin, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
const skills = [
	{ name: "React", level: 90, icon: <FaReact color="#157ec8" /> },
	{ name: "JavaScript", level: 85, icon: <FaJs color="orange" /> },
	{ name: "HTML", level: 95, icon: <FaHtml5 color="c2613a" /> },
	{ name: "CSS", level: 80, icon: <FaCss3Alt color="#157ec8" /> },
	{ name: "Java", level: 90, icon: <FaJava color="157ec8" /> },
	{ name: "SpringBoot", level: 70, icon: <ISpringBoot size="70" /> },
	{ name: "Android", level: 90, icon: <FaAndroid color="green" /> },
	{ name: "Firebase", level: 75, icon: <IFirebase size={60} /> },
	{ name: "Git", level: 80, icon: <SiGit color="#c2613a" /> },
	{ name: "GitHub", level: 85, icon: <FaGithub /> },
	{ name: "RESFull API",level:95,icon:<FaProjectDiagram/>},
	{ name: "Kotline", level: 60, icon: <SiKotlin color="violet" /> },
	{ name: "MongoDb", level: 50, icon: <SiMongodb color="green" /> },
	{ name: "MySql", level: 80, icon: <DiMysql color="orange" /> },
	{ name: "Microsoft Office", level: 60, icon: <FaMicrosoft /> },
];
const Skills = () => {
	const [animateBars, setAnimateBars] = useState(false);

	// Trigger animation when component mounts or becomes visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimateBars(true);
						observer.disconnect(); // Stop observing once it's visible
					}
				});
			},
			{
				threshold: 0.5, // Trigger when 50% of the section is visible
			}
		);

		const skillsSection = document.getElementById("skills");
		if (skillsSection) {
			observer.observe(skillsSection);
		}

		return () => {
			if (skillsSection) {
				observer.unobserve(skillsSection);
			}
		};
	}, []);

	return (
		<section id="skills" className="skills-section">
			<h2>My Skills</h2>
			<div className="skills-grid">
				{skills.map((skill) => (
					<div key={skill.name} className="skill-card">
						<div className="skill-icon">{skill.icon}</div>
						<h3 className="skill-name">{skill.name}</h3>
						<div className="skill-bar-container">
							<div
								className={`skill-bar ${animateBars ? "animate" : ""}`}
								style={{ width: animateBars ? `${skill.level}%` : "0%" }} // Animate width based on state
							></div>
							<span className="skill-level">{skill.level}%</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
