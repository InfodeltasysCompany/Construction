import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>
          Professional Interior Design Company <br />
          in Dubai – Antonovich Group
        </h1>
        <p>
          Antonovich Group, the premier{" "}
          <strong>interior design company</strong> in Dubai, transforming spaces
          into extraordinary masterpieces. With over{" "}
          <strong>20 years of expertise</strong>, our interior design company
          redefines elegance, crafting bespoke interiors that blend Arabian
          grandeur with modern sophistication. Begin your journey with Dubai’s
          leading interior design company today.
        </p>

        <div className="show-more">
          <a href="#more">SHOW MORE</a>
          <span className="arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
