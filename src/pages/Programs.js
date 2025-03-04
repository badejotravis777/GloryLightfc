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



        <Section id="founder-section">
          <h2>Facilities & Offers</h2>
          <ProgramCard>
          <p>
            At Glory Light FC, we are dedicated to providing top-tier facilities and exceptional services that support our players, coaches, and partners. Our goal is to create an environment where talent is nurtured, and individuals can perform at their highest potential. Here’s what we offer:
 </p>
 </ProgramCard>

 <ProgramCard>
          <p>⚽ State-of-the-Art Training Facilities

Our training grounds feature high-quality pitches and modern amenities, ensuring players train in a professional environment. Whether for individual drills or team exercises, we provide the best conditions for player development.
</p>
</ProgramCard>

<ProgramCard>
<p>
🏋️‍♂️ Player Fitness & Rehabilitation Programs

We prioritize player wellness with personalized fitness routines, physiotherapy, and injury prevention programs. Our goal is to keep players in peak physical condition throughout the season.


</p>
</ProgramCard>
<ProgramCard>
<p>
🎓 Elite Coaching & Tactical Development

Our experienced coaching staff delivers top-tier training, focusing on technical, tactical, and physical growth. We prepare players for success at competitive levels, ensuring they meet the highest football standards.


</p>
</ProgramCard>
<ProgramCard>
<p>
🌍 Player Exposure & Career Opportunities

We connect players to opportunities by organizing competitive matches, scouting programs, and international exposure through tournaments and professional networks.


</p>
</ProgramCard>
<ProgramCard>
<p>
🛡️ Youth Academy & Talent Development

Our academy is committed to grooming young talents, providing structured training, mentorship, and pathways to professional football careers.


</p>
</ProgramCard>
<ProgramCard>
<p>
🤝 Sponsorship & Corporate Partnerships

We collaborate with brands and organizations for sponsorship opportunities, offering strategic partnerships that align with a winning football culture.


</p>
</ProgramCard>
<ProgramCard>
<p>
🏟️ Facilities for Rent & Event Hosting

Our professional-grade facilities are available for rent, whether for team training, matches, or special events, ensuring a premium football experience.
</p>
</ProgramCard>
      
        </Section>


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
