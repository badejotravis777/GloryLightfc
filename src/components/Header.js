import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo2.png" alt="Glory Light FC" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/programs" onClick={toggleMenu}>Programs</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/register" className="joinButton" onClick={toggleMenu}>
          Join the Squad
        </Link>
      </nav>
    </header>
  );
};

export default Header;
