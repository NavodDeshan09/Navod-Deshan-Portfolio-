import React from "react";
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
  // Add more contact methods as needed
];

const Contacts: React.FC = () => (
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
  </section>
);

export default Contacts;