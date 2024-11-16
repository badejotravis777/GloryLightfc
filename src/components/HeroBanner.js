// src/components/HeroBanner.js
import React from 'react';
import { Link } from 'react-router-dom';  // Add this line
import './HeroBanner.css';

const HeroBanner = () => {
    return (
      <section
        className="hero-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})`
        }}
      >
        <div className="hero-content">
          <h1>Welcome to Glory Light FC</h1>
          <p>A Premier Football Club's Journey</p>
          <Link to="/register" className="btn">Join the Squad</Link>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;

