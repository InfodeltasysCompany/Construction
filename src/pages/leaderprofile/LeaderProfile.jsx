import React from "react";
import "./LeaderProfile.css";
import leaderImg from "../../assets/3.png"; // Replace with actual image

const LeaderProfile = () => {
  return (
    <section className="leader-section-centered">
      <div className="leader-container-centered">

        {/* Image Section */}
        <div className="leader-image-centered">
          <img src={leaderImg} alt="Er. Divyendu Singh" />
        </div>

        {/* Text Section */}
        <div className="leader-text-centered">
          <h2>K.D. Constructions & Consultant’s</h2>
          <h4>
            Structural Designers, Planners, Interior Designers, Valuers, Builders, Government Contractors (Civil/Mechanical)
          </h4>

          <p>
            Established in 2000 by <strong>Er. Divyendu Singh (M.Tech – Structure)</strong>, K.D. Constructions & Consultant’s provides comprehensive architectural, structural, and engineering services under one roof. We focus on delivering economical, functional, and sustainable solutions tailored to client needs.
          </p>

          <p>
            <strong>Vision:</strong> Excellence in construction and consultancy, leveraging expert teams and advanced project management.
          </p>

          <p>
            <strong>Registrations & Empanelments:</strong> Varanasi Vikash Pradhikaran, U.P. Awas Vikas Parishad, EPF, Labour Office U.P., GST Department, Income Tax Department, Punjab National Bank & Bank of India.
          </p>

          <p>
            <strong>Key Personnel & Equipment:</strong> Civil and architectural engineers, chartered accountants, skilled supervisors, and advanced machinery for quality construction.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LeaderProfile;
