// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import styled, { keyframes } from "styled-components";
import HeroBanner from '../components/HeroBanner';
import '../components/Home.css';
import secondPartImage from '../images/cm6.jpeg'; 
import galleryImage from '../images/cm1.jpeg';








const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;


const SponsorCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  text-decoration: none;
  color: #ffcc00;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
`;



const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />

      {/* Unleashing the Power Section */}
      <section className="power-section">
  <div className="power-content">
    <h1>Unleashing the Power</h1>
    <h2>
      Welcome to our football club's website, where we're redefining the sport one game at a time. 
      Explore our vision, mission, and the passion that drives us forward as we strive to become a 
      premier club.
    </h2>
    <button 
      className="discover-btn"
      onClick={() => window.location.href = 'About'} // Navigate to About Section
    >
      Discover Our Story
    </button>
  </div>
  <div className="power-image-card">
    <div className="styled-box">
      <img src={secondPartImage} alt="Football Matches" className="power-image" />
    </div>
    <div className="image-caption">
    </div>
  </div>
</section>

       {/* Our Training Facilities Section */}
       <section className="training-facilities">
        <div className="facilities-header">
          <h2>Our Training Facilities</h2>
          <p>
            Experience the state-of-the-art training grounds that hone our players' abilities. From cutting-edge equipment to expert coaching.
          </p>
        </div>
        <div className="facilities-cards">
          <div className="facility-card" onClick={() => window.location.href = 'Programs'}>
            <i className="facility-icon">🔔</i>
            <h3>Discover Our Offerings</h3>
            <p>
              Explore our comprehensive training programs tailored to your needs.
            </p>
          </div>
          <div className="facility-card" onClick={() => window.location.href = 'Register'}>
            <i className="facility-icon">🏆</i>
            <h3>Elevate Your Game</h3>
            <p>
              Join our elite training sessions and unlock your full potential.
            </p>
          </div>
          <div className="facility-card" onClick={() => window.location.href = 'Register'}>
            <i className="facility-icon">⚽</i>
            <h3>Embrace the Passion</h3>
            <p>
              Reach your pinnacle with our specially designed programs.
            </p>
          </div>
        </div>
      </section>

       {/* About Our Club Section */}
       <section className="about-club">
      <div className="about-header">
        <h2>About Our Club</h2>
        <p>
          Dive into the rich history and vision of our football club, where we're dedicated to fostering a community of passionate players, dedicated coaches, and enthusiastic supporters.
        </p>
      </div>
      <div className="club-cards">
        <div className="club-card"  onClick={() => window.location.href = 'About'}>
          <img
            src="/images/glorylogo.png"
            alt="Team Logo 1"
            className="club-logo"
          />
          <h3>Meet Our Team</h3>
          <p>Discover the talented individuals who make up the backbone of our club.</p>
        </div>

        <div className="club-card"  onClick={() => window.location.href = 'Gallery'}>
          <img
            src="/images/glorylogo.png"
            alt="Team Logo 2"
            className="club-logo"
          />
          <h3>Our Facilities</h3>
          <p>Explore the state-of-the-art training grounds and modern amenities that provide our players with the tools to excel.</p>
        </div>

        <div className="club-card"  onClick={() => window.location.href = 'Register'}>
          <img
            src="/images/glorylogo.png"
            alt="Team Logo 3"
            className="club-logo"
          />
          <h3>Facilities and Offerings</h3>
          <p>Immerse yourself in world-class facilities and comprehensive training programs that set our club apart.</p>
        </div>
      </div>
    </section>

       {/* Gallery Section */}
       <section className="gallery-section">
        <div className="gallery-content">
          <div className="gallery-image-container">
            <img src={galleryImage} alt="Gallery" className="gallery-image" />
          </div>
          <div className="gallery-text">
            <h2>Gallery</h2>
            <p>
              Relive the unforgettable moments captured from our matches, training sessions, and community events.
            </p>
            <button className="gallery-btn" onClick={() => window.location.href = 'Gallery'}>View Gallery</button>
          </div>
        </div>
      </section>

     
       

 {/* Follow Us Section */}
 <section className="follow-us-section">
        <div className="follow-container">
          <h2 className='fh2'>Follow Us</h2>
          <p className='fp'>Stay connected with our company's latest news and updates.</p>
          <button className="connect-btn" onClick={() => window.location.href = 'Contact'}>Connect Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <p>© 2024 glorylightfc, Inc. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/Career">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Connect With Us</h3>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://x.com/glorylightfc?s=21" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="www.instagram.com/glorylightfc" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://www.linkedin.com/company/glory-light-fc-football-academy/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer> 

       
    </div>
  );
};

export default Home;
