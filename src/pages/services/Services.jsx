import React from 'react';
import './Services.css';

// Images
import interior from '../../assets/interior.png';
import fitout from '../../assets/fit.png';
import construction from '../../assets/construction.png';
import furnishing from '../../assets/furnishing.png';

const servicesData = [
  {
    title: 'Interior Design',
    icon: '🛋️',
    image: interior,
    text: `K.D. Constructions & Consultants in Varanasi specializes in creating stylish and functional interiors for residential and commercial spaces. We focus on delivering elegant designs tailored to our clients’ needs, ensuring comfort, aesthetics, and modern functionality.`,
  },
  {
    title: 'Fit-Out',
    icon: '🏗️',
    image: fitout,
    text: `Our fit-out services provide seamless execution for homes, offices, and commercial spaces in Varanasi. K.D. Constructions & Consultants ensures precise implementation with attention to detail, quality materials, and timely completion of every project.`,
  },
  {
    title: 'Construction',
    icon: '🏠',
    image: construction,
    text: `K.D. Constructions & Consultants undertakes complete construction projects in Varanasi, from foundations to finishing. We follow strict quality standards and manage every stage of construction, delivering safe, durable, and aesthetically pleasing structures.`,
  },
  {
    title: 'Furnishing & Interiors',
    icon: '🪑',
    image: furnishing,
    text: `We provide comprehensive furnishing solutions including furniture, flooring, curtains, and décor items for residential and commercial spaces. K.D. Constructions & Consultants ensures that each interior reflects style, comfort, and harmony.`,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our services</h2>
      <p className="services-subheading">
        Antonovich Group offers full turnkey services for residential & commercial
        projects, providing interior design, construction and fit-out solutions.
      </p>

      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`service-block ${index % 2 !== 0 ? 'reverse' : ''}`}
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
