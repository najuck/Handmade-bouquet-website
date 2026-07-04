import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ cart, showCart, setShowCart, searchTerm, setSearchTerm ,wishlist, showWishlist,setShowWishlist }) => {
  return (
    <nav className="navbar">

      <div className="logo">
        🌸Pipeful Bloom🌸
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="search-box">
  <input
    type="text"
    placeholder="Search bouquets..."
    value={searchTerm}
    onChange={(e) => {
  console.log(e.target.value);
  setSearchTerm(e.target.value);
}}
  />
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
      </div>

    </nav>
  );
};

export default Navbar;