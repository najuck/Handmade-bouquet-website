import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../../assets/pipeful-bloom-logo.jpeg";
import "./Navbar.css";

const Navbar = ({ cart, showCart, setShowCart, searchTerm, setSearchTerm ,wishlist, showWishlist,setShowWishlist }) => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setHeight = () => {
      document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef}>
    <div className="announce">
      <div className="announce-track">
        <div className="announce-half">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>🌸 <b>Same-Day Delivery</b> available in your city &nbsp;·&nbsp; Free gift wrap on orders above ₹999 &nbsp;·&nbsp;</span>
          ))}
        </div>
        <div className="announce-half">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>🌸 <b>Same-Day Delivery</b> available in your city &nbsp;·&nbsp; Free gift wrap on orders above ₹999 &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>
    </div>
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>

      <div className="logo">
        <img src={logoImage} alt="Pipeful Bloom" className="logo-image" />
        <div className="logo-text">
          <span className="brand-name">Pipeful Bloom</span>
        </div>
      </div>

      <div className="nav-menu">
        <div className="nav-links" onClick={() => setMenuOpen(false)}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </div>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search bouquets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-icons">
        <button
  className="icon-btn"
  onClick={() => setShowWishlist(!showWishlist)}
>
  <FaHeart />

  {wishlist.length > 0 && (
    <span className="cart-count">
      {wishlist.length}
    </span>
  )}
</button>


        <button
  className="icon-btn"
  onClick={() => setShowCart(!showCart)}
>
  <FaShoppingCart />
  {cart.length > 0 && (
    <span className="cart-count">{cart.length}</span>
  )}
</button>

        <button
          className="icon-btn menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    </nav>
    </div>
  );
};

export default Navbar;