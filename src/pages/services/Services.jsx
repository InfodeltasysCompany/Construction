import React from "react";
import "./Services.css";
import { ImagesApp } from "../../assets/ImagesApp";

const servicesData = [
  {
    title: "Construction",
    icon: "🏠",
    image: ImagesApp.ConstructionImg,
    text: `K.D. Constructions & Consultants undertakes complete construction projects in Varanasi, from foundations to finishing. We follow strict quality standards and manage every stage of construction, delivering safe, durable, and aesthetically pleasing structures.`,
  },
  {
    title: "Interior Design",
    icon: "🛋️",
    image: ImagesApp.InteriorDetailImg,
    text: `K.D. Constructions & Consultants in Varanasi specializes in creating stylish and functional interiors for residential and commercial spaces. We focus on delivering elegant designs tailored to our clients’ needs, ensuring comfort, aesthetics, and modern functionality.`,
  },
  {
    title: "Renovation & Repairs:",
    icon: "🏗️",
    image: ImagesApp.FitOutImg,
    text: `Our Renovation & Repair services focus on creating efficient, future-ready interiors through smart design, sustainable materials, and precise execution—ensuring spaces that perform today and endure tomorrow.`,
  },
  {
    title: "Furnishing & Interiors",
    icon: "🪑",
    image: ImagesApp.FurnishingImg,
    text: `We provide comprehensive furnishing solutions including furniture, flooring, curtains, and décor items for residential and commercial spaces. K.D. Constructions & Consultants ensures that each interior reflects style, comfort, and harmony.`,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>

      <p className="services-subheading">
        K.D. Constructions & Consultants delivers comprehensive solutions for
        residential and commercial projects, covering every stage from interior
        design and construction to complete fit-out execution.
      </p>

      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`service-block ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="service-text">
            <h3>
              {service.title} <span className="icon">{service.icon}</span>
            </h3>
            <p>{service.text}</p>
          </div>

          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
