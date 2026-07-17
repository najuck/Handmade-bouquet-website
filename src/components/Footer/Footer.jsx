import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🌸 Pipeful Bloom</h2>
          <p>
            Handmade pipe cleaner bouquets crafted with love for every special occasion.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:pipefulbloom@gmail.com" className="footer-link">📧 pipefulbloom@gmail.com</a>
          <a href="https://www.instagram.com/pipeful_bloom/" target="_blank" rel="noreferrer" className="footer-link">📷 Instagram</a>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected for fresh bouquet updates and special offers.</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Pipeful Bloom | Handmade with ❤️
      </p>

    </footer>
  );
};

export default Footer;