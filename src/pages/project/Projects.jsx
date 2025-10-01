import React from 'react';
import './Projects.css';

// Sample data (replace with your actual images)
const projects = [
  {
    title: '22 Carat Villa Palm Jumeirah',
    image: require('../../assets/1.png'),
  },
  {
    title: 'W Residences The Palm Jumeirah',
    image: require('../../assets/2.png'),
  },
  {
    title: 'Royal Atlantis Apartment',
    image: require('../../assets/3.png'),
  },
  {
    title: 'Bvlgari Residences Jumeirah Bay',
    image: require('../../assets/1.png'),
  },
  {
    title: 'Meydan Villas',
    image: require('../../assets/2.png'),
  },
  {
    title: 'Keturah Reserve at Meydan',
    image: require('../../assets/3.png'),
  },
  {
    title: 'Al Barari Villas',
    image: require('../../assets/2.png'),
  },
  {
    title: 'Sobha Hartland Luxury Villas & Apartment Dubai',
    image: require('../../assets/1.png'),
  },
  {
    title: 'Dubai Hills Luxury Villa',
    image: require('../../assets/3.png'),
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
