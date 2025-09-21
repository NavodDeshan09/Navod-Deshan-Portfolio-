import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/topnavigation.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
   
   { to: "/skills", label: "Skills" },
   { to: "/contacts", label: "Contacts" },
];

const Topnavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trap focus inside menu when open (accessibility)
  useEffect(() => {
    if (!menuOpen || !navRef.current) return;
    const focusable = navRef.current.querySelectorAll<HTMLElement>("a");
    focusable[0]?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="glass-navbar" aria-label="Main navigation">
      <div className="navbar-logo">Navod Deshan</div>
      <button
        className="navbar-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "\u2715" : "\u2630"}
      </button>
      <ul
        id="main-nav"
        className={`navbar-links${menuOpen ? " active" : ""}`}
        ref={navRef}
      >
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={handleLinkClick}
              className={location.pathname === to ? "active" : ""}
              tabIndex={menuOpen || window.innerWidth > 700 ? 0 : -1}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Topnavigation;