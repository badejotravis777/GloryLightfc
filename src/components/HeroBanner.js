import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  const slides = [
    // { type: "image", src: process.env.PUBLIC_URL + "/images/img20.jpeg" },
    // { type: "image", src: process.env.PUBLIC_URL + "/images/background2.jpg" },
    // { type: "image", src: process.env.PUBLIC_URL + "/images/img19.jpeg"},
    // { type: "image", src: process.env.PUBLIC_URL + "/images/img20.jpeg"}, 
    // { type: "image", src: process.env.PUBLIC_URL + "/images/img18.jpeg"}, 
    { type: "image", src: process.env.PUBLIC_URL + "/images/upd1.png"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd2.png"}, 
                { type: "image", src: process.env.PUBLIC_URL + "/images/cm1.jpeg"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd26.png"},
        { type: "image", src: process.env.PUBLIC_URL + "/images/cm2.jpeg"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd28.png"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/cm3.jpeg"},
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd46.png"}, 
            { type: "image", src: process.env.PUBLIC_URL + "/images/cm4.jpeg"},
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd29.png"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/cm5.jpeg"},
        { type: "image", src: process.env.PUBLIC_URL + "/images/upd30.png"}, 
        { type: "image", src: process.env.PUBLIC_URL + "/images/cm6.jpeg"},


  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 

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
        <h1><b>Welcome to Glory Light FC</b></h1>
        <p><b>A Premier Football Club's Journey</b></p>
        <Link to="/register" className="btn">
          Join the Squad
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
