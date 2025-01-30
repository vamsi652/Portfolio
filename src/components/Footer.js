import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Vamsi Mohan Bangale. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:vamsimohan652@gmail.com" className="footer-link">
            <FontAwesomeIcon icon={faEnvelope} /> vamsimohan652@gmail.com
          </a>
          <a href="tel:+919908237848" className="footer-link">
            <FontAwesomeIcon icon={faPhone} /> +91 9908237848
          </a>
          <a
            href="https://www.linkedin.com/in/vamsi-mohan-bangale-b2a8ba136/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a
            href="https://github.com/vamsi652"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;