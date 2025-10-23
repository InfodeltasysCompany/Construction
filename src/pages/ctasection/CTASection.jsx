import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Transform Your Commercial Space</h2>
        <p>
          Modern, functional interiors with a touch of Varanasi heritage. 
          Sophisticated designs that leave a lasting impression.
        </p>
        <Link to="/contactform" className="cta-button">
          🚀 Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
