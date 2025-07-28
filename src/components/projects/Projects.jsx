import React from "react";
import "./projects.css";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import projectData from "./projectData";
const Projects = () => {
	const navigate = useNavigate();
	const handleClick = (data) => {
		navigate("/projectView", { state: { data } });
	};
	return (
		<section id="projects">
			<h2>Projects I have done</h2>
			<div className="cardContainer">
				{projectData.map((projectInfo) => (
					<Card data={projectInfo} handleClick={(data) => handleClick(data)} />
				))}
			</div>
		</section>
	);
};
export default Projects;
