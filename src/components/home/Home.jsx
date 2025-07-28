// src/components/Home.jsx
import React from "react";
import "./Home.css";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

const Home = () => {
	return (
		<>
			<div id="home" className="home-container">
				<div className="home-content">
					<img
						src="src\assets\propic.jpg"
						alt="Profile"
						className="profile-pic"
					/>
					<h1>Hello, I'm Lenico Marak</h1>
					<h2>Passionate Software Developer</h2>
					<p>
						I am a dedicated and enthusiastic developer with a strong interest
						in mobile and web technologies. I enjoy turning ideas into
						real-world, user-friendly experiences. Currently exploring
						opportunities to contribute to impactful projects and further expand
						my expertise.
					</p>
					<a href="public/myresume.pdf" download="leni-resume.pdf">
						<button className="bttn">Download Resume</button>
					</a>
					<a href="public/myresume.pdf">
						<button className="bttn">View Resume</button>
					</a>
				</div>
			</div>
			<Projects />
			<Skills />
			<Contact />
		</>
	);
};

export default Home;
