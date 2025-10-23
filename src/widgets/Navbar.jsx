import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Get current route

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // Helper to check if path is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/" aria-label="Company Home">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main Navigation"
        >
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul>
            <li>
              <a
                href="/"
                className={isActive("/") ? "active" : ""}
                aria-label="Home Page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={isActive("/about") ? "active" : ""}
                aria-label="About Us Page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/construction"
                className={isActive("/construction") ? "active" : ""}
                aria-label="Services Page"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={isActive("/blog") ? "active" : ""}
                aria-label="Blog Page"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className={isActive("/contactus") ? "active" : ""}
                aria-label="Contact Page"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="right-section">
          <a href="tel:+919919100744" className="phone-btn desktop-only">
            <FaPhoneAlt /> +91 991 910 07 44
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
