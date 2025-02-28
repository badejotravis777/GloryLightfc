import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  // Define your slides—each can be an image or a video.
  // For videos, set type to "video" and use a <video> element.
  const slides = [
    { type: "image", src: process.env.PUBLIC_URL + "/images/background.jpg" },
    { type: "image", src: process.env.PUBLIC_URL + "/images/background2.jpg" },
    { type: "video", src: process.env.PUBLIC_URL + "/images/background3.mp4" },
    // { type: "video", src: process.env.PUBLIC_URL + "/videos/video1.mp4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <section className="hero-banner">
      {current.type === "image" ? (
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${current.src})` }}
        ></div>
      ) : (
        <video className="hero-background" autoPlay muted loop>
          <source src={current.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="hero-content">
        <h1>Welcome to Glory Light FC</h1>
        <p>A Premier Football Club's Journey</p>
        <Link to="/register" className="btn">
          Join the Squad
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
