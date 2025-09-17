import React from "react";
import Topnavigation from "../components/Topnavigation";
import '../css/home.css';
import profileImg from '../assets/profile.jpg'; // <-- Import the image

const Home: React.FC = () => {
  return (
    <>
      <Topnavigation />
      <main className="home-main">
        <section className="home-section">
          <img
            src={profileImg}
            alt="Profile"
            className="home-profile-img"
            onError={e => {
              (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Navod+Deshan&background=60a5fa&color=fff&size=128";
            }}
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
    </>
  );
};

export default Home;