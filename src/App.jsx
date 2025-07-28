import "./App.css";
import Navbar from "./components/Navbar";
import {
	Routes,
	Route,
	ScrollRestoration,
	useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
import { useCallback, useEffect, useState } from "react";
import NoFound from "./components/NoFound";
import ProjectView from "./components/projects/ProjectView";
import ThankYouPage from "./components/thanks/ThankYouPage";
import useScrollToTop from "./components/ScrollTop";
import { FaArrowUp } from "react-icons/fa";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const { pathname } = useLocation();
	const pathRestrict = ["/projectView", "/thank-you", "/public/myresume.pdf"];
	const shouldShowNav = !pathRestrict.includes(pathname);
	const [showScrollTop, setScrollTop] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("dark-mode", darkMode);
	}, [darkMode]);
	useScrollToTop();

	const handleScroll = useCallback(() => {
		if (window.scrollY > 500) {
			setScrollTop(true);
		} else {
			setScrollTop(false);
		}
	}, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div className="mainContainer">
			{shouldShowNav && (
				<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NoFound />} />
				<Route path="/projectView" element={<ProjectView />} />
				<Route path="/thank-you" element={<ThankYouPage />} />
			</Routes>
			{showScrollTop && (
				<FaArrowUp
					title="Scroll to top"
					onClick={scrollTop}
					className="goTopIcon"
				/>
			)}
		</div>
	);
}

export default App;
