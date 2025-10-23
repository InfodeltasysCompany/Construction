// src/pages/hoteldetail/HotelDetail.js
import React from "react";
import "./HotelDetail.css";

const HotelDetail = () => {
  const hotelInfo = {
    name: "K.D. Grand Hotel & Resorts",
    tagline: "Luxury Redefined in Varanasi",
    description:
      "Experience unparalleled luxury and authentic Indian hospitality at K.D. Grand Hotel & Resorts. Located in the spiritual capital of India, we offer world-class amenities with traditional warmth.",
    established: "2015",
    rooms: "45",
    rating: "4.8/5",
    location: "Varanasi, Uttar Pradesh",
  };

  const hotelFeatures = [
    { icon: "🛏️", title: "Luxury Accommodation", description: "10 elegantly designed rooms and suites with modern amenities." },
    { icon: "🍽️", title: "Multi-Cuisine Restaurant", description: "Saffron Spice - authentic Indian, Continental, and Chinese cuisine." },
    { icon: "💆", title: "Spa & Wellness", description: "Ayurvedic spa treatments and wellness programs." },
    { icon: "💼", title: "Business Center", description: "Meeting rooms and conference facilities." },
  ];

  const amenities = [
    { icon: "🚗", name: "Free Parking" },
    { icon: "📶", name: "High-Speed WiFi" },
    { icon: "♿", name: "Accessible Rooms" },
    { icon: "🎮", name: "Entertainment" },
  ];

  const specialOffers = [
    { title: "Weekend Getaway", description: "20% off on all room bookings from Friday to Sunday", code: "WEEKEND20", validUntil: "Ongoing" },
    { title: "Early Bird Special", description: "Book 30 days in advance and get 25% discount", code: "EARLY25", validUntil: "Ongoing" },
  ];

  return (
    <section className="hotel-detail-section">
      <div className="container">
        {/* Header */}
        <div className="hotel-header">
          <span className="hotel-badge">🏨 OUR HOTEL</span>
          <h1>{hotelInfo.name}</h1>
          <p className="hotel-tagline">{hotelInfo.tagline}</p>
          <p className="hotel-description">{hotelInfo.description}</p>
        </div>

        {/* Stats */}
        <div className="hotel-stats">
          <div className="stat-item">
            <div className="stat-number">{hotelInfo.established}</div>
            <div className="stat-label">Established</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{hotelInfo.rooms}</div>
            <div className="stat-label">Rooms</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{hotelInfo.rating}</div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">📍</div>
            <div className="stat-label">{hotelInfo.location}</div>
          </div>
        </div>

        {/* Features */}
        <div className="features-section">
          <h2>Hotel Features & Amenities</h2>
          <div className="features-grid">
            {hotelFeatures.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="amenities-section">
          <h2>All Amenities</h2>
          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <div key={i} className="amenity-item">
                <div className="amenity-icon">{a.icon}</div>
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offers */}
        <div className="offers-section">
          <h2>Special Offers</h2>
          <div className="offers-grid">
            {specialOffers.map((offer, i) => (
              <div key={i} className="offer-card">
                <div className="offer-badge">HOT DEAL</div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-details">
                  <div className="offer-code">
                    <span>Use Code:</span> <strong>{offer.code}</strong>
                  </div>
                  <div className="offer-validity">Valid until: {offer.validUntil}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="hotel-contact-section">
          <div className="hotel-contact-container">
            <div className="hotel-contact-header">
              <h2>Ready to Experience Luxury?</h2>
              <p>Book your stay at K.D. Grand Hotel & Resorts for an unforgettable Varanasi experience.</p>
            </div>

            <div className="hotel-contact-methods">
              <div className="hotel-contact-method">
                <div className="hotel-contact-icon">📞</div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
                <span className="hotel-contact-note">24/7 Support</span>
              </div>

              <div className="hotel-contact-method">
                <div className="hotel-contact-icon">📧</div>
                <h4>Email Us</h4>
                <p>reservations@kdgrandhotel.com</p>
                <span className="hotel-contact-note">Response within 2 hours</span>
              </div>

              <div className="hotel-contact-method">
                <div className="hotel-contact-icon">💬</div>
                <h4>Live Chat</h4>
                <p>Available 8AM - 10PM</p>
                <span className="hotel-contact-note">Instant Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetail;
