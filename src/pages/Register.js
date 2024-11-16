import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Register = () => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for payment integration
    console.log('Registration form submitted:', formData);
  };

  return (
    <RegisterContainer>
      <h2>Register for Glory Light FC</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="number" name="age" placeholder="Your Age" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
        <button type="submit">Proceed to Payment</button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
