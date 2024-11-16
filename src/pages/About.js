import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin: 20px 0;
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <h2>About Glory Light FC</h2>
        <p>
          Glory Light FC Football Academy was founded with the vision of developing young athletes with skill,
          discipline, and integrity. Our focus is on fostering growth both on and off the field.
        </p>
      </Section>
      <Section>
        <h2>Founder’s Story</h2>
        <p>
          Edward-Ngwu Christian, founder of Glory Light FC, established this academy to empower young people through
          sports, instilling in them values of hard work and teamwork.
        </p>
      </Section>
      <Section>
        <h2>Coaches and Mentors</h2>
        <p>
          Our team of experienced coaches is dedicated to guiding each player through their development journey,
          with a focus on skill-building, strategy, and personal growth.
        </p>
      </Section>
    </AboutContainer>
  );
};

export default About;
