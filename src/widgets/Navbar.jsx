import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" aria-label="Company Home" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main Navigation"
        >
          <button
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <ul>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/construction"
                className={isActive("/construction") ? "active" : ""}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className={isActive("/contactus") ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side */}
        <div className="right-section">
          {/* Phone button stays <a> */}
          <a href="tel:+919919100744" className="phone-btn desktop-only">
            <FaPhoneAlt /> +91 991 910 07 44
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "" : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
