// DarkModeToggle.jsx
import React from "react";
import "./nav.css";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
	return (
		<label className="toggle-switch">
			<input
				type="checkbox"
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<span className="slider">
				<span className="icon">{darkMode ? <FiMoon /> : <FiSun />}</span>
			</span>
		</label>
	);
};

export default DarkModeToggle;
