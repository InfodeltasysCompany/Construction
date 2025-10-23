import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButtons(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* About */}
        <div className="footer-about">
          <img src={Logo} alt="K.D. Constructions & Consultants Logo" />
          <h2>K.D. Constructions & Consultants</h2>
          <p>
            Delivering innovative construction and consultancy solutions with
            precision and quality. From concept to completion — building trust
            with every project.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/construction">Our Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contactus">Contact</a></li>
            <li><a href="/hoteldetail">Hotel Detail</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-links">
          <h3>Policies</h3>
          <ul>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
            <li><a href="/termsconditions">Terms & Conditions</a></li>
            <li><a href="/refundpolicy">Refund Policy</a></li>
            <li><a href="/cookiepolicy">Cookie Policy</a></li>
            <li><a href="/contactus">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Contact & Social */}
      <div className="footer-contact-social">
        <div className="footer-contact-container">
          <h3 className="footer-contact-title">Our Address</h3>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>
                B-30/2A-3, Prafful Nagar Colony, Lanka (Near HDFC Bank),
                <br />
                Varanasi, U.P. 221005
              </span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+91 9919100744, +91 9335047679</span>
            </li>
            <li>
              <FaEnvelope />
              <span>divyenusingh72@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          <span>K.D. Constructions & Consultants</span>. All Rights Reserved.
        </p>
        <p className="footer-credit">Designed by InfoDeltaSys</p>
      </div>

      {/* Floating Buttons */}
      {showButtons && (
        <>
          <a
            href="#top"
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to Top"
          >
            ↑
          </a>

          <a
            href="https://wa.me/919919100744"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="tel:+919919100744"
            className="call-btn"
            aria-label="Call Us"
          >
            <FaPhoneAlt />
          </a>
        </>
      )}
    </footer>
  );
};

export default Footer;
