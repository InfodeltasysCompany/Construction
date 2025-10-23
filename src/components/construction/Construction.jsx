import React from 'react';
import './Construction.css';
import Image1 from "../../assets/leading.png";
import Image2 from "../../assets/2.png";
import ConstructionCompanies from '../../pages/constructioncompanies/ConstructionCompanies';
import ServicesGrid from "../../pages/services/ServicesGrid";
import CompanyIntro from '../../pages/services/CompanyIntro';
import OfferSection from '../../pages/offer/OfferSection';
import Contact from "../../pages/contact/ContactForm";
import Projects from "../../pages/project/Projects";

const Construction = () => {
  return (
    <section className="construction-wrapper">

      {/* Hero Section */}
      <div className="construction-hero">
        <div className="hero-content">
          <h1>Leading Construction & Consultancy in Varanasi</h1>
          <p>
            K.D. Constructions & Consultants delivers <strong>innovative, sustainable, and high-quality construction solutions</strong>. 
            From civil works to structural design and interior planning, we transform ideas into reality for residential, commercial, and government projects.
          </p>
        </div>
        <div className="hero-images">
          <img src={Image1} alt="Modern construction site in Varanasi" className="hero-img hero-img-left" />
          <img src={Image2} alt="Construction workers executing project" className="hero-img hero-img-right" />
        </div>
      </div>

      {/* Achievements Section */}
      <div className="construction-achievements">
        <div className="achievement-card">
          <h2>Trusted Expertise</h2>
          <p>
            Over 25 years of excellence in structural design, project management, and civil & mechanical construction.
          </p>
        </div>
        <div className="achievement-card">
          <h2>Modern Engineering</h2>
          <p>
            Using cutting-edge software and machinery for design, fabrication, and construction ensuring precision and durability.
          </p>
        </div>
        <div className="achievement-card">
          <h2>Client Satisfaction</h2>
          <p>
            Tailored solutions for residential, commercial, and government projects with strict adherence to quality and timelines.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="construction-stats">
        <div className="stat-item">
          <h3>100+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Expert Engineers & Staff</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Clients Served</p>
        </div>
      </div>

      <ConstructionCompanies />
      <ServicesGrid />
      <CompanyIntro />
      <OfferSection />
      <Projects />
      <Contact />
    </section>
  );
};

export default Construction;
