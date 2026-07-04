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
          <p>📧 pipefulbloom@gmail.com</p>
          <p>📱 +91 6280180036</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>📷 Instagram</p>
          <p>💬 WhatsApp</p>
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