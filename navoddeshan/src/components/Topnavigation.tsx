import React, { useState } from "react";
import "../css/topnavigation.css";

const Topnavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="glass-navbar">
      <div className="navbar-logo">Navod Deshan</div>
      <button
        className="navbar-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        &#9776;
      </button>
      <ul className={`navbar-links${menuOpen ? " active" : ""}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Topnavigation;