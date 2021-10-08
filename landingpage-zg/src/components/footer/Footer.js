import React from 'react'
import"./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Zona-Gamer</h1>
        <p>Villa Comoapan, Ver.</p>
      </div>
      <div className="footer-contact">
        <h3>Contacto:</h3>
        <p>Zona-Gamer@outlook.com</p>
        <p>5631926228</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design by Francisco Gonzalez</div>
        <div className="sns-links">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
