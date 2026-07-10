import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">

      {/* Hero Section */}

      <section className="contact-hero">

        <h1>Let's Bloom Together 🌸</h1>

        <p>
          We'd love to hear from you! Whether you have a question, want a
          custom bouquet, or simply want to say hello, we're always here for
          you.
        </p>

      </section>

      {/* Contact Section */}

      <section className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch 💌</h2>

          <p>
            Feel free to contact us anytime. We'll get back to you as soon as
            possible.
          </p>

          <div className="info-box">
            📧
            <span>kritikakashyap182@gmail.com</span>
          </div>

          <div className="info-box">
            �
            <a href="https://www.instagram.com/pipeful_bloom/" target="_blank" rel="noreferrer" className="contact-link">@pipeful_bloom</a>
          </div>

          <div className="info-box">
            💬
            <a href="https://wa.me/6280180036" target="_blank" rel="noreferrer" className="contact-link">Chat on WhatsApp</a>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h2>Send a Message 💖</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message 🌸
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;