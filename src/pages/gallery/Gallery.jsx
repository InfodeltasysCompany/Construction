import React, { useState } from "react";
import "./Gallery.css";
import { ImagesApp } from "../../assets/ImagesApp";

const images = [
  ImagesApp.Gallery01,
  ImagesApp.Gallery02,
  ImagesApp.Gallery03,
  ImagesApp.Gallery04,
  ImagesApp.Gallery05,
  ImagesApp.Gallery06,
  ImagesApp.Gallery07,
  ImagesApp.Gallery08,
  ImagesApp.Gallery09,
  ImagesApp.Gallery10,
  ImagesApp.Gallery11,
  ImagesApp.Gallery12,
  ImagesApp.Gallery13,
  ImagesApp.Gallery14,
  ImagesApp.Gallery15,
  ImagesApp.Gallery16,
  ImagesApp.Gallery17,
  ImagesApp.Gallery18,
  ImagesApp.Gallery19,
  ImagesApp.Gallery20,
  ImagesApp.Gallery21,
  ImagesApp.Gallery22,
  ImagesApp.Gallery23,
  ImagesApp.Gallery24,
  ImagesApp.Gallery25,
  ImagesApp.Gallery26,
  ImagesApp.Gallery27,
  ImagesApp.Gallery28,
  ImagesApp.Gallery29,
  ImagesApp.Gallery30,
  ImagesApp.Gallery31,
  ImagesApp.Gallery32,
  ImagesApp.Gallery33,
  ImagesApp.Gallery34,
  ImagesApp.Gallery35,
  ImagesApp.Gallery36,
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeViewer = () => setOpen(false);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-wrapper">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => openViewer(index)}
              >
                <img src={img} alt={`gallery-${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Viewer */}
      {open && (
        <div className="gallery-lightbox">
          {/* Image Counter */}
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Close */}
          <span className="close-btn" onClick={closeViewer}>
            ×
          </span>

          {/* Left Button */}
          {currentIndex > 0 && (
            <button className="nav-btn left" onClick={prevImage}>
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Fullscreen"
            className="lightbox-image"
          />

          {/* Right Button */}
          {currentIndex < images.length - 1 && (
            <button className="nav-btn right" onClick={nextImage}>
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
