import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Styled Components
const TestimonialsContainer = styled.section`
  padding: 60px 20px;
  background: #111; /* Dark background for a sleek look */
  color: #ffd700;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 20px;
`;

const SlideAnimation = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Testimonial = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
  max-width: 600px;
  text-align: center;
  opacity: 0;
  animation: ${SlideAnimation} 1s ease-in-out forwards;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  color: #fff;
  font-style: italic;
  margin-bottom: 10px;
`;

const Author = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: #ffd700;
  margin-top: 10px;
`;

const Role = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #ccc;
`;

const Controls = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

const ControlButton = styled.button`
  background: none;
  border: 2px solid #ffd700;
  color: #ffd700;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ffd700;
    color: #111;
  }
`;

// **Main Component**
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Joining Glory Light FC has been a life-changing experience. The coaches are inspiring, and I've grown so much as a player and person.",
      author: "Sodiq",
      role: "Player",
    },
    {
      text: "This academy gave my son the opportunity to shine both on and off the field. We are forever grateful for the guidance and support.",
      author: "Chidera",
      role: "Parent",
    },
    {
      text: "A truly professional and well-organized football academy. My child has developed incredible skills and discipline!",
      author: "Mr. Adewale",
      role: "Parent",
    },
    {
      text: "The training, values, and sense of teamwork I learned here helped me get a scholarship to play internationally.",
      author: "Uche",
      role: "Former Player",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]); // ✅ Add testimonials.length to dependencies
  

  return (
    <TestimonialsContainer id="testimonials">
      <SectionTitle>What Our Players Say</SectionTitle>
      <TestimonialWrapper>
        <Testimonial key={index}>
          <Quote>“{testimonials[index].text}”</Quote>
          <Author>- {testimonials[index].author}</Author>
          <Role>{testimonials[index].role}</Role>
        </Testimonial>
        <Controls>
          <ControlButton onClick={() => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}>
            ◀ Previous
          </ControlButton>
          <ControlButton onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}>
            Next ▶
          </ControlButton>
        </Controls>
      </TestimonialWrapper>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
