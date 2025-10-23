import React from "react";
import "./OfferSection.css";

import Img1 from "../../assets/unleashing.jpeg";
import Img2 from "../../assets/buildingsuccess.jpeg";
import Img3 from "../../assets/masteringart.jpeg";
import Img4 from "../../assets/masterplanning.jpeg";
import Img5 from "../../assets/transformingcityscape.jpeg";
import Img6 from "../../assets/elevatingspaces.jpeg";

const offers = [
  {
    id: 1,
    img: Img1,
    title:
      "Redefining Varanasi’s Architectural Landscape: How Our Construction Company Transforms the City.",
    desc: "Blending traditional aesthetics with modern design, we create spaces that reflect the spiritual essence and cultural heritage of Varanasi.",
  },
  {
    id: 2,
    img: Img2,
    title:
      "Building Varanasi’s Future through Strategic Planning and Sustainable Development.",
    desc: "Our team focuses on sustainable construction and city-friendly planning, ensuring every project contributes to a modern yet mindful Varanasi.",
  },
  {
    id: 3,
    img: Img3,
    title:
      "Mastering Project Management in Varanasi: Delivering Excellence with Precision and Passion.",
    desc: "From residential complexes to commercial hubs, our project management expertise ensures every structure in Varanasi is built with efficiency and integrity.",
  },
  {
    id: 4,
    img: Img4,
    title:
      "Master Planning for a Smarter Varanasi: Our Innovative Approach to Urban Development.",
    desc: "We specialize in designing master plans that integrate heritage conservation with modern infrastructure, shaping Varanasi’s growth story.",
  },
  {
    id: 5,
    img: Img5,
    title:
      "Transforming Varanasi’s Skyline: Blending Heritage with Modern Architecture.",
    desc: "From riverfront developments to urban landmarks, our projects redefine Varanasi’s skyline while preserving its timeless identity.",
  },
  {
    id: 6,
    img: Img6,
    title:
      "Elevating Living Standards in Varanasi: Innovative Spaces Crafted with Excellence.",
    desc: "We design and construct homes, offices, and public spaces that enhance comfort, sustainability, and the cultural charm of Varanasi.",
  },
];

const OfferSection = () => {
  return (
    <section className="varanasi-offer-section">
      <h2 className="varanasi-offer-title">Empowering Your Vision</h2>
      <div className="varanasi-offer-grid">
        {offers.map((offer) => (
          <article key={offer.id} className="varanasi-offer-card">
            <div className="varanasi-offer-image-wrapper">
              <img
                src={offer.img}
                alt={offer.title}
                className="varanasi-offer-img"
                loading="lazy"
              />
            </div>
            <div className="varanasi-offer-info">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
