import React, { useRef, useEffect } from "react";
import "./BlogSection.css";
import blogBg from "../../assets/1.png"; // Replace with your image path

const blogs = [
  {
    title: "Established Expertise Since 2000",
    content: "Founded by Er. Divyendu Singh, delivering architectural and engineering solutions across government, semi-government, and private projects."
  },
  {
    title: "Comprehensive Services",
    content: "Providing Structural Design, Planning, Interior Design, Valuation, and Construction services under one roof."
  },
  {
    title: "Skilled Team",
    content: "A technically competent team including civil engineers, architects, charted accountant, and supervisory staff ensures high-quality execution."
  },
  {
    title: "Advanced Equipment",
    content: "Equipped with AutoCAD, Etabs, Staad Pro, concrete mixers, vibrators, generators, and other modern construction machinery for precise work."
  },
  {
    title: "Registered & Empaneled",
    content: "Registered with Varanasi Vikash Pradhikaran, U.P. Awas Vikas Parishad, GST, Income Tax Department, and empaneled with top banks as a registered valuer."
  }
];

const BlogSection = () => {
  const carouselRef = useRef(null);

  // Auto scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 20; // 20 = gap
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;

      if (carouselRef.current.scrollLeft >= maxScroll) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" }); // loop back to start
      } else {
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 20;
      if (carouselRef.current.scrollLeft === 0) {
        // loop to end
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="blog-section">
      <h2 className="blog-title">
        <span className="highlight">Blo</span>gs
      </h2>
      <p className="blog-subtitle">
        We are leading cement manufacturers with a wide range of solutions crafted by experts
        keeping in mind a home-builder’s needs.
      </p>

      <div className="carousel-container" ref={carouselRef}>
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="blog-card"
            style={{ "--bg-image": `url(${blogBg})` }}
          >
            <div className="card-content">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="nav-btn" onClick={scrollPrev}>&lt;</button>
        <button className="view-all-btn">View All Blogs</button>
        <button className="nav-btn" onClick={scrollNext}>&gt;</button>
      </div>
    </section>
  );
};

export default BlogSection;
