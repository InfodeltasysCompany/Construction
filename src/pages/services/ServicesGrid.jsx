import React from "react";
import "./ServicesGrid.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/1.png";
import img3 from "../../assets/1.png";
import img4 from "../../assets/1.png";
import img5 from "../../assets/1.png";
import img6 from "../../assets/1.png";
import img7 from "../../assets/1.png";
import img8 from "../../assets/1.png";
import img9 from "../../assets/1.png";
import img10 from "../../assets/1.png";
import img11 from "../../assets/1.png";
import img12 from "../../assets/1.png";

const services = [
  {
    img: img1,
    title: "Architectural Excellence",
    desc: "Unleashing the power of architecture, how our construction company transforms visions into reality.",
  },
  {
    img: img2,
    title: "Strategic Planning",
    desc: "Building success through strategies tailored for construction companies in Dubai and beyond.",
  },
  {
    img: img3,
    title: "Project Management",
    desc: "Mastering the art of project management, ensuring flawless delivery from start to finish.",
  },
  {
    img: img4,
    title: "Master Planning",
    desc: "Unlocking the potential of master planning, shaping cities and communities for tomorrow.",
  },
  {
    img: img5,
    title: "Cityscapes",
    desc: "Transforming cityscapes with iconic projects that redefine skylines worldwide.",
  },
  {
    img: img6,
    title: "Interior Design",
    desc: "Elevating spaces to new heights with our award-winning interior design solutions.",
  },
  {
    img: img7,
    title: "Feasibility Studies",
    desc: "In-depth feasibility studies ensuring solid foundations for every project.",
  },
  {
    img: img8,
    title: "Landscaping Design",
    desc: "Creating sustainable and beautiful landscapes that complement urban life.",
  },
  {
    img: img9,
    title: "Structural Design",
    desc: "Delivering cutting-edge structural design that ensures safety and innovation.",
  },
  {
    img: img10,
    title: "Pre-Construction",
    desc: "From ideas to execution, we prepare the groundwork for successful projects.",
  },
  {
    img: img11,
    title: "During Construction",
    desc: "Seamless execution of complex projects with world-class supervision.",
  },
  {
    img: img12,
    title: "Post-Construction",
    desc: "Ensuring sustainability and functionality even after project delivery.",
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
