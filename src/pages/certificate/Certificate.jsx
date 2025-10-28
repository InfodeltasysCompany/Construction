import React from "react";
import "./Certificate.css";

// Import images
import udyamCertificateImg from "../../assets/udyam_certificate_img.jpg";
import gstCertificateImg from "../../assets/gst_certificate_img.png";

// Import PDFs
import udyamPDF from "../../assets/udyam_certificate.pdf";
import gstPDF from "../../assets/gst_certificate.pdf";

// ✅ Import your single main download PDF
import phoneListPDF from "../../assets/all_Certificate.pdf";

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
    img: udyamCertificateImg,
    pdf: udyamPDF,
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
    img: gstCertificateImg,
    pdf: gstPDF,
  },
];

const Certificate = () => {
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
                href={cert.pdf} 
                download 
                className="download-btn"
                aria-label={`Download ${cert.title} PDF`}
              >
                ⬇ Download PDF
              </a>
            </div>
            <div className="award-image">
              <img 
                src={cert.img} 
                alt={cert.title} 
                loading="lazy"
              />
            </div>
          </div>
        ))}

        {/* ✅ Third Button for Single PDF Download */}
        <div className="bottom-btn-container">
          <a 
            href={phoneListPDF} 
            download 
            className="simple-btn"
            aria-label="Download All Certificates"
          >
            ⬇ Download All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificate;