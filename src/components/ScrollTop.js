import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		// "document.documentElement.scrollTo" is the modern version of "window.scrollTo"
		// and works better for cross-browser compatibility.
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth", // Optional: for a smooth scroll effect
		});
	}, [pathname]); // Re-run effect whenever the pathname changes
}

export default useScrollToTop;
