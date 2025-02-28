import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // Assuming you already have a Header component
// Assuming you already have a Footer component
import emailjs from 'emailjs-com';

const ContactContainer = styled.div`
  padding: 40px 20px;
  background: #000; /* Black background */
  color: #ffcc00; /* Yellow text for headings */
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  max-width: 100vw;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 30px;
    word-wrap: break-word; 
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
    flex-wrap: wrap;
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

  @media (min-width: 768px) {
    .footer-column {
      flex: 1 1 30%;
    }
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
  width: 90%;


  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ffcc00;
    border-radius: 5px;
    background-color: #1c1c1c;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      border-color: #ffd700; /* Bright Yellow */
    }
  }

  textarea {
    min-height: 120px;
    resize: none;
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #ffd700; /* Bright Yellow */
    color: #000; /* Black text */
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ffcc00; /* Slightly darker yellow */
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        'service_levmv49', // Replace with your EmailJS service ID
        'template_0eu62kr', // Replace with your EmailJS template ID
        {
          name: formData.name,       // Matches {{name}} in the template
          email: formData.email,     // Matches {{email}} in the template
          message: formData.message, // Matches {{message}} in the template
        },
        'hQSo-ixOPxQRRUmTT' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };
  
  return (
    <>
      <Header>Contact Us</Header>
      <ContactContainer>
        <h2>Contact Us</h2>
        <p>
          Phone: 09128430714 | Email: christianedward665@gmail.com | Location: Ikorodu, Lagos State
        </p>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </Form>
        {isSent && <p style={{ color: '#0f0', textAlign: 'center', marginTop: '20px' }}>Message Sent Successfully!</p>}
      </ContactContainer>
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

export default Contact;
