import React, { useState, useEffect } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButtons(window.scrollY > 200);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollToTop = () => {
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/construction">Our Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/hoteldetail">Hotel Detail</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-links">
          <h3>Policies</h3>
          <ul>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/termsconditions">Terms & Conditions</Link></li>
            <li><Link to="/refundpolicy">Refund Policy</Link></li>
            <li><Link to="/cookiepolicy">Cookie Policy</Link></li>
            <li><Link to="/contactus">Support</Link></li>
          </ul>
        </div>
      </div>

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
              <span>divyendusingh72@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <Link to="https://www.facebook.com/share/17m8z9BrsY/" target="_blank" rel="noreferrer"><FaFacebookF /></Link>
          <Link to="https://www.linkedin.com/in/divyendu-singh-028bb52a8" target="_blank" rel="noreferrer"><FaLinkedinIn /></Link>
          <Link to="https://www.instagram.com/divyendu.singh.33" target="_blank" rel="noreferrer"><FaInstagram /></Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>K.D. Constructions & Consultants</span>. All Rights Reserved.
        </p>
        <p className="footer-credit">Designed by InfoDeltaSys</p>
      </div>

      {/* Floating Buttons (Mobile only) */}
      {showButtons && isMobile && (
        <>
          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to Top"
          >
            ↑
          </button>

          <Link
            to="https://wa.me/919919100744"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </Link>

          <Link
            to="tel:+919919100744"
            className="call-btn"
            aria-label="Call Us"
          >
            <FaPhoneAlt />
          </Link>
        </>
      )}
    </footer>
  );
};

export default Footer;
