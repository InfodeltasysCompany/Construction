import React, { useRef, useEffect } from "react";
import "./Vision.css";

const Vision = () => {
  const cards = [
    {
      title: "Our Focus",
      description:
        "To lead the transformation of modern construction and architecture through eco-conscious innovation, creating sustainable environments that blend nature, technology, and timeless design.",
      icon: "🌿",
    },
    {
      title: "Our Goal",
      description:
        "To design and build architectural spaces that prioritize environmental harmony, energy efficiency, and community well-being. Every project is a step toward a greener, smarter future.",
      icon: "🏗️",
    },
    {
      title: "Our Core Values",
      description:
        "Sustainability, Integrity, Innovation, Quality, and Client-Centricity. These values shape how we design, build, and operate—ensuring each structure is a legacy of planet-friendly progress.",
      icon: "💚",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // speed
    const delay = 20; // ms

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += scrollStep;
      scrollAmount += scrollStep;

      // reset scroll when it reaches the end
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, delay);
    return () => clearInterval(interval);
  }, []);

  // Duplicate cards for seamless loop
  const repeatedCards = [...cards, ...cards];

  return (
    <section className="vision-cards-section">
      <div className="vision-header">
        <h2 className="vision-main-heading">Our Vision</h2>
        <p className="vision-subheading">
          As a leader in sustainable construction and architecture, we believe
          in building for the future—where design meets responsibility, and
          progress respects the planet.
        </p>
      </div>

      <div className="vision-scroll-container" ref={scrollRef}>
        {repeatedCards.map((card, index) => (
          <div key={index} className="vision-card">
            <div className="vision-icon">{card.icon}</div>
            <h3 className="vision-title">{card.title}</h3>
            <p className="vision-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
