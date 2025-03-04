// import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from '../components/Header';
import '../components/Career.css';
import styled from 'styled-components';

const Career = () => {
  
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
    


  return (
    <motion.div 
    
      className="career-page"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
          <Header />
      <header className="career-header">
        <h1>Join the Glory Light FC Team</h1>
        <p>Be part of a team that values growth, teamwork, and impact!</p>
      </header>

      <section className="why-work">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          Why Work With Us?
        </motion.h2>
        <p>At Glory Light FC, we believe in excellence and community. Working with us means being part of a team that changes lives and inspires future generations.</p>
      </section>

      <section className="job-listings">
        <h2>Available Job Positions</h2>
        <div className="job-card">
          <h3>Marketing Manager</h3>
          <p>Location: Lagos, Nigeria</p>
          <p>Requirements: Degree in Marketing, 3+ years experience.</p>
          <button className="apply-btn" onClick={() => window.location.href = 'apply'}>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Fitness Trainer</h3>
          <p>Location: Lagos, Nigeria</p>
          <p>Requirements: Certification in fitness training, 2+ years experience.</p>
          <button className="apply-btn" onClick={() => window.location.href = 'apply'}>Apply Now</button>
        </div>
      </section>

       {/* Footer */}
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

         </motion.div>
  );
};

export default Career;
