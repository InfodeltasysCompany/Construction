import React from "react";
import "./LeaderProfile.css";
import { ImagesApp } from "../../assets/ImagesApp";

const LeaderProfile = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        
        {/* Founder Image */}
        <div className="founder-image">
          <img src={ImagesApp.AboutImg} alt="Er. Divyendu Singh" />
        </div>

        {/* Founder Information */}
        <div className="founder-info">
          <h3>Founder & Managing Director</h3>
          <h2>Er. Divyendu Singh</h2>
          <p className="qualification">M.Tech – Structural Engineering</p>
          
          <div className="founder-details">
            <p>
              Established <strong>K.D. Constructions & Consultants Pvt. Ltd.</strong> in 2000 
              with a vision to create a construction firm that stands on the pillars of 
              integrity, quality, and timely delivery.
            </p>
            
            <p>
              With over <strong>25 years of experience</strong> in structural engineering 
              and construction management, he has built the company into a trusted name 
              in government contracts and private construction projects.
            </p>
            
            <p>
              His leadership ensures every project combines <strong>structural excellence</strong> 
              with <strong>cost-effective solutions</strong>, maintaining the highest standards 
              of quality and client satisfaction.
            </p>
          </div>

          {/* Contact/CTA */}
          <div className="founder-contact">
            <p className="contact-note">Leading with expertise since 2000</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeaderProfile;