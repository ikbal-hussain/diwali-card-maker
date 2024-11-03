import React from 'react';
import '../styles/Footer.css';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Diwali Card Maker. All rights reserved.</p>
          <p>Made with ❤️ by Ikbal Hussain</p>
        </div>
        <div className="footer-right">
          <a href="https://github.com/ikbal-hussain" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ikbal-hussain-web-developer" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://instagram.com/real_ikbal_hussain" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com/ikbalhssn" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
