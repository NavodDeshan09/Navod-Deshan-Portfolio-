import React from "react";
import Topnavigation from "../components/Topnavigation";
import "../css/projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TypeScript, featuring responsive design and smooth animations.",
    link: "https://github.com/NavodDeshan09/Navod-Deshan-Portfolio-",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    title: "Alwon ERP System",
    description: "ERP system for small to medium enterprises to manage inventory, sales, and customer relationships.",
    link: "https://github.com/minduleeWick/Alwon",
    tags: ["Node.js", "Typescript", "MongoDB", "Render", "Vercel"],
  },
  {
    title: "Karate e - Learning application ",
    description: "A mobile app for learning karate techniques, integrating machine learning for motion analysis.",
    link: "https://github.com/NavodDeshan/Smart-Karate-E-Learning-System-",
    tags: ["ML", "React Native", "Firebase", "IOT"],
  },
   {
    title: "Step counter IOT device with real time data processing",
    description: "An IoT device that counts steps and sends real-time data to a web dashboard using MQTT and Node-RED.",
    tags: ["MQTT", "Node red", "Arduino"],
  },
 {
    title: "Hiru Capital Investment Management System",
    description: "A full-stack investment management platform with user authentication, portfolio tracking, and analytics.",
    link: "https://github.com/NavodDeshan/Hiru-Captial-Investment",
    tags: ["React", "Express", "Node.js", "MongoDB", "Netlify", "Render"],
  },
  {
    title: "Security attendance management system",
    description: "A web application to manage and track attendance of security personnel using RFID technology.",
    tags: [".Net core", "Entity frame work", "Bitbucket"],
  },
];

const Projects: React.FC = () => (
  <>
    <Topnavigation />
    <main className="projects-main">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Projects;