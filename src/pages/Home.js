// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import styled, { keyframes } from "styled-components";
import HeroBanner from '../components/HeroBanner';
import '../components/Home.css';
import secondPartImage from '../images/second-part.png'; 
import galleryImage from '../images/gallery-image.png';
import player1 from '../images/founder.png'; 
import player2 from '../images/player2.png';
import player3 from '../images/player3.png';
import player5 from '../images/player5.png';
import player6 from '../images/player6.png';
// import player5 from '../images/player5.png';

const SponsorsContainer = styled.section`
  padding: 40px 20px;
  background: #000;
  color: #ffcc00;
  font-family: "Arial", sans-serif;
`;

const SponsorsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const SponsorsSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  animation: ${scrollAnimation} 20s linear infinite;
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


const SponsorsSection = () => {
  const sponsors = [
    { name: "Psychoworld", logo: "/images/psychoworld.png", website: "Psychowrld.site" },
    { name: "Chasescroll", logo: "/images/chasescrollr.png", website: "www.chasescroll.com" },
    { name: "Travrick", logo: "/images/reallogot.png", website: "https://companyC.com" },
  ];

  return (
    <SponsorsContainer>
      <SponsorsTitle>Our Sponsors</SponsorsTitle>
      <SponsorsSubtitle>We are currently seeking more sponsors. Interested companies, please get in touch!</SponsorsSubtitle>
      <SliderWrapper>
        <Slider>
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} />
              <h3>{sponsor.name}</h3>
            </SponsorCard>
          ))}
        </Slider>
      </SliderWrapper>
    </SponsorsContainer>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />

      {/* Unleashing the Power Section */}
      <section className="power-section">
        <div className="power-content">
          <h1>Unleashing the Power </h1>
          <h2>
            Welcome to our football club's website, where we're redefining the sport one game at a time. 
            Explore our vision, mission, and the passion that drives us forward as we strive to become a 
            premier club.
          </h2>
          <button className="discover-btn">Discover Our Story</button>
        </div>
        <div className="power-image-card">
          <div className="styled-box">
            <img src={secondPartImage} alt="Football Matches" className="power-image" />
          </div>
          <div className="image-caption">
            <h2>Witness the Thrill of our Football Matches</h2>
            <h2>
              Immerse yourself in the electrifying atmosphere as our talented athletes take the field.
            </h2>
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
          <div className="facility-card">
            <i className="facility-icon">🔔</i>
            <h3>Discover Our Offerings</h3>
            <p>
              Explore our comprehensive training programs tailored to your needs.
            </p>
          </div>
          <div className="facility-card">
            <i className="facility-icon">🏆</i>
            <h3>Elevate Your Game</h3>
            <p>
              Join our elite training sessions and unlock your full potential.
            </p>
          </div>
          <div className="facility-card">
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
          <div className="club-card">
            <img
              src="/images/glorylogo.png"
              alt="Team Logo 1"
              className="club-logo"
            />
            <h3>Meet Our Team</h3>
            <p>
              Discover the talented individuals who make up the backbone of our club.
            </p>
          </div>
          <div className="club-card">
            <img
              src="/images/glorylogo.png"
              alt="Team Logo 2"
              className="club-logo"
            />
            <h3>Our Facilities</h3>
            <p>
              Explore the state-of-the-art training grounds and modern amenities that provide our players with the tools to excel.
            </p>
          </div>
          <div className="club-card">
            <img
              src="/images/glorylogo.png"
              alt="Team Logo 3"
              className="club-logo"
            />
            <h3>Facilities and Offerings</h3>
            <p>
              Immerse yourself in world-class facilities and comprehensive training programs that set our club apart.
            </p>
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
            <button className="gallery-btn">View Gallery</button>
          </div>
        </div>
      </section>


       {/* Contact Us Section */}
       <section className="contact-us-section">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            Get in touch with our team to learn more about our club, our programs, and how you can join the journey.
          </p>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <img src={player1} alt="Player 1" className="player-image" />
            <h2>Edward-Ngwu Christian</h2>
            <h3>CEO/Founder</h3>
            <p>Christianedward665@gmail.com</p>
          </div>
          <div className="contact-card">
            <img src={player2} alt="Player 2" className="player-image" />
            <h2>Favour oyeindipamo </h2>
            <h3>Creative Thinker</h3>
            <p>Favourbonny92@gmail.com</p>
          </div>
          <div className="contact-card">
            <img src={player3} alt="Player 3" className="player-image" />
            <h2>Kalu Chioma</h2>
            <h3>social media manager</h3>
            <p>chiomakalu886@gmail.com</p>
          </div>
          <div className="contact-card">
            <img src={player5} alt="Player 4" className="player-image" />
            <h2>Amarachi Favour Moses</h2>
            <h3>Lead HR</h3>
            <p>favouramaofficial@gmail.com</p>
          </div>

          <div className="contact-card">
            <img src={player6} alt="Player 4" className="player-image" />
            <h2> Adefolarin Oludele</h2>
            <h3>Human Resource Manager</h3>
            <p>oludeleadefolarin@gmail.com</p>
          </div>

        </div>
      </section>
          {/* Sponsors Section (Added Here) */}
          <SponsorsSection />

 {/* Follow Us Section */}
 <section className="follow-us-section">
        <div className="follow-container">
          <h2>Follow Us</h2>
          <p>Stay connected with our company's latest news and updates.</p>
          <button className="connect-btn">Connect Now</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <p>© 2024 Travrick, Inc. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/contact">Contact</a></li>
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
