import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/" aria-label="Company Home">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`} aria-label="Main Navigation">
          <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
          <ul>
            <li><a href="/" aria-label="Home Page">Home</a></li>
            <li><a href="/about" aria-label="About Us Page">About</a></li>
            <li><a href="/construction" aria-label="Services Page">Services</a></li>
            <li><a href="/blog" aria-label="Blog Page">Blog</a></li>
            <li><a href="/contactus" aria-label="Contact Page">Contact</a></li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="right-section">
          <a href="tel:+971542995555" className="phone-btn desktop-only">
            <FaPhoneAlt /> +971 54 299 5555
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
