import React from "react";
import "./ConstructionCompanies.css";

// Import your images
import Img1 from "../../assets/1.png"; 
import Img2 from "../../assets/2.png"; 

const ConstructionCompanies = () => {
  return (
    <div className="companies-container">
      
      {/* Card 1 */}
      <div className="company-card">
        <div className="company-image">
          <img src={Img1} alt="Construction Companies India" />
        </div>
        <div className="company-text">
          <h2 className="company-header">Top 20 Construction Companies in Varanasi & India</h2>
          <p>
            Over 25 years of experience in structural design, civil, mechanical, and interior works across Varanasi and other regions of India.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="company-card reverse">
        <div className="company-image">
          <img src={Img2} alt="Best Construction Companies India" />
        </div>
        <div className="company-text">
          <h2 className="company-header">Excellence in Construction & Consultancy</h2>
          <p>
            K.D. Constructions & Consultant’s is registered with multiple authorities in Varanasi, providing high-quality architectural, structural, and civil solutions. 
            Our team ensures sustainable, economical, and timely delivery of projects for government, semi-government, and private clients.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ConstructionCompanies;
