import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import DarkModeToggle from "./DarkModeToogle";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("home");
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const tabItemRef = useRef({});
	const tabBarRef = useRef(null);

	const tabs = [
		{ name: "Home", id: "home" },
		{ name: "Projects", id: "projects" },
		{ name: "Skills", id: "skills" },
		{ name: "Contacts", id: "contacts" },
	];
	const updateIndicator = useCallback(() => {
		const activeTabElement = tabItemRef.current[activeTab];
		const tabBarElement = tabBarRef.current;
		if (activeTabElement && tabBarElement) {
			const tabRect = activeTabElement.getBoundingClientRect();
			const tabBarRect = tabBarElement.getBoundingClientRect();
			const left = tabRect.left - tabBarRect.left;
			const width = tabRect.width;
			setIndicatorStyle({
				left: `${left}px`,
				width: `${width}px`,
			});
		}
	}, [activeTab]);
	useEffect(() => {
		updateIndicator();
		window.addEventListener("resize", updateIndicator);
		return () => window.removeEventListener("resize", updateIndicator);
	}, [activeTab, updateIndicator]);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			updateIndicator();
		}, 50);
		return () => clearTimeout(timeOutId);
	}, [updateIndicator]);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};
	const handleSection = (id) => {
		const element = document.getElementById(id);
		setActiveTab(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};
	return (
		<nav className="navbar">
			<h1 className="nav-title">Samikha</h1>
			<ul className={`nav-links ${menuOpen ? "active" : ""}`} ref={tabBarRef}>
				{tabs.map((tab) => (
					<li key={tab.id} ref={(el) => (tabItemRef.current[tab.id] = el)}>
						<NavLink
							onClick={() => {
								closeMenu();
								handleSection(tab.id);
							}}
							className={({ isActive }) =>
								`nav-link ${isActive ? "active" : ""}`
							}
						>
							{tab.name}
						</NavLink>
					</li>
				))}
				<div className="tab-indicator" style={indicatorStyle}></div>
			</ul>
			<div className="link-active"></div>
			<div className="nav-actions">
				<DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
				<div className="menu-icon" onClick={toggleMenu}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
