import React from 'react';
import styled from 'styled-components';

const FAQsContainer = styled.div`
  padding: 20px;
`;

const FAQSection = styled.div`
  margin-bottom: 20px;
`;

const FAQs = () => {
  return (
    <FAQsContainer>
      <h2>Frequently Asked Questions</h2>
      <FAQSection>
        <h3>What is the age range for joining Glory Light FC?</h3>
        <p>We welcome young athletes from ages 10 to 18.</p>
      </FAQSection>
      <FAQSection>
        <h3>What is the registration fee?</h3>
        <p>The registration fee is ₦7000, which includes access to all training programs.</p>
      </FAQSection>
    </FAQsContainer>
  );
};

export default FAQs;
