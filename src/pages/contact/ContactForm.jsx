import React from "react";
import "./ContactForm.css";
import houseImg from "../../assets/contact.png"; // replace with your actual image path

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>
            Have any questions? Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            <p className="privacy-text">
              By clicking send, you agree to our <a href="#">Privacy Policy</a>.
            </p>
          </form>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <img src={houseImg} alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
