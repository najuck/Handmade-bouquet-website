import React ,{ useState ,useRef , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bluemoonlily from "../assets/bluemoonlily.jpeg";
import blushblossom from "../assets/blushblossom.jpeg";
import candygarden from "../assets/candygarden.jpeg";
import lavendardreams from "../assets/lavendardreams.jpeg";
import oceanlily from "../assets/oceanlily.jpeg";
import rose from "../assets/rose.jpeg";
import sunflower from "../assets/sunflower.jpeg";
import Cherishedmemory from "../assets/cherishedmemoriesbouqet.jpeg";
import cottoncandybloom from "../assets/cottoncandybloom.jpeg";
import littlejoypot from "../assets/littlejoypot.jpeg";
import guardianbloom from "../assets/guardianbloom.jpeg";
import midnightskybouquet from "../assets/midnightskybouquet.jpeg";
import pinkvelvetbouquet from "../assets/pinkvelvetbouqet.jpeg";
import softblushbouquet from "../assets/softblushbouquet.jpeg";
import violetgrace from "../assets/violetgrace.jpeg";
import carhanging from "../assets/carhang.jpeg";
import blueserenitybouquet from "../assets/blueserenity.jpeg";
import blushblossompot from "../assets/blushpot.jpeg";
import beerbouquet from "../assets/beer1.jpeg";
import divineblessings from "../assets/divineblessings.jpeg";
import winewonder from "../assets/winewonder1.jpeg";
import CustomerReviews from "./CustomerReviews";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Home = ({
  cart,
  setCart,
  showCart,
  setShowCart,
  showWishlist,
  setShowWishlist,
  searchTerm,
  wishlist,
  setWishlist,
}) => {
  console.log("Wishlist:", wishlist);
  const [toast, setToast] = useState("");
 
  const productsRef = useRef(null);
const scrollToProducts = () => {
  productsRef.current.scrollIntoView({
    behavior: "smooth",
  });
};
const addToCart = (product) => {
  setCart([...cart, product]);
  setToast(`${product.name} added to cart 💖`);
  setTimeout(() => {
    setToast("");
  }, 3000);
};
const toggleWishlist = (product) => {
  const exists = wishlist.find((item) => item.id === product.id);
  if (exists) {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  } else {
    setWishlist([...wishlist, product]);
  }
};
useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);
const removeFromCart = (indexToRemove) => {
  const updatedCart = cart.filter((_, index) => index !== indexToRemove);
  setCart(updatedCart);
};
const totalPrice = cart.reduce(
  (acc, item) => acc + Number(item.price.replace("₹", "")),
  0
);
const deliveryCharge = 250;
const finalTotal = totalPrice + deliveryCharge;
  const products = [
    {
      id: 1,
      image: bluemoonlily,
      name: "Blue Moon Lily Bouquet",
      price: "₹999",
    },
    {
      id: 2,
      image: blushblossom,
      name: "Blush Blossom Bouquet",
      price: "₹699",
    },
    {
      id: 3,
      image: candygarden,
      name: "Candy Garden Bouquet",
      price: "₹1299",
    },
    {
      id: 4,
      image: lavendardreams,
      name: "Lavender Dreams Bouquet",
      price: "₹899",
    },
    {
      id: 5,
      image: oceanlily,
      name: "Ocean Lily Bouquet",
      price: "₹999",
    },
    {
      id: 6,
      image: rose,
      name: "Rose Bouquet",
      price: "₹1599",
    },
    {
      id: 7,
      image: sunflower,
      name: "Sunflower Bouquet",
      price: "₹649",
    },
    {
      id: 8,
      image: Cherishedmemory,
      name: "Cherished Memory Bouquet",
      price: "₹1799",
    },
    {
      id: 9,
      image: cottoncandybloom,
      name: "Cotton Candy Bloom",
      price : "₹1399",
    },
    {
      id: 10,
      image:littlejoypot,
      name: "Little Joy Pot",
      price : "₹299",
    },
    {
      id:11,
      image:guardianbloom,
      name: "Guardian Bloom",
      price : "₹599",
    },
    {
      id:12,
      image:midnightskybouquet,
      name:"Midnight Sky Bouquet",
      price : "₹799",
    },
    {
      id:13,
      image:pinkvelvetbouquet,
      name:"Pink Velvet Bouquet",
      price: "₹1899",
    },
    {
      id:14,
      image:softblushbouquet,
      name:"Soft Blush Bouquet",
      price:"₹1199",
    },
    {
      id:15,
      image:violetgrace,
      name:"Violet Grace Bouquet",
      price:"₹699",
    },
    {
      id:16,
      image:carhanging,
      name:"Sunflower Car Hanging",
      price:"₹320",
    },
    {
      id:17,
      image:blueserenitybouquet,
      name:"Blue Serenity Bouquet",
      price:"₹499",
    },
    {
      id:18,
      image:blushblossompot,
      name:"Blush Blossom Pot",
      price:"₹420",
    },
    {
      id:19,
      image:beerbouquet,
      name:"Beer Bouquet",
      price: "₹2299",
    },
    {
      id:20,
      image:divineblessings,
      name:"Divine Blessings Bouquet",
      price: "₹899",
    },
    {
      id:21,
      image:winewonder,
      name:"Wine Wonder Bouquet",
      price:"₹499",
    },
  ];
  const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes((searchTerm || "").toLowerCase())
);
console.log("Search Term:", searchTerm);
console.log("Filtered Products:", filteredProducts);

  return (
    <div className="home">
      {toast && (
  <div className="toast">
    🛒 {toast}
  </div>
)}
      {/* Hero Section */}
      {searchTerm == "" && (
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bluemoonlily})`,
        }}
      >
        <div className="hero-content">
          <h1>Handmade Pipe Cleaner Bouquets</h1>

          <p>
            Beautiful handmade bouquets crafted with love. Perfect for birthdays,
            anniversaries, weddings and every special occasion.
          </p>
          <button onClick={scrollToProducts}>
            Shop Now
            </button>
        </div>      
      </section>
      )}
      {searchTerm == "" && (
      <div className="delivery-banner">
  🚚 Same Day Delivery Available | 💐 Fresh Flowers Guaranteed
</div>
      )}
{/* Featured Collection */}
{searchTerm == "" && (
<section className="featured">
  <h2>⭐ Featured Collection</h2>
  <p>Our Best Selling Handmade Bouquets</p>

  <div className="featured-grid">

    <div className="featured-card">
      <img src={rose} alt="Rose Bouquet" />
      <h3>Rose Bouquet</h3>
    </div>

    <div className="featured-card">
      <img src={candygarden} alt="Candy Garden" />
      <h3>Candy Garden</h3>
    </div>

    <div className="featured-card">
      <img src={pinkvelvetbouquet} alt="Pink Velvet" />
      <h3>Pink Velvet</h3>
    </div>

    <div className="featured-card">
      <img src={Cherishedmemory} alt="Cherished Memory" />
      <h3>Cherished Memory</h3>
    </div>

  </div>
</section>
)}
{/* Categories */}
{searchTerm == "" && (
<section className="categories">
  <h2>🌸 Shop by Category</h2>

  <div className="category-grid">
    <div className="category-card">💐 Bouquets</div>

    <div className="category-card">🪴 Flower Pots</div>

    <div className="category-card">🚗 Car Hangings</div>

    <div className="category-card">🔑 Keychains</div>

    <div className="category-card">🍺 Beer Bouquets</div>

  </div>
</section>
)}

      {/* Products */}
    <section className="products" ref={productsRef}>
        <h2>
  {searchTerm
    ? `Search Results for "${searchTerm}"`
    : "Our Beautiful Bouquets"}
</h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <button 
  className="wishlist-btn"
  onClick={() => toggleWishlist(product)}
>
  {wishlist?.find((item) => item.id === product.id) ? "❤️" : "🤍"}
</button>
  <img src={product.image} alt={product.name} />

  <h3>{product.name}</h3>

  <p className="price">{product.price}</p>

  <button onClick={() => addToCart(product)}>
    Add to Cart
  </button>

</div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="why">
        <h2>Why Choose Our Bouquets?</h2>
        <div className="features">
          <div className="feature">
            🌸
            <h3>100% Handmade</h3>
            <p>Each bouquet is handcrafted with care.</p>
          </div>
          <div className="feature">
            🎁
            <h3>Perfect Gift</h3>
            <p>Ideal for birthdays, anniversaries and celebrations.</p>
          </div>
          <div className="feature">
            💖
            <h3>Made with Love</h3>
            <p>Every bouquet is unique and long-lasting.</p>
          </div>
        </div>
      </section>
      <CustomerReviews />
      {showWishlist && (
  <div className="cart-box">
    <div className="cart-header">
      <h2>❤️ My Wishlist</h2>

      <button
        className="close-cart"
        onClick={() => setShowWishlist(false)}
      >
        ✖
      </button>
    </div>

    {wishlist.length === 0 ? (
      <p>Your wishlist is empty ❤️</p>
    ) : (
      <>
        {wishlist.map((item) => (
          <div key={item.id} className="cart-item">
           <div>
  <strong>{item.name}</strong>
  <br />
  {item.price}
</div>

<div className="wishlist-buttons">

  <button
    onClick={() => {
      setCart([...cart, item]);

      setWishlist(
        wishlist.filter((product) => product.id !== item.id)
      );
    }}
  >
    🛒 Move to Cart
  </button>

  <button
    className="remove-btn"
    onClick={() =>
      setWishlist(
        wishlist.filter((product) => product.id !== item.id)
      )
    }
  >
    ✖
  </button>

</div>
          </div>
        ))}
      </>
    )}
  </div>
)}
      {showCart && (
  <div className="cart-box">
    <div className="cart-header">
      <h2>🛍️ Your Cart</h2>
      <button
        className="close-cart"
        onClick={() => setShowCart(false)}
      >
        ✖
      </button>
    </div>
    {cart.length === 0 ? (
      <p>Cart is empty</p>
    ) : (
      <>
      {cart.map((item, index) => (
  <div
    key={index}
    className="cart-item"
  >
    <div>
      <strong>{item.name}</strong>
      <br />
      {item.price}
    </div>

    <button
      className="remove-btn"
      onClick={() => removeFromCart(index)}
    >
      ✖
    </button>
  </div>
))}

        <hr />
        <p>Subtotal: ₹{totalPrice}</p>
        <p>Delivery: ₹{deliveryCharge}</p>
        <h3>Total: ₹{finalTotal}</h3>
        <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</Link>
      </>
    )}
  </div>
)}
      <a
      href="https://wa.me/6280180036"
      target="_blank"
      className="whatsapp-float"
      >
        💬
        </a>

    </div>
  );
};

export default Home;