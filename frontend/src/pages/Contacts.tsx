import React, { useState } from "react";
import "../css/contacts.css";

const contactMethods = [
	{
		type: "Email",
		value: "navoddeshan@gmail.com",
		link: "mailto:navoddeshan@gmail.com",
		icon: "✉️",
	},
	{
		type: "LinkedIn",
		value: "linkedin.com/in/navoddeshan",
		link: "https://www.linkedin.com/in/navod-deshan-wickramaarachchi-b74666215/",
		icon: "🔗",
	},
	{
		type: "GitHub",
		value: "github.com/navoddeshan",
		link: "https://github.com/NavodDeshan",
		icon: "🐙",
	},
	{
		type: "Facebook",
		value: "facebook.com/navoddeshan",
		link: "https://www.facebook.com/navod.deshan.39",
		icon: "📘",
	},
	{
		type: "Instagram",
		value: "instagram.com/navoddeshan",
		link: "https://www.instagram.com/i__shaggy_/",
		icon: "📸",
	},
	{
		type: "WhatsApp",
		value: "+94 70 433 1921",
		link: "https://wa.me/94704331921",
		icon: "💬",
	},
];

const Contacts: React.FC = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// You can integrate with an API or email service here
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<section className="contacts-container">
			<h1>Contact Me</h1>
			<div className="contacts-list">
				{contactMethods.map((method) => (
					<a
						className="contact-card"
						href={method.link}
						target="_blank"
						rel="noopener noreferrer"
						key={method.type}
					>
						<span
							className="contact-icon"
							role="img"
							aria-label={method.type + " icon"}
						>
							{method.icon}
						</span>
						<div>
							<h3>{method.type}</h3>
							<p className="contact-value">{method.value}</p>
						</div>
					</a>
				))}
			</div>
			<div className="contacts-flex-row">
				<div className="feedback-form-section">
					<h2>Send Feedback</h2>
					{submitted ? (
						<div className="feedback-success">
							Thank you for your feedback!
						</div>
					) : (
						<form className="feedback-form" onSubmit={handleSubmit}>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								value={form.name}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								value={form.email}
								onChange={handleChange}
								required
							/>
							<textarea
								name="message"
								placeholder="Your Message"
								value={form.message}
								onChange={handleChange}
								rows={5}
								required
							/>
							<button type="submit">Send</button>
						</form>
					)}
				</div>
				<div className="contacts-map-section">
					<h2>My Location</h2>
					<div className="contacts-map-embed">
						<iframe
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.72637298244!2d79.773993!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1694950000000!5m2!1sen!2slk"
							width="100%"
							height="300"
							style={{ border: 0, borderRadius: "12px" }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;