// src/components/CompanyIntro.jsx
import React from 'react';
import './CompanyIntro.css';
import companyImage from '../assets/pi-buildtech.png';

const CompanyIntro = () => {
  return (
    <div className="company-intro-container">
      <div className="intro-top">
        <div className="image-wrapper">
          <img src={companyImage} alt="PI BuildTech" />
        </div>
        <div className="text-content">
          <h2>PI BUILDTECH</h2>
          <p>
            You dream it, we build it. With this motto, PI BuildTech is your trusted partner who works tirelessly to turn your constructions and design into reality.
            We offer comprehensive services dedicated to delivering excellence in all projects. There is nothing like big or small for us. You name it and we have it,
            from constructions to interiors, our aim is delivering the best at affordable costs. A dedicated team of skilled professionals work with the best possible
            strategies to ensure your imaginations are turned into reality.
          </p>
          <p>
            To our clients, we offer various services which are strategies according to the need and fits to their budget. Our focus remains on client satisfaction,
            which motivates us to work hard and fulfil all project requirements.
          </p>
          <p>
            Our commitment to excellence, integrity, and client satisfaction makes us stand out. Diverse services, dedication to quality and commitment to the deadlines,
            makes us trustworthy company.
          </p>
          <p>
            Now is the time to turn your dreams into reality. Contact us to discuss your projects and learn how we work.
          </p>
        </div>
      </div>

      <div className="services-list">
        <div className="service-block">
          <strong>Construction:</strong> At PI BuildTech, we proudly showcase our expertise in construction. From groundbreaking to completion, our team of skilled professionals ensure that every phase of your project is implemented with precision and quality. Our expertise in structure stability and design is unmatched in residential, commercial, or industrial constructions.
        </div>

        <div className="service-block">
          <strong>Interior:</strong> Create stunning and functional interiors with the expertise of our interior design team. Whether a cosy home or a bustling office space, we believe every interior should reflect its occupants' unique personalities and needs. From space planning to selecting the perfect finishes and furnishings, we are dedicated to crafting inspiring and delightful spaces. We use 3D rendering and walkthrough for effective visualisation of the space, so that clients could get better view of the work to be done.
        </div>

        <div className="service-block">
          <strong>Renovation & Extension:</strong> Transform your present area into something high-quality with our protection and extension offerings. Whether you need to respire new existence into your private home or make bigger your industrial assets, our team will work intently with you to apprehend your imaginative and prescient and turn it into reality. From idea to completion, we work with care and attention to implement the plan smoothly.
        </div>

        <div className="service-block">
          <strong>Architecture:</strong> To utilise every inch of your space, avail yourself of our architectural services. Our talented architects create beautiful and spacious designs when combining creativity and technical expertise. Be it from the scratch, or revamping your existing structure, our experts work hand in hand with you to create exquisite designs meeting your expectations.
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
