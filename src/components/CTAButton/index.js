import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  background: #ffeb3b;
  color: #000;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background: #000;
    color: #ffeb3b;
  }
`;

const CTAButton = ({ text, link }) => {
  return <Button to={link}>{text}</Button>;
};

export default CTAButton;
