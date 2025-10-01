import React from "react";
import "./OfferSection.css";

// Example images (replace with your own paths)
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/1.png";
import Img5 from "../../assets/2.png";
import Img6 from "../../assets/2.png";

const offers = [
  {
    id: 1,
    img: Img1,
    date: "01.01.2025",
    author: "Admin",
    title: "Unleashing the Power of Architecture: How Our Construction Company Transforms...",
    desc: "Advanced concepts, efficient features and functional spaces designed with perfection...",
  },
  {
    id: 2,
    img: Img2,
    date: "03.01.2025",
    author: "Admin",
    title: "Building Success through Strategic Planning: Our Construction Company’s...",
    desc: "We help businesses realize their development objectives, from long-term plans...",
  },
  {
    id: 3,
    img: Img3,
    date: "07.01.2025",
    author: "Admin",
    title: "Mastering the Art of Project Management: How Our Construction Company Delivers...",
    desc: "Effective project management, planning, and execution to achieve client goals...",
  },
  {
    id: 4,
    img: Img4,
    date: "10.01.2025",
    author: "Admin",
    title: "Unlocking the Potential of Master Planning: Our Construction Company’s Approach...",
    desc: "From feasibility studies to execution, we deliver comprehensive master planning solutions...",
  },
  {
    id: 5,
    img: Img5,
    date: "12.01.2025",
    author: "Admin",
    title: "Transforming the Cityscape: Our Construction Company in Dubai...",
    desc: "A perfect blend of architectural elegance and modern engineering shaping the Dubai skyline...",
  },
  {
    id: 6,
    img: Img6,
    date: "15.01.2025",
    author: "Admin",
    title: "Elevating Spaces to New Heights: Our Dubai Construction Company’s Award...",
    desc: "Innovative designs and award-winning interiors crafted with excellence...",
  },
];

const OfferSection = () => {
  return (
    <div className="offer-section">
      <h2 className="section-title">We can offer you</h2>
      <div className="offer-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <div className="offer-info">
              <div className="offer-meta">
                <span>{offer.date}</span> | <span>{offer.author}</span>
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
