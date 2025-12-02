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
	{ name: "RESFull API", level: 95, icon: <FaProjectDiagram /> },
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
				// On small/mobile viewports 50% visibility can be hard to reach.
				// Use a smaller threshold and a small negative rootMargin so the
				// animation triggers earlier when the section enters the viewport.
				threshold: 0.15,
				rootMargin: "0px 0px -10% 0px",
			}
		);

		const skillsSection = document.getElementById("skills");
		let onScrollListener;
		if (skillsSection) {
			observer.observe(skillsSection);

			// Mobile / small viewports can behave differently. Add a small
			// fallback so the animation still triggers even if IntersectionObserver
			// doesn't fire reliably on some devices/browsers.
			if (window.innerWidth <= 768) {
				const rect = skillsSection.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					// Already mostly visible — trigger immediately
					setAnimateBars(true);
					observer.disconnect();
				} else {
					// Otherwise set a lightweight scroll listener to detect
					// when the section comes into view and trigger animation.
					onScrollListener = () => {
						const r = skillsSection.getBoundingClientRect();
						if (r.top < window.innerHeight * 0.9) {
							setAnimateBars(true);
							window.removeEventListener("scroll", onScrollListener);
							observer.disconnect();
						}
					};
					window.addEventListener("scroll", onScrollListener, {
						passive: true,
					});
				}
			}
		}

		// Disconnect the observer when the component unmounts / cleanup and
		// remove the scroll listener if we attached one.
		return () => {
			observer.disconnect();
			if (onScrollListener)
				window.removeEventListener("scroll", onScrollListener);
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
							>
								{/* Move level badge into the filled bar so it visually sits at the end of the fill */}
								<span className="skill-level">{skill.level}%</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
