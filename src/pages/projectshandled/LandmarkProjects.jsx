import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandmarkProjects.css";

import { ImagesApp } from "../../assets/ImagesApp";

const projects = [
  {
    title: "ARYAN International School",
    location: "Varanasi",
    image: ImagesApp.AryanImg,
  },
  {
    title: "HIMS Hospital",
    location: "Varanasi",
    image: ImagesApp.TramaImg,
  },
  {
    title: "Heritage IMS Hospital",
    location: "Varanasi",
    image: ImagesApp.HeritageImg,
  },
  {
    title: "Taj Hotel",
    location: "Varanasi",
    image: ImagesApp.TajImg,
  },
  {
    title: "Residential Home",
    location: "Lanka, Varanasi",
    image: ImagesApp.HomeImg,
  },
];

const LandmarkProjects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="landmark-section">
      {/* LEFT CONTENT */}
      <div className="landmark-heading">
        <h2>
          <span>Landmark</span> Projects
        </h2>

        <p className="tagline">Proud contributors to iconic structures</p>

        <p className="description">
          Trusted cement suppliers for engineers, contractors, and architects,
          contributing to landmark developments across India.
        </p>

        <div className="controls">
          <button
            onClick={() =>
              setCurrent(current - 1 < 0 ? projects.length - 1 : current - 1)
            }
          >
            ‹
          </button>

          <button onClick={() => setCurrent((current + 1) % projects.length)}>
            ›
          </button>

          <Link to="/projects" className="view-all">
            View All Projects
          </Link>
        </div>
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandmarkProjects;
