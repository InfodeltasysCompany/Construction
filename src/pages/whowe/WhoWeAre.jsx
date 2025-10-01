// src/components/WhoWeAre.js
import React from 'react';
import './WhoWeAre.css';

const values = [
  {
    icon: '🏗️',
    title: 'Structural & Civil Expertise',
    text: `With over two decades of experience, we specialize in structural design, civil construction, and turnkey project execution. Every project is backed by sound engineering practices and innovative planning.`
  },
  {
    icon: '📐',
    title: 'Architectural & Interior Design',
    text: `From modern architectural concepts to detailed interior planning, we create spaces that are functional, aesthetic, and cost-effective—designed to meet client expectations and regulatory standards.`
  },
  {
    icon: '⚙️',
    title: 'Mechanical & Fabrication Works',
    text: `Our expertise extends to steel fabrication, prefabricated structures, and mechanical works, ensuring strength, precision, and durability in every construction project.`
  },
  {
    icon: '🤝',
    title: 'Integrity & Commitment',
    text: `We believe in transparent dealings, ethical practices, and honoring commitments. Our reputation is built on trust, timely delivery, and long-lasting client relationships.`
  },
  {
    icon: '🌱',
    title: 'Sustainability & Innovation',
    text: `We integrate eco-friendly practices and sustainable solutions into our projects, adopting innovative techniques to ensure both environmental care and long-term client benefits.`
  },
  {
    icon: '🏢',
    title: 'Diverse Project Portfolio',
    text: `From government and semi-government contracts to private developments, educational campuses, and industrial projects, we deliver comprehensive solutions across all construction sectors.`
  }
];

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="intro">
        <h2>Who We Are</h2>
        <p>
          K.D. Constructions & Consultant’s is a trusted leader in structural design, construction, and consultancy in Varanasi. With a commitment to engineering excellence, innovation, and quality, we create projects that stand strong and inspire confidence.
        </p>
      </div>

      <div className="values-grid">
        {values.map((item, index) => (
          <div className="value-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
