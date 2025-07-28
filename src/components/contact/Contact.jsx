import React, { useState } from "react";
import "./Contact.css"; // We'll create this CSS file
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		// ** IMPORTANT: Replace 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' with your actual key **
		// Get this from web3forms.com after entering your email.
		const WEB3FORMS_ACCESS_KEY = "45f0f78a-0964-4d29-a5a8-c283c9f3df41"; // <--- !!! Replace this with your actual key !!!

		const formEndpoint = "https://api.web3forms.com/submit";

		try {
			const response = await fetch(formEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json", // Good practice to include
				},
				// *** IMPORTANT: Include the access_key directly in the body ***
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					...formData, // Spread your existing form data
					// Optional: You can add other hidden fields here if needed by Web3Forms
					redirect: "http://localhost:5173/thank-you",
					botcheck: false, // if you want to use the honeypot
				}),
			});

			const result = await response.json(); // Parse the response to check for success/error messages

			if (result.success) {
				// Web3Forms sends a 'success' boolean
				setStatus("Message sent successfully! 🎉");
				setFormData({ name: "", email: "", message: "" }); // Clear form
			} else {
				console.error("Web3Forms error:", result);
				setStatus(
					result.message || "Oops! There was an error sending your message. 😔"
				);
			}
		} catch (error) {
			console.error("Submission error:", error);
			setStatus("Something went wrong. Please try again later. 🛠️");
		}
	};

	return (
		<section id="contacts" className="contact-section">
			<h2>Get In Touch</h2>
			<p className="contact-intro">
				Have a question or want to work together? Feel free to reach out!
			</p>

			<div className="contact-content">
				<div className="contact-form-container">
					<h3>Send a Message</h3>
					<form onSubmit={handleSubmit} className="contact-form">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
						</div>
						<button
							type="submit"
							className="submit-btn"
							disabled={status === "Sending..."}
						>
							{status === "Sending..." ? "Sending..." : "Send Message"}
						</button>
						{status && <p className="form-status">{status}</p>}
					</form>
				</div>

				<div className="contact-info-container">
					<h3>Contact Details</h3>
					<p>You can also reach me directly:</p>
					<ul className="contact-details-list">
						<li>
							<FaEnvelope className="contact-icon" />
							<a href="mailto:lenicomk4@gmail.com">lenicomk4@gmail.com</a>{" "}
							{/* Replace with your email */}
						</li>
						<li>
							<FaPhoneAlt className="contact-icon" />
							<a href="tel:+911234567890">+91 7099780305</a>{" "}
							{/* Replace with your phone number if desired */}
						</li>
					</ul>

					<h3>Find Me On</h3>
					<ul className="social-links-list">
						<li>
							<a
								href="https://www.linkedin.com/in/lenico-marak"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="social-icon" /> LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://github.com/LenicoMarak"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="social-icon " color="black"/> GitHub
							</a>
						</li>
						{/* Add more social links as needed (e.g., Twitter, personal website) */}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Contact;
