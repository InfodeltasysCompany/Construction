import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogSection.css";
import { ImagesApp } from "../../assets/ImagesApp";

const insightData = [
  {
    title: "Established Expertise Since 2000",
    content:
      "Founded by Er. Divyendu Singh, delivering architectural and engineering solutions across government, semi-government, and private projects.",
  },
  {
    title: "Comprehensive Services",
    content:
      "Providing Structural Design, Planning, Interior Design, Valuation, and Construction services under one roof.",
  },
  {
    title: "Skilled Team",
    content:
      "A technically competent team including civil engineers, architects, chartered accountant, and supervisory staff ensures quality execution.",
  },
  {
    title: "Advanced Equipment",
    content:
      "Equipped with AutoCAD, Etabs, Staad Pro, concrete mixers, vibrators, generators, and modern machinery.",
  },
  {
    title: "Registered & Empaneled",
    content:
      "Registered with Varanasi Vikas Pradhikaran, U.P. Awas Vikas Parishad, GST, Income Tax, and top banks.",
  },
];

const BlogSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const auto = setInterval(handleNext, 3000);
    return () => clearInterval(auto);
  }, []);

  const handleNext = () => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth + 20;
    const maxScroll =
      sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;

    sliderRef.current.scrollLeft >= maxScroll
      ? sliderRef.current.scrollTo({ left: 0, behavior: "smooth" })
      : sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.children[0].offsetWidth + 20;

    sliderRef.current.scrollLeft === 0
      ? sliderRef.current.scrollTo({
          left:
            sliderRef.current.scrollWidth -
            sliderRef.current.offsetWidth,
          behavior: "smooth",
        })
      : sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  return (
    <section className="ix-wrapper">
      <h2 className="ix-title">
        <span>Ins</span>ights
      </h2>

      <p className="ix-subtitle">
        Expert-driven construction solutions built on trust, quality, and
        experience.
      </p>

      <div className="ix-slider" ref={sliderRef}>
        {insightData.map((item, index) => (
          <article
            key={index}
            className="ix-card"
            style={{ "--ix-bg": `url(${ImagesApp.Bgall})` }}
          >
            <div className="ix-card-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ix-actions">
        <button onClick={handlePrev} className="ix-btn">
          ‹
        </button>

        <Link to="/blog" className="ix-link">
          View All Blogs
        </Link>

        <button onClick={handleNext} className="ix-btn">
          ›
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
