import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import Projects from "../../pages/project/Projects";
import ProjectsHandled from "../../pages/projectshandled/ProjectsHandled";
import Services from "../../pages/services/Services";
import TestimonialsSection from "../../pages/testimonials/TestimonialsSection";
import Certifcate from "../../pages/certificate/Certificate";
import HotelDetail from "../../pages/hoteldetail/HotelDetail";

const BlogPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingPhrases = [
    "Structural Excellence",
    "Architectural Innovation",
    "Construction Mastery",
    "Sustainable Solutions",
    "Engineering Precision",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  return (
    <>
      {/* Main Banner Section */}
      <section className="main-banner">
        {/* Background Elements */}
        <div className="background-elements">
          <div className="background-overlay" aria-hidden="true"></div>
          <div className="floating-shapes" aria-hidden="true">
            <div className="floating-shape shape-one"></div>
            <div className="floating-shape shape-two"></div>
            <div className="floating-shape shape-three"></div>
            <div className="floating-shape shape-four"></div>
          </div>
        </div>

        <div className="banner-container">
          <div className="banner-content">
            {/* Brand Identifier */}
            <div className="brand-identifier">
              <span role="img" aria-label="building icon">🏗️</span>
              <span>K.D. Constructions & Consultants</span>
            </div>

            {/* Primary Heading */}
            <h1 className="primary-heading">
              Building <span className="dynamic-text">{rotatingPhrases[currentIndex]}</span> in Varanasi
            </h1>

            {/* Supporting Text */}
            <p className="supporting-text">
              Transforming visions into landmarks with 20+ years of structural engineering
              expertise, innovative design solutions, and uncompromising construction quality.
            </p>

            {/* Achievement Metrics */}
            <div className="achievement-metrics">
              {[
                { value: "20+", description: "Years Experience" },
                { value: "36+", description: "Projects Completed" },
                { value: "150+", description: "Crores Value" },
                { value: "12+", description: "Awards" },
              ].map((metric, idx) => (
                <div key={idx} className="metric-item">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-description">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* Scroll Prompt */}
            <div className="scroll-prompt">
              <span>Scroll to Explore</span>
              <div className="scroll-track">
                <div className="scroll-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition">
        <div className="content-container">
          <div className="section-intro">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2>Our Commitment to Excellence</h2>
            <p>We bring unparalleled expertise and dedication to every project</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>20+ Years Experience</h3>
              <p>Two decades of delivering exceptional construction projects with proven expertise in structural engineering and architectural design.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Timely Project Delivery</h3>
              <p>We pride ourselves on completing projects within scheduled timelines without compromising on quality standards.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Quality Assurance</h3>
              <p>Premium materials, skilled workmanship, and rigorous quality checks ensure lasting durability and excellence.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Transparent Pricing</h3>
              <p>Clear, detailed cost breakdowns with no hidden charges. We believe in honest and fair business practices.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>End-to-End Service</h3>
              <p>From initial design consultation to final construction, we provide comprehensive project management.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Environmentally conscious construction methods and materials for a greener future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="content-section">
         <HotelDetail />
      </section>

      {/* Portfolio Section */}
      <section className="content-section">
        <Projects />
        <ProjectsHandled />
      </section>

      {/* Services Overview Section */}
      <section className="content-section">
        <Services />
      </section>

      {/* Client Feedback Section */}
      <section className="content-section">
        <TestimonialsSection />
      </section>

      {/* Credentials Section */}
      <section className="content-section">
        <Certifcate />
      </section>
    </>
  );
};

export default BlogPage;