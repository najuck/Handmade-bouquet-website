import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

const TOAST_OPTIONS = {
  duration: 3000,
  style: {
    background: "#fff",
    color: "#3E2B33",
    border: "1px solid #F1DFD6",
    borderRadius: "14px",
    padding: "12px 16px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    boxShadow: "0 20px 45px -20px rgba(158,46,82,.35)",
  },
  success: { iconTheme: { primary: "#C4416B", secondary: "#fff" } },
  error: { iconTheme: { primary: "#9E2E52", secondary: "#fff" } },
};

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [showWishlist, setShowWishlist] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        containerStyle={{ top: 96 }}
        toastOptions={TOAST_OPTIONS}
      />
      <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        wishlist={wishlist}
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              showCart={showCart}
              setShowCart={setShowCart}
              showWishlist={showWishlist}
              setShowWishlist={setShowWishlist}
              searchTerm={searchTerm}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
