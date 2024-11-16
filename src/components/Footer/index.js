import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #000;
  color: #ffeb3b;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Glory Light FC Football Academy. All Rights Reserved.</p>
      <p>Phone: 09128430714 | Email: christianedward665@gmail.com</p>
    </FooterContainer>
  );
};

export default Footer;
