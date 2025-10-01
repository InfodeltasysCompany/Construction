import React from 'react';
import './HelpSection.css';
import backgroundImage from '../../assets/1.png'; // Make sure the path is correct
import contactImage from '../../assets/2.png'; // Add your second image here
import ContactForm from '../../pages/contact/ContactForm';

const HelpSection = () => {
  return (
    <div>
      {/* Section 1: Background Image with Text */}
      <div
        className="help-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="help-text">How Can We Help?</h1>
        </div>
      </div>

      {/* Section 2: Contact Text + Image */}
      <div className="contact-container">
        <div className="contact-image-wrapper">
          <img
            src={contactImage}
            alt="Team collaboration"
            className="contact-image"
          />
        </div>
        <div className="contact-text">
          <p>
            With offices from the Space Coast to the West Coast, BRPH serves{' '}
            <a href="#clients">clients</a> throughout the United States and more
            than 20 countries. Give us a <a href="#call">call</a>, send us a
            message or make plans for a visit. We’re excited to hear about your
            project and talk about how we can work together to enhance your
            mission and achieve your goals. Contact BRPH today!
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default HelpSection;
