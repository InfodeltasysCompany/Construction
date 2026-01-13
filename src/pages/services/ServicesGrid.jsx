import React from "react";
import "./ServicesGrid.css";

import { ImagesApp } from "../../assets/ImagesApp";

const services = [
  {
    img: ImagesApp.ArchitectureExcellenceImg,
    title: "Architectural Excellence",
    desc: "Crafting architectural marvels in Varanasi that blend tradition with innovation, redefining the city’s skyline with elegance and purpose.",
  },
  {
    img: ImagesApp.StrategicPlanningImg,
    title: "Strategic Planning",
    desc: "Building Varanasi’s future through strategic planning that balances cultural preservation with modern infrastructure development.",
  },
  {
    img: ImagesApp.ProjectManagementImg,
    title: "Project Management",
    desc: "Delivering construction excellence in Varanasi with efficient project management that ensures timely and flawless execution.",
  },
  {
    img: ImagesApp.MasteringArtImg,
    title: "Master Planning",
    desc: "Designing sustainable master plans in Varanasi that harmonize heritage, community living, and urban growth.",
  },
  {
    img: ImagesApp.CityScapesImg,
    title: "Cityscapes",
    desc: "Transforming Varanasi’s cityscape with landmark projects that celebrate its spiritual essence and architectural charm.",
  },
  {
    img: ImagesApp.InteriorDesignImg,
    title: "Interior Design",
    desc: "Creating interiors in Varanasi that combine modern design principles with the city’s timeless cultural aesthetics.",
  },
  {
    img: ImagesApp.FeasibilityStudiesImg,
    title: "Feasibility Studies",
    desc: "Conducting in-depth feasibility studies across Varanasi to ensure each project stands on strong, practical, and sustainable foundations.",
  },
  {
    img: ImagesApp.LandscapingImg,
    title: "Landscaping Design",
    desc: "Designing green and harmonious landscapes in Varanasi that enhance the city’s beauty while promoting environmental balance.",
  },
  {
    img: ImagesApp.StructuralImg,
    title: "Structural Design",
    desc: "Delivering safe, durable, and innovative structural designs tailored for Varanasi’s evolving urban environment.",
  },
  {
    img: ImagesApp.PreConstructionImg,
    title: "Pre-Construction",
    desc: "Laying the groundwork for successful projects in Varanasi through meticulous planning and detailed pre-construction analysis.",
  },
  {
    img: ImagesApp.DuringConstructionImg,
    title: "During Construction",
    desc: "Executing complex construction projects in Varanasi with expert supervision, precision, and on-site excellence.",
  },
  {
    img: ImagesApp.PostConstructionImg,
    title: "Post-Construction",
    desc: "Ensuring long-term performance and sustainability of Varanasi projects with dedicated post-construction care and maintenance.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">We Can Offer You</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
