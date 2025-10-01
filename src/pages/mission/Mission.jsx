import React from 'react';
import './Mission.css'; // Contains both mission + katrina styles

const Mission = () => {
  return (
    <>
      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-overlay">
          <h1 className="mission-header">Mission</h1>
          <h2 className="mission-text">
            Create exquisite, functional, and personalized spaces that reflect elegance and innovation. 
            We blend premium materials with exceptional craftsmanship to transform visions into reality.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Mission;
