import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Siddharth Rai",
      position: "Director, Heritage Institute of Medical Sciences",
      company: "Heritage Hospitals Ltd.",
      project: "Hospital Building Construction",
      value: "₹15 Crores",
      image: "/client-heritage.jpg",
      rating: 5,
      text: "K.D. Constructions delivered our hospital project with exceptional professionalism. Their understanding of medical facility requirements and attention to detail in MEP systems was impressive. The project was completed on time despite complex requirements.",
      features: ["On-time Delivery", "Medical Grade Quality", "Budget Management"]
    },
    {
      id: 2,
      name: "Mr. Vineet Chopra",
      position: "Chairman, Aryan International School",
      company: "Aryan Education Group",
      project: "School Campus Development",
      value: "₹18 Crores",
      image: "/client-aryan.jpg",
      rating: 5,
      text: "Working with Er. Divyendu Singh and his team was a remarkable experience. They understood our vision for an educational institution and delivered beyond expectations. The campus stands as a testament to their engineering excellence.",
      features: ["Vision Alignment", "Quality Construction", "Timely Completion"]
    },
    {
      id: 3,
      name: "Taj Group Management",
      position: "Regional Director",
      company: "Taj Hotels",
      project: "Banquet Hall Construction",
      value: "₹4.1 Crores",
      image: "/client-taj.jpg",
      rating: 5,
      text: "The banquet hall construction at Taj Ganges exceeded our luxury standards. Their team's attention to acoustic design and premium finishes matched international hotel standards. A truly professional partnership.",
      features: ["Luxury Standards", "Acoustic Excellence", "Premium Finishes"]
    },
    {
      id: 4,
      name: "Mr. Sanjay Agrahari",
      position: "Managing Director",
      company: "Pracheta Constructive Pvt. Ltd.",
      project: "Multiple Residential Projects",
      value: "₹50+ Crores",
      image: "/client-pracheta.jpg",
      rating: 5,
      text: "We've partnered with K.D. Constructions for multiple residential projects. Their structural expertise and project management have been invaluable. They consistently deliver quality that earns buyer trust.",
      features: ["Structural Expertise", "Trusted Partnership", "Quality Assurance"]
    },
    {
      id: 5,
      name: "Bank of India",
      position: "Chief Manager",
      company: "Valuation Department",
      project: "Property Valuation Services",
      value: "Various Projects",
      image: "/client-bank.jpg",
      rating: 5,
      text: "As empaneled valuers, K.D. Constructions has provided accurate and reliable property valuations. Their technical knowledge and market understanding make them trusted advisors for our lending decisions.",
      features: ["Technical Accuracy", "Market Knowledge", "Reliable Service"]
    }
  ];

  const projectsStats = [
    { number: "36+", label: "Projects Completed" },
    { number: "₹150+", label: "Crores Project Value" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "20+", label: "Repeat Clients" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial(prev =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Client Stories</span>
          <h2>Trusted by Industry Leaders</h2>
          <p>Discover why leading organizations choose K.D. Constructions for their landmark projects</p>
        </div>

        <div className="testimonials-content">
          {/* Main Testimonial */}
          <div className="testimonial-main">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>

              <div className="testimonial-text">
                <p>{currentTestimonial.text}</p>
              </div>

              <div className="rating">
                {renderStars(currentTestimonial.rating)}
              </div>

              <div className="client-info">
                <div className="client-image">
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} />
                </div>
                <div className="client-details">
                  <h4 className="client-name">{currentTestimonial.name}</h4>
                  <p className="client-position">{currentTestimonial.position}</p>
                  <p className="client-company">{currentTestimonial.company}</p>
                </div>
              </div>

              <div className="project-info">
                <div className="project-detail">
                  <span className="label">Project</span>
                  <span className="value">{currentTestimonial.project}</span>
                </div>
                <div className="project-detail">
                  <span className="label">Value</span>
                  <span className="value">{currentTestimonial.value}</span>
                </div>
              </div>

              <div className="project-features">
                {currentTestimonial.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Navigation */}
          <div className="testimonials-nav">
            <div className="nav-header">
              <h3>Client Reviews</h3>
              <div className="nav-controls">
                <button
                  className="nav-btn prev"
                  onClick={() => {
                    setActiveTestimonial(prev =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    );
                    setIsAutoPlaying(false);
                  }}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  className="nav-btn next"
                  onClick={() => {
                    setActiveTestimonial(prev =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    );
                    setIsAutoPlaying(false);
                  }}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>

            <div className="testimonials-list">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-preview ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                >
                  <div className="preview-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="preview-content">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                    <div className="preview-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="progress-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            {projectsStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Ready to Become Our Next Success Story?</h3>
            <p>Join our satisfied clients and experience the K.D. Constructions difference</p>
            <div className="cta-buttons">
              <Link to="/contactform" className="cta-btn primary">
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
              <Link to="/about" className="cta-btn secondary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;