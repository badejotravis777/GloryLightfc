import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const ProgramsContainer = styled.div`
  padding: 40px;
  background: #000; /* Black background */
  color: #fff; /* White text for contrast */
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
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
`;


const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const ProgramCard = styled.div`
  background: #222; /* Dark background for card */
  border: 2px solid #ffcc00; /* Yellow border */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(255, 204, 0, 0.3);
  }
`;

const ProgramTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffcc00; /* Yellow */
  margin-bottom: 15px;
`;

const ProgramDescription = styled.p`
  font-size: 1rem;
  color: #ccc; /* Light gray text for readability */
  line-height: 1.6;
`;

const Programs = () => {
  return (
    <>
      <ProgramsContainer>
        <Header>Our Training Programs</Header>
        <ProgramGrid>
          <ProgramCard>
            <ProgramTitle>Beginner Level</ProgramTitle>
            <ProgramDescription>
              Perfect for young athletes starting their football journey, this program emphasizes foundational skills
              such as footwork, stamina building, and basic ball control techniques.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramTitle>Intermediate Level</ProgramTitle>
            <ProgramDescription>
              Designed for players who have mastered the basics, this program focuses on tactical gameplay, effective
              teamwork, and improving ball-handling skills to prepare players for competitive matches.
            </ProgramDescription>
          </ProgramCard>
          <ProgramCard>
            <ProgramTitle>Advanced Level</ProgramTitle>
            <ProgramDescription>
              Tailored for experienced players, this program teaches high-level techniques, advanced strategy,
              endurance training, and leadership skills to prepare for professional-level football.
            </ProgramDescription>
          </ProgramCard>
        </ProgramGrid>
      </ProgramsContainer>
      <Footer>
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

export default Programs;
