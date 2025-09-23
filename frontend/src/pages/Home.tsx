import React from "react";
import { useNavigate } from "react-router-dom";
import Topnavigation from "../components/Topnavigation";
import '../css/home.css';
import profileImg from '../assets/profile.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
          <h1 className="home-title">Navod Deshan Wickramaarachchi</h1>
          <h2 className="home-subtitle">
            Software Engineer | Web Developer | Tech Enthusiast
          </h2>
          <p className="home-desc">
            Skilled in full-stack development, IoT integrations, and real-time data processing. Experienced with Node.js, React Native (TypeScript), MongoDB, and Firebase. Strong background in cloud deployment, API development, and database management. Proficient in Python for machine learning and data analytics. Familiar with DevOps practices, CI/CD pipelines, and containerization. Enthusiastic about building scalable, efficient, and user-focused software solutions.
          </p>
          <div className="home-buttons">
            <button className="home-btn" onClick={() => navigate("/projects")}>View Projects</button>
            <button className="home-btn secondary" onClick={() => navigate("/contacts")}>Contact Me</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;