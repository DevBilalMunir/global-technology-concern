import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>123 Engineering Street, City</p>
          <p>Phone: +1 234 5678</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/example" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com/example" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/example" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/example" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 GTC. All rights reserved.</p>
        {/* <p>Website designed and developed by [Your Company Name]</p> */}
      </div>
    </div>
  );
}
