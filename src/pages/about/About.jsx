import React from 'react';
import './About.css';
import aboutImage from '../../assets/1.png'; // Replace with your actual image

const AboutUs = () => {
  return (
    <section className="about-us-section" aria-labelledby="about-heading">
      <div className="about-us-content">

        {/* Image Content */}
        <div className="image-content">
          <img 
            src={aboutImage} 
            alt="K.D. Constructions & Consultant’s" 
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-content">
          <h2 id="about-heading">K.D. Constructions & Consultant’s</h2>
          
          <p>
            <strong>K.D. Constructions & Consultants</strong> is a premier firm based in 
            Varanasi, India, specializing in structural design, planning, interior design, 
            and civil/mechanical consultancy.
          </p>
          <p>
            Established in 2000 by <strong>Er. Divyendu Singh</strong>, the firm focuses 
            on analyzing requirements and delivering cost-effective solutions without 
            compromising quality. We provide architectural and engineering services under 
            one roof, ensuring complete satisfaction for government, semi-government, 
            public, and private projects.
          </p>
          <p>
            Over the years, <strong>Er. Divyendu Singh</strong> has successfully completed 
            numerous consultancy works in architecture and engineering, consistently 
            fulfilling client needs with precision and integrity.
          </p>

          <p className="signature">
            <strong>Er. Divyendu Singh</strong><br />
            <span>
              Founder & Chief Consultant of K.D. Constructions & Consultants, Varanasi
            </span>
          </p>

          {/* Modern CTA Button */}
          <button className="modern-btn" aria-label="Read more about K.D. Constructions">
            Read More <span className="arrow">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
