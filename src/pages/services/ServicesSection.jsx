// src/components/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css';
import Services from "../../pages/services/Services"
import architecture from '../../assets/architecture.png';
import interior from '../../assets/interiordesigning.png';
import construction from '../../assets/construct.png';
import management from '../../assets/projectmanagement.png';


const services = [
  {
    title: "Architecture Design",
    image: architecture,
  },
   {
    title: "Construction",
    image: construction,
  },
  {
    title: "Interior Designing",
    image: interior,
  },
 
  {
    title: "Project Management",
    image: management,
  },
];

const ServicesSection = () => {
  return (
    <>
    <Services />
    <div className="services-section">
      <h1>End-to-End Design, Build & Interior Services</h1>
      <p className="subtitle">
        Complete Design to Build services—seamlessly integrating Architecture, Construction, and Interiors
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>

 
    </>
  );
};

export default ServicesSection;
