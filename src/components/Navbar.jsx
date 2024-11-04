// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/diwali-card-maker-logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Diwali Card Maker" />
        <h3>Diwali Card Maker</h3>
      </div>

      {/* Hamburger icon, only for mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/templates" onClick={toggleMenu}>Templates</Link></li>
        <li><Link to="/features" onClick={toggleMenu}>Features</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
