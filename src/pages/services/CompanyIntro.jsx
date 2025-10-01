import React from "react";
import "./CompanyIntro.css";
import companyImage from "../../assets/1.png"; // replace with your image path

const CompanyIntro = () => {
  return (
    <section className="company-intro-container">
      {/* ----------- Top Section (Image + Text) ----------- */}
      <div className="intro-top">
        <div className="image-wrapper">
          <img src={companyImage} alt="Company Overview" />
        </div>

        <div className="text-content">
          <h2>About K.D. Constructions & Consultant’s</h2>
          <p>
            Established in 2000 by <strong>Er. Divyendu Singh (M.Tech – Structure)</strong>, we are a leading construction and consultancy firm in Varanasi, specializing in structural design, planning, interior solutions, and civil-mechanical works.
          </p>
          <p>
            Our team delivers high-quality, sustainable, and economical solutions tailored to client needs. We are committed to excellence, innovation, and timely project delivery, serving government, semi-government, and private clients.
          </p>
        </div>
      </div>

      {/* ----------- Services Section ----------- */}
      <div className="services-list">
        <div className="service-block">
          <strong>Structural & Civil Engineering</strong>
          Expert solutions in building structures, civil planning, and mechanical works.
        </div>
        <div className="service-block">
          <strong>Architectural & Interior Design</strong>
          Innovative and functional designs that elevate aesthetics and efficiency.
        </div>
        <div className="service-block">
          <strong>Project Management</strong>
          Efficient planning, supervision, and execution ensuring timely delivery.
        </div>
        <div className="service-block">
          <strong>Consultancy & Valuation</strong>
          Professional consultancy, registered valuations, and compliance management.
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
