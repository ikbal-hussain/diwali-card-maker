// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/diwali-card-maker-logo.png';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Diwali Card Maker" />
        <h3 >Diwali Card Maker</h3>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        {/* Add other links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
