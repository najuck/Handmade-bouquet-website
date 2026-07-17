import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import hero from "../../assets/hero.png";

const About = () => {
  return (
    <div className="about">
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(62,43,51,.55), rgba(62,43,51,.65)), url(${hero})`,
        }}
      >
        <div className="hero-text">
          <p className="hero-badge">Premium Handmade Bouquets</p>
          <h1>Every bouquet is <em>handmade with love</em> 💐</h1>
          <div className="hero-divider" />
          <p className="hero-copy">Crafted with premium pipe cleaners and designed to preserve memories forever.</p>
          <p className="hero-copy">Each bouquet is made to feel timeless, elegant, and full of heartfelt charm.</p>
          <Link to="/" className="hero-btn">
            Shop collection →
          </Link>
        </div>
      </section>

      <section className="about-sec">
        <div className="about-sechd">
          <div className="k">Why Pipeful Bloom</div>
          <h2>Why choose Pipeful Bloom?</h2>
          <p>Every bouquet is crafted to feel personal, lasting, and unforgettable.</p>
        </div>

        <div className="feature-grid">
          <div className="fcard">
            <span>🌸</span>
            <h3>Handmade with Care</h3>
            <p>
              Each bouquet is carefully created by hand with premium pipe cleaners and attention to detail.
            </p>
          </div>

          <div className="fcard">
            <span>💝</span>
            <h3>Made to Last</h3>
            <p>
              Unlike fresh flowers, our bouquets stay beautiful forever and never lose their charm.
            </p>
          </div>

          <div className="fcard">
            <span>🎁</span>
            <h3>Perfect for Every Occasion</h3>
            <p>
              Ideal for birthdays, anniversaries, weddings, and thoughtful gifts that speak from the heart.
            </p>
          </div>

          <div className="fcard">
            <span>🚚</span>
            <h3>Fast &amp; Reliable Delivery</h3>
            <p>
              Your special gift reaches you with care, on time, and ready to brighten someone's day.
            </p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-card">
          <span className="story-icon">🌸</span>
          <h2>Our Story</h2>
          <p>
            Pipeful Bloom began with a simple idea — to create beautiful handmade bouquets that never fade and always preserve memories.
          </p>
          <p>
            Every bouquet is crafted with patience, creativity, and love, turning sweet moments into lasting keepsakes.
          </p>
        </div>
      </section>

      <section className="about-sec stats-sec">
        <div className="stats-grid">
          <div className="stat-box">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Handmade Bouquets</p>
          </div>
          <div className="stat-box">
            <h3>5.0</h3>
            <p>Star Reviews</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-box">
          <h2>Ready to gift something special?</h2>
          <p>Choose a bouquet that feels timeless, elegant, and full of love.</p>
          <Link to="/" className="hero-btn light">
            Shop now →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
