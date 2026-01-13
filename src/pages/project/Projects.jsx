import React from "react";
import "./Projects.css";

import { ImagesApp } from "../../assets/ImagesApp";

const projects = [
  {
    title: "Residential Home",
    image: ImagesApp.Project1Img,
  },
  {
    title: "Commercial Complex, Varanasi",
    image: ImagesApp.Project2Img,
  },
  {
    title: "Residential Building, Kanpur",
    image: ImagesApp.Project3Img,
  },
  {
    title: "Aryan School Campus, Mughalsarai",
    image: ImagesApp.Project4Img,
  },
  {
    title: "Temple",
    image: ImagesApp.Project5Img,
  },
  {
    title: "Kamla Residency",
    image: ImagesApp.Project6Img,
  },
  {
    title: "Construction of New PSS Switchyard, Varanasi",
    image: ImagesApp.Project7Img,
  },
  {
    title: "Waiting Hall & Rest Room, Varanasi",
    image: ImagesApp.Project8Img,
  },
  {
    title: "Construction of Hotel Building, Varanasi",
    image: ImagesApp.Project9Img,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <div className="header-left">
          <h2>Our Projects</h2>
          <p>
            No project is too grand. Whether residential, commercial, or hospitality,
            our design company delivers unparalleled interior solutions.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
