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
    link: "https://linkedin.com/in/navoddeshan",
    icon: "🔗",
  },
  {
    type: "GitHub",
    value: "github.com/navoddeshan",
    link: "https://github.com/navoddeshan",
    icon: "🐙",
  },
  {
    type: "Facebook",
    value: "facebook.com/navoddeshan",
    link: "https://facebook.com/navoddeshan",
    icon: "📘",
  },
  {
    type: "Instagram",
    value: "instagram.com/navoddeshan",
    link: "https://instagram.com/navoddeshan",
    icon: "📸",
  },
  {
    type: "WhatsApp",
    value: "+94 77 123 4567",
    link: "https://wa.me/94771234567",
    icon: "💬",
  },
];

const Contacts: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <span className="contact-icon" role="img" aria-label={method.type + " icon"}>
              {method.icon}
            </span>
            <div>
              <h3>{method.type}</h3>
              <p className="contact-value">{method.value}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="feedback-form-section">
        <h2>Send Feedback</h2>
        {submitted ? (
          <div className="feedback-success">Thank you for your feedback!</div>
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
    </section>
  );
};

export default Contacts;