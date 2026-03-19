import React from 'react';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          Designed & Built by <strong>Vanshika Gupta</strong>
        </p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
