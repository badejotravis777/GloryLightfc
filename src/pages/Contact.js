import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would add form handling to submit to the backend
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>Phone: 09128430714 | Email: christianedward665@gmail.com | Location: Ikorodu, Lagos State</p>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </ContactContainer>
  );
};



export default Contact;


