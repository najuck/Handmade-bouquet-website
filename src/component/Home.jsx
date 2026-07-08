import React ,{ useState ,useRef , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CustomerReviews from "./CustomerReviews";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// Dynamically import all images from assets folder
const images = import.meta.glob('../../assets/*.jpeg', { eager: true });

// Helper function to get image path
const getImagePath = (filename) => {
  return images[`../../assets/${filename}`]?.default || '';
};
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
      image: getImagePath('bluemoonlily.jpeg'),
      name: "Blue Moon Lily Bouquet",
      price: "₹999",
    },
    {
      id: 2,
      image: getImagePath('blushblossom.jpeg'),
      name: "Blush Blossom Bouquet",
      price: "₹699",
    },
    {
      id: 3,
      image: getImagePath('candygarden.jpeg'),
      name: "Candy Garden Bouquet",
      price: "₹1299",
    },
    {
      id: 4,
      image: getImagePath('lavendardreams.jpeg'),
      name: "Lavender Dreams Bouquet",
      price: "₹899",
    },
    {
      id: 5,
      image: getImagePath('oceanlily.jpeg'),
      name: "Ocean Lily Bouquet",
      price: "₹999",
    },
    {
      id: 6,
      image: getImagePath('rose.jpeg'),
      name: "Rose Bouquet",
      price: "₹1599",
    },
    {
      id: 7,
      image: getImagePath('sunflower.jpeg'),
      name: "Sunflower Bouquet",
      price: "₹649",
    },
    {
      id: 8,
      image: getImagePath('cherishedmemoriesbouqet.jpeg'),
      name: "Cherished Memory Bouquet",
      price: "₹1799",
    },
    {
      id: 9,
      image: getImagePath('cottoncandybloom.jpeg'),
      name: "Cotton Candy Bloom",
      price : "₹1399",
    },
    {
      id: 10,
      image: getImagePath('littlejoypot.jpeg'),
      name: "Little Joy Pot",
      price : "₹299",
    },
    {
      id:11,
      image: getImagePath('guardianbloom.jpeg'),
      name: "Guardian Bloom",
      price : "₹599",
    },
    {
      id:12,
      image: getImagePath('midnightskybouquet.jpeg'),
      name:"Midnight Sky Bouquet",
      price : "₹799",
    },
    {
      id:13,
      image: getImagePath('pinkvelvetbouqet.jpeg'),
      name:"Pink Velvet Bouquet",
      price: "₹1899",
    },
    {
      id:14,
      image: getImagePath('softblushbouquet.jpeg'),
      name:"Soft Blush Bouquet",
      price:"₹1199",
    },
    {
      id:15,
      image: getImagePath('violetgrace.jpeg'),
      name:"Violet Grace Bouquet",
      price:"₹699",
    },
    {
      id:16,
      image: getImagePath('carhang.jpeg'),
      name:"Sunflower Car Hanging",
      price:"₹320",
    },
    {
      id:17,
      image: getImagePath('blueserenity.jpeg'),
      name:"Blue Serenity Bouquet",
      price:"₹499",
    },
    {
      id:18,
      image: getImagePath('blushpot.jpeg'),
      name:"Blush Blossom Pot",
      price:"₹420",
    },
    {
      id:19,
      image: getImagePath('beer1.jpeg'),
      name:"Beer Bouquet",
      price: "₹2299",
    },
    {
      id:20,
      image: getImagePath('divineblessings.jpeg'),
      name:"Divine Blessings Bouquet",
      price: "₹899",
    },
    {
      id:21,
      image: getImagePath('winewonder1.jpeg'),
      name:"Wine Wonder Bouquet",
      price:"₹499",
    },
    {
      id:22,
      image: getImagePath('bloomiepot.jpeg'),
      name:"Bloomie Pot",
      price:"₹320",
    },
    {
      id:23,
      image: getImagePath('keychain.jpeg'),
      name:"Pipeful Initial Keychains",
      price:"₹120",
    },
    {
      id:24,
      image: getImagePath('keychain1.jpeg'),
      name:"Sunflower Keychain",
      price:"₹150",
    },
    {
      id:25,
      image: getImagePath('keychain2.jpeg'),
      name:"Velvet Petal Keychain",
      price:"₹150",
    },
    {
      id:26,
      image: getImagePath('keychain3.jpeg'),
      name:"Blue Petal Keychain",
      price:"₹150",
    },
    {
      id:27,
      image: getImagePath('keychain4.jpeg'),
      name:"Tiny Bow Keychain",
      price:"₹59",
    },
    {
      id:28,
      image: getImagePath('mint.jpeg'),
      name:"Minty Fresh Bouquet",
      price:"₹1699",
    },
    {
      id:30,
      image: getImagePath('forever.jpeg'),
      name:"Forever Bloom Bouquet",
      price:"₹1299",
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${getImagePath('bluemoonlily.jpeg')})`,
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
      <img src={getImagePath('rose.jpeg')} alt="Rose Bouquet" />
      <h3>Rose Bouquet</h3>
    </div>

    <div className="featured-card">
      <img src={getImagePath('candygarden.jpeg')} alt="Candy Garden" />
      <h3>Candy Garden</h3>
    </div>

    <div className="featured-card">
      <img src={getImagePath('pinkvelvetbouqet.jpeg')} alt="Pink Velvet" />
      <h3>Pink Velvet</h3>
    </div>

    <div className="featured-card">
      <img src={getImagePath('cherishedmemoriesbouqet.jpeg')} alt="Cherished Memory" />
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