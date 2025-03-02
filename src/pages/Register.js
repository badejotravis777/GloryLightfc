import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // EmailJS integration
import Header from "../components/Header";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const RegisterContainer = styled.div`
  padding: 40px;
  background: #000;
  color: #ffcc00;
  font-family: "Arial", sans-serif;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 40px auto; /* Adds space from the top and bottom */
  background: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;

  @media (max-width: 768px) { 
    width: 90%; /* Reduce width to fit smaller screens */
    max-width: 400px; /* Ensures it doesn't stretch too much */
    padding: 20px; /* Proper spacing inside */
    margin: 20px auto; /* Adds spacing around the form */
  }

  @media (max-width: 480px) { 
    width: 95%; /* Further adjustment for very small screens */
    padding: 15px;
    margin: 15px auto;
  }
`;


const SectionHeader = styled.h2`
  text-align: center;
  color: #ffcc00;
  margin-bottom: 20px;
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

const BenefitsContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #111;
  border-radius: 10px;
  color: #ffcc00;

  ul {
    list-style: disc;
    padding-left: 20px;

    li {
      margin: 10px 0;
      color: #fff;
    }
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  select {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    color: #333;

    @media (max-width: 768px) { 
      font-size: 14px;
      padding: 8px;
      width: 95%;
    }
  }

  button {
    padding: 12px;
    border-radius: 5px;
    border: none;
    background: #ffcc00;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #ffe066;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;


const BankInfo = styled.div`
  margin-top: 20px;
  background: #333;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  color: #ffcc00;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    margin: 5px 0;
  }
`;


const SubmitOptions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #ffe066;
    }

    &.email {
      background: #0072c6;
      color: #fff;
    }

    &.whatsapp {
      background: #25d366;
      color: #fff;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    phoneNumber: "",
    countryCode: "",
    email: "",
    parentName: "",
    parentPhone: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Remove errors dynamically
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name Validation (First letters capitalized)
    const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
    if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full name must include three names with the first letter capitalized.";
    }
    if (!nameRegex.test(formData.parentName)) {
      newErrors.parentName = "Parent's name must include three names with the first letter capitalized.";
    }
    if (!nameRegex.test(formData.emergencyContact)) {
      newErrors.emergencyContact = "Emergency contact name must include three names with the first letter capitalized.";
    }

    // Age Validation (Must be 5+ years old)
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(formData.dob).getFullYear();
    if (currentYear - birthYear < 5) {
      newErrors.dob = "You must be at least 5 years old to register.";
    }

    // Phone Validation
    if (!/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be valid.";
    }
    if (!/^\d{10,15}$/.test(formData.parentPhone)) {
      newErrors.parentPhone = "Parent's phone number must be valid.";
    }
    if (!/^\d{10,15}$/.test(formData.emergencyPhone)) {
      newErrors.emergencyPhone = "Emergency contact phone number must be valid.";
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // EmailJS Integration
    emailjs
      .send(
        "service_levmv49", // Replace with your EmailJS service ID
        "template_jis62fr", // Replace with your EmailJS template ID
        {
          fullName: formData.fullName,
          dob: formData.dob,
          address: formData.address,
          phone: `${formData.countryCode}${formData.phoneNumber}`,
          email: formData.email,
          parentName: formData.parentName,
          parentPhone: `${formData.countryCode}${formData.parentPhone}`,
          emergencyContact: formData.emergencyContact,
          emergencyPhone: `${formData.countryCode}${formData.emergencyPhone}`,
        },
        "hQSo-ixOPxQRRUmTT" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Registration information successfully sent!");
          setFormData({
            fullName: "",
            dob: "",
            address: "",
            phoneNumber: "",
            countryCode: "",
            email: "",
            parentName: "",
            parentPhone: "",
            emergencyContact: "",
            emergencyPhone: "",
          });
        },
        (error) => {
          alert("Failed to send registration information. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:glorylightfc@gmail.com`;
  };

  const handleWhatsAppClick = () => {
    window.open("Wa.me/+2349128430714");
  };

  return (
    <>
      <Header />
      <RegisterContainer>
        <SectionHeader>Register for Glory Light FC</SectionHeader>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <h3>Player Information</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}

            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            {errors.dob && <ErrorMessage>{errors.dob}</ErrorMessage>}

            <input
              type="text"
              name="address"
              placeholder="Residential Address"
              value={formData.address}
              onChange={handleChange}
            />

            <select name="countryCode" onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="+234">Nigeria (+234)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
            </select>

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <h3>Parent/Guardian Information</h3>
            <input
              type="text"
              name="parentName"
              placeholder="Parent/Guardian Name"
              value={formData.parentName}
              onChange={handleChange}
            />
            {errors.parentName && <ErrorMessage>{errors.parentName}</ErrorMessage>}

            <input
              type="tel"
              name="parentPhone"
              placeholder="Parent/Guardian Phone"
              value={formData.parentPhone}
              onChange={handleChange}
            />
            {errors.parentPhone && <ErrorMessage>{errors.parentPhone}</ErrorMessage>}

            <h3>Emergency Contact</h3>
            <input
              type="text"
              name="emergencyContact"
              placeholder="Emergency Contact Name"
              value={formData.emergencyContact}
              onChange={handleChange}
            />
            {errors.emergencyContact && <ErrorMessage>{errors.emergencyContact}</ErrorMessage>}

            <input
              type="tel"
              name="emergencyPhone"
              placeholder="Emergency Contact Phone"
              value={formData.emergencyPhone}
              onChange={handleChange}
            />
            {errors.emergencyPhone && <ErrorMessage>{errors.emergencyPhone}</ErrorMessage>}

            <button type="submit">Complete Registration</button>
          </Form>

          <BankInfo>
            <h3>Payment Details</h3>
            <p>Account Name: EDWARD-NGWU CHRISTIAN</p>
            <p>Account Number: 2011070391</p>
            <p>Bank: KUDA</p>
          </BankInfo>

          <SubmitOptions>
            <button className="email" onClick={handleEmailClick} >
              <FaEnvelope /> Submit Receipt via Email
            </button>
            <button className="whatsapp" onClick={handleWhatsAppClick} >
              <FaWhatsapp /> Submit Receipt via WhatsApp
            </button>
          </SubmitOptions>
          <BenefitsContainer>
          <h3>Why Join Us?</h3>
          <ul>
            <li>Top-notch coaching from experienced professionals.</li>
            <li>Access to state-of-the-art training facilities.</li>
            <li>Participation in regional and national championships.</li>
            <li>Holistic development, focusing on both skills and character.</li>
            <li>Opportunities for scholarships and international exposure.</li>
          </ul>
        </BenefitsContainer>
        </FormContainer>
      </RegisterContainer>
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

export default Register;
