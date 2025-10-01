import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-icon">🏢</span>
            <h2>WEBUILD</h2>
          </div>
          <p>
            Aliquam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.
            Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore
            sed stet justo et dolor.
          </p>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> 123 Street, New York, USA</li>
            <li><FaPhoneAlt /> +012 345 67890</li>
            <li><FaEnvelope /> info@example.com</li>
          </ul>

          {/* Social icons */}
          <div className="footer-social">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-links-group">
            <div className="footer-links">
              <h3>QUICK LINKS</h3>
              <ul>
                <li><a href="#">› Home</a></li>
                <li><a href="#">› About Us</a></li>
                <li><a href="#">› Our Services</a></li>
                <li><a href="#">› Meet The Team</a></li>
                <li><a href="#">› Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>POPULAR LINKS</h3>
              <ul>
                <li><a href="#">› Home</a></li>
                <li><a href="#">› About Us</a></li>
                <li><a href="#">› Our Services</a></li>
                <li><a href="#">› Meet The Team</a></li>
                <li><a href="#">› Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>POLICIES</h3>
              <ul>
                <li><a href="#">› Privacy Policy</a></li>
                <li><a href="#">› Terms & Conditions</a></li>
                <li><a href="#">› Refund Policy</a></li>
                <li><a href="#">› Cookie Policy</a></li>
                <li><a href="#">› Support</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>NEWSLETTER</h3>
            <form>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © <span>Your Site Name</span>. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          Designed by <span>HTML Codex</span><br />
          
        </div>
      </div>

      {/* Back to Top Button */}
      <a href="#" className="back-to-top">↑</a>
    </footer>
  );
};

export default Footer;
