import React from "react";
import "./AboutUs.css";
import WhoWeAre from "../../pages/whowe/WhoWeAre";
import Mission from "../../pages/mission/Mission";
import ServicesSection from "../../pages/services/ServicesSection";
import Certificate from "../../pages/certificate/Certificate";

// Import team images
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/1.png";
import img5 from "../../assets/2.png";
import img6 from "../../assets/3.png";

import Leaderprofile from "../../pages/leaderprofile/LeaderProfile";
import ProjectsHandled from "../../pages/projectshandled/ProjectsHandled";
import CTASection from "../../pages/ctasection/CTASection";

const AboutUs = () => {
  const teamImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      {/* ---------------- Team Gallery Section ---------------- */}
      <section className="team-gallery">
        <h2 className="team-gallery-title">ABOUT US</h2>
        <div className="team-gallery-wrapper">
          {teamImages.map((image, index) => (
            <div className="team-card" key={index}>
              <img src={image} alt={`Team ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

     
{/* ---------------- Company Intro Section ---------------- */}
<section className="company-intro">
  <div className="company-intro-container">
    <h1>
      K.D. Constructions & Consultant’s <br />
      Engineers, Planners & Contractors
    </h1>
    <p>
      Established in <strong>2000</strong>, K.D. Constructions & Consultant’s has
      built a reputation as one of Varanasi’s trusted names in{" "}
      <strong>structural design, architectural planning, interior solutions, and
      civil–mechanical works</strong>. Guided by Er. Divyendu Singh
      (M.Tech–Structure), the firm provides complete consultancy and contracting
      services under one roof—ensuring innovative designs, precise execution, and
      sustainable solutions. Over the years, we have successfully delivered{" "}
      <strong>government, semi-government, public, and private projects</strong>,
      combining technical expertise with a client-first approach. With a vision
      to create structures that are <strong>economical, functional, and
      timeless</strong>, we continue to shape spaces with excellence and
      integrity.
    </p>
  </div>
</section>
  

  <WhoWeAre />

  <Mission />

  <ServicesSection />

  <Certificate />


  <Leaderprofile />

  <ProjectsHandled />
  
  <CTASection />
    </div>
  );
};

export default AboutUs;
