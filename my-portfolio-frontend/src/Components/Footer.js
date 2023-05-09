import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3>About Us</h3>
          <p>We are a team of developers passionate about creating great software.</p>
        </div>
        <div className="footer__right">
          <h3>Contact Us</h3>
          <p>Email: vc892782@gmail.com.com</p>
          <p>Phone:7018306672</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 My Portfolio Website</p>
      </div>
    </footer>
  );
}

export default Footer;
