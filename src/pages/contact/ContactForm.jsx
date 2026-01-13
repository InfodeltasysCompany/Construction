import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ImagesApp } from "../../assets/ImagesApp";
import "./ContactForm.css";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_rxrkc56",
        "template_b244fms",
        formRef.current,
        "tc6Ik5vxp9CDGLMoY"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error.text || error);
        toast.error("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="cf-section">
      <Toaster position="top-right" />
      <div className="cf-container">

        {/* LEFT: Form */}
        <div className="cf-left">
          <h2>Contact Us</h2>
          <p>Have any questions? Fill out the form and we’ll get back to you.</p>

          <form ref={formRef} onSubmit={sendEmail} className="cf-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <textarea name="message" placeholder="Your Message" required />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="cf-privacy">
              By clicking send, you agree to our{" "}
              <Link to="/privacypolicy">Privacy Policy</Link>.
            </p>
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="cf-right">
          <img src={ImagesApp.ContactImg} alt="Contact Illustration" />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
