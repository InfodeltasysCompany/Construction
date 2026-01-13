import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { ImagesApp } from "../../assets/ImagesApp";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <div className="image-wrapper">
            <img 
              src={ImagesApp.LogoImg} 
              alt="K.D. Constructions & Consultants Pvt Ltd" 
              className="image-main"
            />
            <div className="image-overlay"></div>
          </div>

          {/* Company Info */}
          <div className="company-info">
            <h3>K.D. Constructions & Consultants Pvt. Ltd.</h3>
            <p>Building Excellence Since 2000</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">About Us</span>
            <div className="header-line"></div>
          </div>

          {/* Main Heading */}
          <h2 className="main-heading">
            Credibility is built
            <br />
            <span className="heading-highlight">day by day</span>
          </h2>

          {/* Content */}
          <div className="content-wrapper">
            <p className="lead-paragraph">
              K.D. Constructions & Consultants stands firmly on the trust 
              placed by our valued patrons. We honor this trust by consistently
              delivering structurally sound and cost-effective projects.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>Experienced Team</strong> - Skilled architects and engineers
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>Quality Focus</strong> - Modern amenities & natural elements
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>Timely Delivery</strong> - Core strength since inception
                </div>
              </div>
            </div>

            <p className="closing-paragraph">
              Our commitment to excellence and client satisfaction drives every
              project we undertake, ensuring lasting value and reliability.
            </p>
          </div>

          {/* CTA Button - Using Link component for React Router */}
          <Link to="/about" className="cta-button">
            <span>Discover More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;