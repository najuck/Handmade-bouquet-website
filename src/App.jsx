import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import Checkout  from "./component/Checkout";
import OrderSuccess from "./component/OrderSuccess";
const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
});
const [showWishlist, setShowWishlist] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
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
  element={
    <Checkout
      cart={cart}
      setCart={setCart}
    />
  }
/>
<Route
  path="/success"
  element={<OrderSuccess />}
/>
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
};

export default App;