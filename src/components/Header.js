// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assume specific styling in a CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/glorylogo.png" alt="Glory Light FC" />
        </Link>
      </div>
      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register" className="joinButton">Join the Squad</Link>
      </nav>
    </header>
  );
};

export default Header;
