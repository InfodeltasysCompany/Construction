import React, { useEffect, useState } from "react";
import "./Home.css";
import Service from "../../pages/services/Services";
import Vision from "../../pages/vision/Vision";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/ContactForm";
import LandmarkProjects from "../../pages/projectshandled/LandmarkProjects";
import BlogSection from "../../pages/blogsection/BlogSection";

const banners = [
  require("../../assets/banner1.png"),
  require("../../assets/banner2.png"),
  require("../../assets/banner3.png"),
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section className="hero-banner" aria-label="K.D. Constructions Banner">
        <div className="banner-slideshow" role="region" aria-live="polite">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-slide ${index === current ? "active" : ""}`}
            >
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>
        <a href="#about" className="scroll-down" aria-label="Scroll down">
          ↓
        </a>
      </section>

      {/* ===== Introduction Section ===== */}
      <section className="hero-container" id="about" aria-labelledby="hero-title">
        <div className="hero-overlay"></div>

        {/* Background Shapes */}
        <div className="hero-shapes" aria-hidden="true">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>

        {/* SEO-Friendly Text */}
        <div className="hero-content">
          <h1 id="hero-title">
            K.D. <span>Constructions & Consultants</span>
          </h1>
          <h2>Building Dreams Across India</h2>
          <p>
            We deliver world-class <strong>residential</strong> and{" "}
            <strong>commercial construction</strong> solutions with a focus on
            <em> innovation, quality, and precision</em>.
          </p>
          <a href="#services" className="hero-btn">
            Explore Services
          </a>
        </div>
      </section>

      {/* ===== Other Sections ===== */}
      <Service />
      <Vision />
      <About />
      <LandmarkProjects />
      <BlogSection />
      <Contact />
    </main>
  );
};

export default Home;
