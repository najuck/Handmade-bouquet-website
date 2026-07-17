import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaRegClock, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "kritikakashyap182@gmail.com";

const SUBJECTS = [
  "General question",
  "Custom bouquet order",
  "Order status",
  "Bulk / event enquiry",
  "Just saying hello 🌷",
];

const FAQS = [
  {
    q: "Can I order custom colours?",
    a: "Absolutely — that's our favourite kind of order. Message us your colours and the occasion, and we'll make it yours.",
  },
  {
    q: "How long does delivery take?",
    a: "Same-day within the city, and 2–5 days across India depending on your location. Custom orders may need a little longer to craft.",
  },
  {
    q: "Do the flowers really last forever?",
    a: "Yes! They're made from pipe cleaners, so they never wilt. A gentle dust now and then keeps them looking fresh for years.",
  },
  {
    q: "Can I add a gift message?",
    a: "Of course. We'll hand-write your note on a card and tuck it in — just add it at checkout or tell us here.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <span className="eyebrow">Get in touch</span>
        <h1>
          Let's <em>bloom</em> together 🌸
        </h1>
        <p>
          Have a question, want a custom bouquet, or just want to say hello? We'd love to hear
          from you — message us and we'll reply as soon as we can.
        </p>
      </div>

      <div className="wrap">
        <div className="grid">
          {/* LEFT: contact methods */}
          <div>
            <div className="lead">
              <h2>Reach us directly</h2>
              <p>Drop us an email or find us on Instagram — we're always happy to help.</p>
            </div>

            <a className="method" href={`mailto:${EMAIL}`}>
              <div className="mi">
                <FaEnvelope size={17} />
              </div>
              <div>
                <div className="k">Email</div>
                <b>{EMAIL}</b>
              </div>
              <span className="go">→</span>
            </a>

            <a
              className="method"
              href="https://www.instagram.com/pipeful_bloom/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mi">
                <FaInstagram size={18} />
              </div>
              <div>
                <div className="k">Instagram</div>
                <b>@pipeful_bloom</b>
              </div>
              <span className="go">→</span>
            </a>

            <div className="hours">
              <div className="top">
                <FaRegClock size={16} />
                <b>When we're around</b>
              </div>
              <div className="r">
                <span>Monday – Saturday</span>
                <b>10:00 AM – 8:00 PM</b>
              </div>
              <div className="r">
                <span>Sunday</span>
                <b>By appointment</b>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="formcard">
            <div className="hd">
              <h2>Send a message 💌</h2>
              <p>Fill this in and it'll open in your email app, ready to send.</p>
            </div>
            <div className="bd">
              <form onSubmit={handleSubmit}>
                <div className="two">
                  <div className="field">
                    <input
                      id="c-name"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="c-name">Your name</label>
                  </div>
                  <div className="field">
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="c-phone">Phone (optional)</label>
                  </div>
                </div>
                <div className="field">
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="c-email">Your email</label>
                </div>
                <div className="field">
                  <select id="c-subject" name="subject" value={form.subject} onChange={handleChange}>
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <label htmlFor="c-subject" className="selbl">
                    What's this about?
                  </label>
                </div>
                <div className="field">
                  <textarea
                    id="c-message"
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="c-message">Your message</label>
                </div>
                <button className="sendbtn" type="submit">
                  Send message <FaPaperPlane size={14} />
                </button>
                <p className="formnote">We usually reply within a few hours 💕</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq">
        <div className="faq-in">
          <div className="faq-hd">
            <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
              Before you ask
            </span>
            <h2>Quick answers</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((f) => (
              <div className="fq" key={f.q}>
                <h4>
                  <span className="q">?</span>
                  {f.q}
                </h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
