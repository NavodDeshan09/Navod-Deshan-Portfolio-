import React from "react";
import '../css/home.css';// Assuming you have a CSS file for styles

const Home: React.FC = () => {
  return (
    <main className="home-main">
      <section className="home-section">
        <img
          src="/images/profile.JPG"
          alt="Profile"
          className="home-profile-img"
        />
        <h1 className="home-title">Navod Deshan</h1>
        <h2 className="home-subtitle">
          Software Engineer | Web Developer | Tech Enthusiast
        </h2>
        <p className="home-desc">
          Welcome to my portfolio! I specialize in building modern web applications using React, TypeScript, and Node.js.
          Explore my projects, skills, and experience below.
        </p>
        <div className="home-buttons">
          <a href="#projects" className="home-btn">View Projects</a>
          <a href="#contact" className="home-btn secondary">Contact Me</a>
        </div>
      </section>
    </main>
  );
};

export default Home;