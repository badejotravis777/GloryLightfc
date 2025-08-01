import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import TestimonialsSection from "../components/TestimonialsSection";




const AboutContainer = styled.div`
  padding: 40px;
  background: linear-gradient(to bottom, #000, #333);
  font-family: 'Arial', sans-serif;
  color: #ffd700;
`;



const Section = styled.section`
  margin: 40px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #111;

  h2 {
    font-size: 1.8rem;
    color: #ffd700;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 10px 0;
  }
`;

const Highlight = styled.span`
  color: #ffd700;
  font-weight: bold;
`;

const FounderImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 768px) {
    img {
      opacity: 1 !important;
      transform: scale(1) !important;
    }
  }
  
  

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.5s, opacity 0.5s;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'scale(1)' : 'scale(0)')};
    
  }

  a {
    position: absolute;
    bottom: -20px;
    right: 50%;
    transform: translateX(50%);
    color: #ffd700;
    font-size: 1.5rem;
    transition: color 0.3s;
  }

  a:hover {
    color: #fff;
  }
`;

const TeamGrid = styled.section`
  text-align: center;
  background: #111;
   color: #ffd700;
  padding: 3rem 1rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #ffd700;
  }

  .team-grid {
    display: flex;
    flex-wrap: wrap; /* Allow wrapping to next row */
    gap: 1.5rem; /* Spacing between cards */
    justify-content: center; /* Center-align cards horizontally */
    align-items: flex-start; /* Align cards to the top */
    padding: 3rem 1rem;
  }

  .team-card {
    perspective: 1000px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    height: 350px;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
    color: #ffd700;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      color: #ffd700;
    }

    &.active .inner {
      transform: rotateY(180deg);
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .front {
      background: #222;

      img {
        width: 100px;
        height: 120px;
        border-radius: 70%;
        object-fit: cover;
        margin-bottom: 1rem;
        border: 3px solid #ffd700;
      }

      h3 {
        margin: 0.5rem 0;
        font-size: 1.2rem;
        color: #ffd700;
      }

      .icons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        a {
          color: #ffd700;
          font-size: 1.5rem;
          transition: color 0.3s;

          &:hover {
            color: #ffd700;
          }
        }
      }
    }

    .back {
       background: #ffd700;
      color: #ffd700;
      transform: rotateY(180deg);
      padding: 1.5rem;
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
const Footer = styled.footer`
.footer {
  background-color: #2e2e2e; /* Dark Gray */
  color: #fff;
  padding: 50px 20px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo p {
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: #ccc;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
}

.footer-column {
  text-align: left;
  margin: 10px;
  flex: 1 1 30%;
}

.footer-column h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #ffd700; /* Yellow */
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: #aaa; /* Light Gray */
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 1368px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
  }
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('founder-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <AboutContainer>
        <Section id="about">
          <h2>About <Highlight>Glory Light FC</Highlight></h2>
          <p>
            Founded in 2024, Glory Light FC Football Academy by Edward-Ngwu Christian was created to nurture young football talents in ikorodu  and beyond. Our academy emphasizes discipline, integrity, and teamwork. With qualified coaches and a supportive environment, we ensure each player is given the tools they need to succeed on the pitch and in their communities.
          </p>
        </Section>

        <Section id="founder-section">
          <h2>The Founder’s Story</h2>
          <p>
            <Highlight>Edward-Ngwu Christian</Highlight>, the visionary founder of Glory Light FC, created this football academy driven by his unwavering passion for the beautiful game and a heartfelt commitment to nurturing young talent. From an early age, Christian recognized football as more than just a sport. It is a powerful tool to inspire, unite, and transform lives. His vision for Glory Light FC was born out of a desire to create opportunities for aspiring athletes, providing them with the skills, discipline, and mentorship needed to excel both on and off the field. With a steadfast belief in the potential of young players, he envisioned the academy as a haven where raw talent could be honed, values such as teamwork, perseverance, and leadership could be instilled, and dreams could take flight. Through Glory Light FC, Edward aims not only to produce skilled footballers but also to shape individuals who will become positive forces in their communities and ambassadors of hope, resilience, and excellence. His commitment to fostering the next generation of football stars is matched only by his dedication to their holistic development as future leaders and role models in society.
          </p>
          <FounderImage isVisible={isVisible}>
            <img src="/images/founderr.png" alt="Founder" />
            <a href="https://www.linkedin.com/in/christianedward-ngwu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </FounderImage>
        </Section>

        
              {/* Timeline Section */}
      <Section id="journey">
        <h2>Our Journey</h2>
        <Section>
          <div className="event">
            <h3>2024 - Founded</h3>
            <p>Glory Light FC was officially launched with the vision of empowering young athletes.</p>
          </div>
          <div className="event">
            <h3>2025 - First Championship Win</h3>
            <p>Our academy team won its first regional championship, showcasing our players' growth.</p>
          </div>
          <div className="event">
            <h3>2025 - Expanded Facilities</h3>
            <p>We opened new state-of-the-art training facilities to support our growing community.</p>
          </div>
        </Section>
      </Section>

      <TestimonialsSection />

      
      </AboutContainer>

      <Footer>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <p>© 2024 glorylightfc, Inc. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                   <li><a href="/Career">Careers</a></li>
                  <li><a href="/programs">Programs</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Connect With Us</h3>
                <ul>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
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
      </Footer>
    </>
  );
};

export default About;