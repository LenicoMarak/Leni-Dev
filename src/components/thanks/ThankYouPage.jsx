import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa"; // Re-use icons
import "./ThankYouPage.css"; // We'll create this CSS file
import { FiInstagram } from "react-icons/fi";

const ThankYouPage = () => {
	useEffect(() => {
		// Optional: Scroll to top when component mounts
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="thank-you-page-container">
			<header className="thank-you-header">
				<h1>🎉 Thank You! 🎉</h1>
				<p className="sub-heading">Your message has been successfully sent.</p>
			</header>

			<main className="thank-you-content">
				<p>
					I appreciate you reaching out! I'll review your message and get back
					to you as soon as possible, typically within{" "}
					<strong>1-2 business days</strong>.
				</p>

				<div className="next-steps">
					<h2>What's Next?</h2>
					<p>
						While you wait, feel free to explore more of my work or connect with
						me on social media:
					</p>

					<div className="cta-buttons">
						<Link to="/" className="btn secondary-btn">
							Return to Homepage
						</Link>
					</div>

					<div className="social-connect">
						<h3>Connect With Me</h3>
						<ul className="social-links-list">
							<li>
								<a
									href="https://www.linkedin.com/in/lenico-marak" // Replace with your LinkedIn
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaLinkedin className="social-icon" /> LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://github.com/LenicoMarak" // Replace with your GitHub
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub className="social-icon" /> GitHub
								</a>
							</li>
							<li>
								<a href="mailto:lenicomk4@gmail.com">
									{" "}
									{/* Replace with your email */}
									<FaEnvelope className="social-icon" /> Email Me Directly
								</a>
							</li>
							<li>
								<a
									style={{
										display: "flex",
										gap: "5px",
									}}
									href="https://instagram.com/lenisamikha"
								>
									<FiInstagram size={30} />
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>

				<footer className="thank-you-footer">
					<p>Looking forward to connecting!</p>
				</footer>
			</main>
		</div>
	);
};

export default ThankYouPage;
