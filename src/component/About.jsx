import React from "react";
import "./About.css";
import hero from "../assets/hero.png";

const About = () => {
  return (
    <div className="about">

      {/* Hero Section */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${hero})`,
        }}
      >
        <div className="hero-text">
          <h1>Every Bouquet is Handmade with Love 💐</h1>

          <p>
            Welcome to our little flower world where every bouquet is carefully
            handcrafted using premium pipe cleaners. Our flowers never fade,
            making them a beautiful memory forever.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="story">

        <h2>🌸 Our Story</h2>

        <p>
          What started as a small creative hobby slowly turned into something
          truly special. Every flower is handmade with patience, creativity and
          love. We believe that gifts should last forever, just like the
          memories they create.
        </p>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Why You'll Love Our Bouquets 💖</h2>

        <div className="feature-grid">

          <div className="card">
            <span>🌷</span>
            <h3>100% Handmade</h3>
            <p>
              Every bouquet is handcrafted with attention to every little
              detail.
            </p>
          </div>

          <div className="card">
            <span>💝</span>
            <h3>Perfect Gift</h3>
            <p>
              Ideal for birthdays, anniversaries, weddings and every special
              occasion.
            </p>
          </div>

          <div className="card">
            <span>🌼</span>
            <h3>Long Lasting</h3>
            <p>
              Unlike fresh flowers, our bouquets stay beautiful forever.
            </p>
          </div>

          <div className="card">
            <span>✨</span>
            <h3>Unique Designs</h3>
            <p>
              Every bouquet is unique because every flower is handmade.
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="mission">

        <h2>🌺 Our Mission</h2>

        <p>
          We want every bouquet to become a beautiful memory. Our mission is to
          create handmade flowers that spread happiness, love and smiles.
        </p>

      </section>

      {/* Founder */}

      <section className="founder">

        <div className="founder-card">

          <div className="founder-img">
            👩‍🎨
          </div>

          <h2>Kritika Kashyap</h2>

          <h4>Founder & Handmade Bouquet Artist</h4>

          <p>
            Every bouquet you receive has been created with creativity, love and
            lots of happiness. Thank you for supporting my small business. ❤️
          </p>

        </div>

      </section>

    </div>
  );
};

export default About;