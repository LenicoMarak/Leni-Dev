// src/components/Home.jsx
import React from "react";
import "./Home.css";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import profilePic from "../../assets/propic.jpg";
import resume from "/public/myresume.pdf";
import backgroundImage from "../../assets/30350388_7629074.png";

const Home = () => {
	return (
		<>
			<div
				id="home"
				className="home-container"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="home-content">
					<img src={profilePic} alt="Profile" className="profile-pic" />
					<h1>Hello, I'm Lenico Marak</h1>
					<h2>Passionate Software Developer</h2>
					<p>
						I am a dedicated and enthusiastic developer with a strong interest
						in mobile and web technologies. I enjoy turning ideas into
						real-world, user-friendly experiences. Currently exploring
						opportunities to contribute to impactful projects and further expand
						my expertise.
					</p>
					<a href={resume} download="leni-resume.pdf">
						<button className="bttn">Download Resume</button>
					</a>
					<a href={resume}>
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
