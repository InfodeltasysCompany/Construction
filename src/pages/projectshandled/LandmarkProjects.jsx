import React, { useState, useEffect } from "react";
import "./LandmarkProjects.css";
import dravyavatiImg from "../../assets/1.png";
import nazrulImg from "../../assets/3.png";

const projects = [
  { title: "Dravyavati River Rejuvenation", location: "Jaipur", image: dravyavatiImg },
  { title: "Nazrul Tirtha", location: "Kolkata", image: nazrulImg },
  { title: "Ganga Corridor Project", location: "Varanasi", image: dravyavatiImg },
  { title: "Metro Expansion", location: "Delhi", image: nazrulImg },
  { title: "Smart City Development", location: "Indore", image: dravyavatiImg },
];

const LandmarkProjects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="landmark-section" aria-label="Landmark Projects">
      <div className="landmark-heading">
        <h2>
          <span className="highlight">Land</span>mark <span className="highlight">Projects</span>
        </h2>
        <p>Proud contributors to iconic structures</p>
        <span className="desc">
          We are preferred cement suppliers for contractors, engineers, and architects, contributing to landmark projects across India.
        </span>
        <div className="controls">
          <button onClick={prevSlide} aria-label="Previous project">&#10094;</button>
          <button onClick={nextSlide} aria-label="Next project">&#10095;</button>
          <button className="view-all">View All</button>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {projects.map((project, idx) => (
            <article className="carousel-item" key={idx}>
              <img src={project.image} alt={project.title} />
              <div className="card-overlay">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandmarkProjects;
