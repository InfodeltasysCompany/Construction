import React, { useEffect, useState } from "react";
import "./Home.css";
import Service from "../../pages/services/Services";
import Vision from "../../pages/vision/Vision";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/ContactForm";
import LandmarkProjects from "../../pages/projectshandled/LandmarkProjects";
import BlogSection from "../../pages/blogsection/BlogSection";
import HotelDetail from "../../pages/hoteldetail/HotelDetail";

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
      {/* ===== Banner Section ===== */}
      <section className="home-banner-section" aria-label="K.D. Constructions Banner">
        <div className="home-banner-slideshow">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`home-banner-slide ${index === current ? "active" : ""}`}
            >
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>
        <a href="#home-introduction" className="home-scroll-down" aria-label="Scroll down">
          ↓
        </a>
      </section>

      {/* ===== Introduction Section ===== */}
      <section className="home-intro-section" id="home-introduction">
        <div className="home-intro-overlay"></div>
        <div className="home-intro-content">
          <h1>
            K.D. <span>Constructions <br /> & <br />Consultants</span>
          </h1>
          <h2>Building Dreams Across India</h2>
          <p>
            We deliver world-class <strong>residential</strong> and{" "}
            <strong>commercial construction</strong> solutions with a focus on{" "}
            <em>innovation, quality, and precision</em>.
          </p>
        </div>
      </section>

      {/* ===== Other Sections ===== */}
      <section className="home-section-wrapper"><Service /></section>
      <section className="home-section-wrapper"><Vision /></section>
      <section className="home-section-wrapper"><About /></section>
      <section className="home-section-wrapper"><LandmarkProjects /></section>
      <section className="home-section-wrapper"><HotelDetail /></section>
      <section className="home-section-wrapper"><BlogSection /></section>
      <section className="home-section-wrapper"><Contact /></section>
    </main>
  );
};

export default Home;
