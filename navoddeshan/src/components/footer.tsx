import React from "react";
import "../css/footer.css";

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <span>
        © {new Date().getFullYear()} Navod Deshan. All rights reserved.
      </span>
      <div className="footer-socials">
        <a href="https://github.com/NavodDeshan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <span role="img" aria-label="GitHub">🐙</span>
        </a>
        <a href="https://www.linkedin.com/in/navod-deshan-wickramaarachchi-b74666215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <span role="img" aria-label="LinkedIn">🔗</span>
        </a>
        <a href="https://www.facebook.com/navod.deshan.39" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <span role="img" aria-label="Facebook">📘</span>
        </a>
        <a href="https://www.instagram.com/i__shaggy_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <span role="img" aria-label="Instagram">📸</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;