import React ,{ useState ,useRef} from "react";
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
const Home = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
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
  return (
    <div className="home">
      {toast && (
  <div className="toast">
    🛒 {toast}
  </div>
)}
      {/* Hero Section */}
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
      <div className="cart-button">
  <button onClick={() => setShowCart(!showCart)}>
    🛒 Cart ({cart.length})
  </button>
</div>
      <div className="delivery-banner">
  🚚 Same Day Delivery Available | 💐 Fresh Flowers Guaranteed
</div>
      {/* Products */}
    <section className="products" ref={productsRef}>
        <h2>Our Beautiful Bouquets</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
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