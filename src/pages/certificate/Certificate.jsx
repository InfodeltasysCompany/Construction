import React from "react";
import "./Certificate.css";

import udyamCertificate from "../../assets/1.png";
import gstCertificate from "../../assets/2.png";

const certificates = [
  {
    id: 1,
    title: "Udyam Registration Certificate",
    desc: (
      <>
        K D Construction & Consultants has been officially registered under the{" "}
        <strong>Ministry of Micro, Small and Medium Enterprises (MSME)</strong>,
        Government of India.
      </>
    ),
    details: (
      <>
        <strong>Registration No:</strong> UDYAM-UP-75-0023191 <br />
        <strong>Date of Registration:</strong> 24/03/2022 <br />
        <strong>Type of Enterprise:</strong> Micro (Services)
      </>
    ),
    img: udyamCertificate,
    pdfName: "Udyam-Certificate.pdf",
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    desc: (
      <>
        K D Construction & Consultants is registered under the{" "}
        <strong>Goods and Services Tax (GST) Act, 2017</strong>.
      </>
    ),
    details: (
      <>
        <strong>Registration No:</strong> 09ANKPS3888F1ZA <br />
        <strong>Legal Name:</strong> Divyendu Singh <br />
        <strong>Date of Issue:</strong> 22/06/2023
      </>
    ),
    img: gstCertificate,
    pdfName: "GST-Certificate.pdf",
  },
];

const Certificate = () => {
  // Function to download all certificates
  const downloadAllCertificates = () => {
    certificates.forEach((cert) => {
      const link = document.createElement("a");
      link.href = cert.img;
      link.download = cert.pdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <section className="award-section">
      <div className="award-container">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className={`award-box ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <div className="award-text">
              <span className="label">CERTIFICATE</span>
              <h2>{cert.title}</h2>
              <p>{cert.desc}</p>
              <p>{cert.details}</p>
              <a
                href={cert.img}
                download={cert.pdfName}
                className="download-btn"
              >
                Download PDF
              </a>
            </div>
            <div className="award-image">
              <img src={cert.img} alt={cert.title} />
            </div>
          </div>
        ))}

        {/* ✅ Download All Button at Bottom */}
        <div className="download-all-container">
          <button onClick={downloadAllCertificates} className="download-all-btn">
            ⬇ Download All Certificates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
