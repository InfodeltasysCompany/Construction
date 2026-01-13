import React from "react";
import "./ServicesSection.css";

import { ImagesApp } from "../../assets/ImagesApp";

const servicesData = [
  {
    title: "Constructions",
    description:
      "Construction services include planning, building, installing, and maintaining structures with high quality standards.",
    image: ImagesApp.ConstructionsImg, // construction.png
  },
  {
    title: "Electrical Works",
    description:
      "Safe and reliable electrical services delivered by experienced professionals using modern tools.",
    image: ImagesApp.ElectricalImg, // electrical.jpg
  },
  {
    title: "Interior Design",
    description:
      "Creative interior solutions that improve aesthetics, comfort, and functionality of spaces.",
    image: ImagesApp.InteriorImg, // interior.jpeg
  },
  {
    title: "Painting",
    description:
      "Professional painting services for homes and offices with durable and premium finishes.",
    image: ImagesApp.Project1Img, // project1.jpeg
  },
  {
    title: "Flooring",
    description:
      "High-quality flooring solutions that are durable, stylish, and easy to maintain.",
    image: ImagesApp.FlooringImg, // flooring.jpg
  },
  {
    title: "Roofing",
    description:
      "Strong and weather-resistant roofing systems designed for long-lasting performance.",
    image: ImagesApp.RoofingImg, // roofing.jpeg
  },
  {
    title: "Refurbishment",
    description:
      "Upgrade and modernize spaces through expert refurbishment and renovation services.",
    image: ImagesApp.RefurbishmentImg, // refurbishment.jpeg
  },
  {
    title: "Architectural",
    description:
      "Professional architectural planning and design for residential and commercial projects.",
    image: ImagesApp.ArchitectureImg, // architecture.png
  },
];

const ServicesSection = () => {
  return (
    <section className="section">
      <div className="wrapper">
        <h2 className="heading">Our Services</h2>
        <p className="subheading">
          We provide almost every civil construction service.
        </p>

        <div className="grid">
          {servicesData.map((item, index) => (
            <div className="card" key={index}>
              <div className="image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
