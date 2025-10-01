import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    number: 1,
    title: "Turnkey Villa Construction Solutions",
    description: "We manage every stage of your villa’s creation — from architectural design and site development to full execution and final handover. Our turnkey approach ensures seamless delivery, with precision and perfection at every step."
  },
  {
    number: 2,
    title: "Premium-Grade Materials & Finishes",
    description: "We source only the highest-quality materials — including Italian marble, natural stone, engineered wood, and state-of-the-art building technologies — to guarantee durability, elegance, and long-lasting value."
  },
  {
    number: 3,
    title: "Bespoke Architectural Concepts",
    description: "Each villa we build is one-of-a-kind. Our architects craft tailor-made designs that harmonize with your lifestyle, land location, and vision — blending modern innovation with timeless elegance."
  },
  {
    number: 4,
    title: "International Standards & Compliance",
    description: "Our construction processes follow the world’s most rigorous quality and safety protocols. Every project is executed in line with international building codes and sustainability standards."
  },
  {
    number: 5,
    title: "In-House Engineering & Project Management",
    description: "With our dedicated in-house team of engineers, construction specialists, and certified project managers, we maintain full control over timelines, budgets, and site operations — ensuring unmatched execution."
  },
  {
    number: 6,
    title: "Post-Completion Support & Warranty",
    description: "Our commitment continues beyond handover. We offer extended warranties and personalized aftercare services to support our clients with maintenance, upgrades, and long-term property value."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why You Should Choose Our Company</h2>
      <div className="features-grid">
        {features.map((item) => (
          <div className="feature-item" key={item.number}>
            <div className="number-circle">{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
