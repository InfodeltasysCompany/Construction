import React from 'react';
import './Certificate.css';
import certificateImage from '../assets/certificate.png'; // Update the path based on your project structure

const Certificate = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <div className="certificate-image">
          <img
            src={certificateImage}
            alt="ISO 9001:2015 Certificate"
          />
        </div>

        <div className="certificate-text">
          <span className="label">CERTIFICATE</span>
          <h2>ISO 9001:2015</h2>
          <p>
            Antonovich Group has Quality Management system certificate that proves our high level of services,
            compliance with modern standards of quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
