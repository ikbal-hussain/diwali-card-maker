// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/diwali-card-maker-logo.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Diwali Card Maker" />
        <h3>Diwali Card Maker</h3>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        {/* <li><a href="#templates">Templates</a></li> */}
        {/* <li><a href="#features">Features</a></li> */}
        {/* <li><a href="#about">About</a></li> */}
      </ul>
      {/* <button className="navbar-cta">Create Your Card</button> */}
    </nav>
  );
}

export default Navbar;
