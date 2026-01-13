import React from "react";
import "./HelpSection.css";
import { ImagesApp } from "../../assets/ImagesApp";
import ContactForm from "../../pages/contact/ContactForm";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const HelpSection = () => {
  return (
    <main className="helpElite">

      {/* HERO */}
      <section
        className="helpElite-hero"
        style={{ backgroundImage: `url(${ImagesApp.ContactUsImg1})` }}
      >
        <div className="helpElite-overlay">
          <div className="heroElite-content">
            <h1>Building Trust. Creating Landmarks.</h1>
            <p>Construction & Consulting Services Across India</p>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="helpElite-info">
        <div className="helpElite-grid">

          <div className="helpElite-text">
            <h2>K.D. Constructions & Consultants</h2>
            <p>
              We deliver premium construction and consultancy services using
              modern technology, quality materials and expert engineering.
            </p>

            <div className="helpElite-contacts">
              <div><FiPhone /> +91 98765 43210</div>
              <div><FiMail /> info@kdconstructions.com</div>
              <div><FiMapPin /> Mumbai, Maharashtra</div>
            </div>
          </div>

          <div className="helpElite-image">
            <img src={ImagesApp.ContactUsImg2} alt="Construction" />
          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="helpElite-form">
        <div className="formWrap">
          <h2>Let’s Work Together</h2>
          <p>Share your project details and our team will contact you.</p>
          <ContactForm />
        </div>
      </section>

    </main>
  );
};

export default HelpSection;
