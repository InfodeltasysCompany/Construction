import React from 'react';
import './HelpSection.css';
import backgroundImage from '../../assets/contactus1.png';
import contactImage from '../../assets/contactus2.png';
import ContactForm from '../../pages/contact/ContactForm';

const HelpSection = () => {
  return (
    <main>
      {/* Section 1: Background Image with Text */}
      <section
        className="help-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label="How Can We Help Section"
      >
        <div className="overlay">
          <h1 className="help-text">How Can We Help?</h1>
        </div>
      </section>

      {/* Section 2: Contact Info */}
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-content">
          <figure className="contact-image-wrapper">
            <img
              src={contactImage}
              alt="Team collaboration"
              className="contact-image"
              loading="lazy"
            />
          </figure>
          <article className="contact-text">
<h2 id="contact-heading">Connect with K.D. Constructions & Consultants</h2>
<p>
  At <strong>K.D. Constructions & Consultants</strong>, we believe that every great project begins with a strong partnership. 
  With a proven presence across India, our team delivers <a href="#services">innovative construction</a>, 
  <a href="#consulting">consulting</a>, and <a href="#design">design solutions</a> tailored to meet your goals. 
  Whether you’re planning a new development, modernizing infrastructure, or seeking expert project guidance — 
  we’re here to help turn your vision into reality.  
  <br /><br />
  Get in touch today to discuss your next project. 
  Together, we’ll build spaces that stand the test of time and reflect true excellence.
</p>

          </article>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default HelpSection;
