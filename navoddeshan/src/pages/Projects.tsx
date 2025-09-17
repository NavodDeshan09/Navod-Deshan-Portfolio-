import React from "react";
import Topnavigation from "../components/Topnavigation";
import "../css/projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TypeScript, featuring responsive design and smooth animations.",
    link: "https://github.com/your-github/portfolio",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    title: "IoT Smart Home",
    description: "A real-time IoT dashboard for smart home devices, using Node.js, MQTT, and MongoDB.",
    link: "https://github.com/your-github/iot-smart-home",
    tags: ["Node.js", "IoT", "MongoDB"],
  },
  {
    title: "Chat App",
    description: "A full-stack chat application with authentication, built using React, Express, and Socket.io.",
    link: "https://github.com/your-github/chat-app",
    tags: ["React", "Express", "Socket.io"],
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