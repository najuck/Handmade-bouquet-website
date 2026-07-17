import React ,{ useRef , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Home.css";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import roseImg from "../../assets/categories/rose.jpeg";
import potImg from "../../assets/categories/blushpot.jpeg";
import carImg from "../../assets/categories/evileyecar.jpeg";
import keyImg from "../../assets/categories/keychain1.jpeg";
import beerImg from "../../assets/categories/beer1.jpeg";
import teddyImg from "../../assets/categories/blushbear.jpeg";

// Dynamically import all images from assets folder
const images = import.meta.glob('../../assets/*.jpeg', { eager: true });

// Helper function to get image path
const getImagePath = (filename) => {
  return images[`../../assets/${filename}`]?.default || '';
};

const CATEGORIES = [
  { name: "Bouquets", image: roseImg, desc: "Our signature handmade blooms" },
  { name: "Flower Pots", image: potImg, desc: "Little pots that never need water" },
  { name: "Car Hangings", image: carImg, desc: "Cute charms for your dashboard" },
  { name: "Keychains", image: keyImg, desc: "Pocket-sized handmade flowers" },
  { name: "Beer Bouquets", image: beerImg, desc: "A fun twist for celebrations" },
  { name: "Teddy Bouquets", image: teddyImg, desc: "Blooms with a cuddly friend" },
];

const CATEGORY_RULES = [
  { test: (name) => name.includes("Keychain"), category: "Keychains" },
  { test: (name) => name.includes("Car Hanging") || name === "Guardian Bloom", category: "Car Hangings" },
  { test: (name) => name.includes("Pot"), category: "Flower Pots" },
  { test: (name) => name.includes("Beer"), category: "Beer Bouquets" },
  { test: (name) => name.includes("Teddy"), category: "Teddy Bouquets" },
];
const categoryFor = (name) => CATEGORY_RULES.find((rule) => rule.test(name))?.category || "Bouquets";
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
  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
const scrollToProducts = () => {
  productsRef.current.scrollIntoView({
    behavior: "smooth",
  });
};
const scrollToCategories = () => {
  categoriesRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};
const filterByCategory = (category) => {
  setSelectedCategory(category);
  scrollToProducts();
};
const addToCart = (product) => {
  setCart([...cart, product]);
  toast.success(`${product.name} added to cart 💖`);
};
const toggleWishlist = (product) => {
  const exists = wishlist.find((item) => item.id === product.id);
  if (exists) {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
    toast(`${product.name} removed from wishlist`);
  } else {
    setWishlist([...wishlist, product]);
    toast.success(`${product.name} added to wishlist ❤️`);
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
      price: "₹399",
    },
    {
      id: 3,
      image: getImagePath('candygarden.jpeg'),
      name: "Candy Garden Bouquet",
      price: "₹1199",
    },
    {
      id: 4,
      image: getImagePath('lavendardreams.jpeg'),
      name: "Lavender Dreams Bouquet",
      price: "₹599",
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
      price: "₹1499",
    },
    {
      id: 7,
      image: getImagePath('sunflower.jpeg'),
      name: "Sunflower Bouquet",
      price: "₹289",
    },
    {
      id: 8,
      image: getImagePath('cherishedmemoriesbouqet.jpeg'),
      name: "Cherished Memory Bouquet",
      price: "₹1399",
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
      price : "₹220",
    },
    {
      id:11,
      image: getImagePath('guardianbloom.jpeg'),
      name: "Guardian Bloom",
      price : "₹289",
    },
    {
      id:12,
      image: getImagePath('midnightskybouquet.jpeg'),
      name:"Midnight Sky Bouquet",
      price : "₹649",
    },
    {
      id:13,
      image: getImagePath('pinkvelvetbouqet.jpeg'),
      name:"Pink Velvet Bouquet",
      price: "₹1199",
    },
    {
      id:14,
      image: getImagePath('softblushbouquet.jpeg'),
      name:"Soft Blush Bouquet",
      price:"₹1099",
    },
    {
      id:15,
      image: getImagePath('violetgrace.jpeg'),
      name:"Violet Grace Bouquet",
      price:"₹399",
    },
    {
      id:16,
      image: getImagePath('carhang.jpeg'),
      name:"Sunflower Car Hanging",
      price:"₹350",
    },
    {
      id:17,
      image: getImagePath('blueserenity.jpeg'),
      name:"Blue Serenity Bouquet",
      price:"₹420",
    },
    {
      id:18,
      image: getImagePath('blushpot.jpeg'),
      name:"Blush Blossom Pot",
      price:"₹350",
    },
    {
      id:19,
      image: getImagePath('beer1.jpeg'),
      name:"Beer Bouquet",
      price: "₹1999",
    },
    {
      id:20,
      image: getImagePath('divineblessings.jpeg'),
      name:"Divine Blessings Bouquet",
      price: "₹699",
    },
    {
      id:21,
      image: getImagePath('winewonder1.jpeg'),
      name:"Wine Wonder Bouquet",
      price:"₹420",
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
      price:"₹89",
    },
    {
      id:24,
      image: getImagePath('keychain1.jpeg'),
      name:"Sunflower Keychain",
      price:"₹110",
    },
    {
      id:25,
      image: getImagePath('keychain2.jpeg'),
      name:"Velvet Petal Keychain",
      price:"₹89",
    },
    {
      id:26,
      image: getImagePath('keychain3.jpeg'),
      name:"Blue Petal Keychain",
      price:"₹89",
    },
    {
      id:27,
      image: getImagePath('keychain4.jpeg'),
      name:"Tiny Bow Keychain",
      price:"₹49",
    },
    {
      id:28,
      image: getImagePath('mint.jpeg'),
      name:"Minty Fresh Bouquet",
      price:"₹1499",
    },
    {
      id:30,
      image: getImagePath('forever.jpeg'),
      name:"Forever Bloom Bouquet",
      price:"₹1199",
    },
    {
      id:31,
      image: getImagePath('blushbear.jpeg'),
      name:"Pastel Teddy Bouquet",
      price:"₹1799",
    },
    { id:32,
      image: getImagePath('evileyecar.jpeg'),
      name:"Evil Eye Car Hanging",
      price:"₹350",
    },
    {
      id:33,
      image: getImagePath('pot.jpeg'),
      name:"Initial's Pot",
      price:"₹350",
    },
  ];
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes((searchTerm || "").toLowerCase()) &&
    (!selectedCategory || categoryFor(item.name) === selectedCategory)
  );

const ratingFor = (id) => (4.6 + (id % 5) * 0.08).toFixed(1);

  return (
    <div className="home">
      {/* Hero Section */}
      {searchTerm == "" && (
      <section className="hero">
        <div>
          <span className="badge">🧶 Made by hand · Never wilts</span>
          <h1>Flowers that <em>bloom forever,</em> woven one stem at a time.</h1>
          <p>
            Handcrafted pipe-cleaner bouquets for birthdays, anniversaries and weddings —
            a gift that lasts long after fresh flowers fade.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={scrollToProducts}>Shop bouquets →</button>
            <button className="btn btn-ghost" onClick={scrollToCategories}>Explore categories</button>
          </div>
          <div className="hero-meta">
            <div><b>300+</b><span>Bouquets delivered</span></div>
            <div><b>4.9★</b><span>From 200+ reviews</span></div>
            <div><b>99%</b><span>On-time delivery</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="big"><img src={getImagePath('bluemoonlily.jpeg')} alt="Blue Moon Lily bouquet" /></div>
          <div className="small"><img src={getImagePath('candygarden.jpeg')} alt="Candy Garden bouquet" /></div>
          <div className="tag"><b>Never wilts 🌷</b><span>Keeps for years</span></div>
        </div>
      </section>
      )}

      {searchTerm == "" && (
      <div className="trust">
        <div className="trust-in">
          <div><span className="em">✓</span> 100% Handmade</div>
          <div><span className="em">✓</span> Same-day delivery</div>
          <div><span className="em">✓</span> Custom colours on request</div>
          <div><span className="em">✓</span> Gift-wrapped free</div>
        </div>
      </div>
      )}

{/* Categories */}
{searchTerm == "" && (
<section className="sec" ref={categoriesRef}>
  <div className="sechd">
    <div className="k">Shop by category</div>
    <h2>The perfect handmade gift for every moment</h2>
    <p>Find the perfect handmade gift for every special moment 💖</p>
  </div>

  <div className="cats">
    {CATEGORIES.map((cat) => (
      <div
        className={`cat ${selectedCategory === cat.name ? "active" : ""}`}
        key={cat.name}
        onClick={() => filterByCategory(cat.name)}
      >
        <div className="im"><img src={cat.image} alt={cat.name} /></div>
        <div><h4>{cat.name}</h4><p>{cat.desc}</p><span className="go">Shop now →</span></div>
      </div>
    ))}
  </div>
</section>
)}

      {/* Products */}
    <section className="sec" style={{ paddingTop: searchTerm ? undefined : 0 }} ref={productsRef}>
      <div className="prodhd">
        <div>
          <div className="k">Bestsellers</div>
          <h2>
            {searchTerm
              ? `Search Results for "${searchTerm}"`
              : selectedCategory
              ? selectedCategory
              : "Our most-loved bouquets"}
          </h2>
        </div>
        {selectedCategory && (
          <button className="clear-filter" onClick={() => setSelectedCategory(null)}>
            {selectedCategory} ✕
          </button>
        )}
      </div>

        <div className="products-wrap">
        <div className="products">
          {filteredProducts.map((product, index) => (
            <div className="prod" key={product.id}>
              <div className="imwrap">
                {index === 0 && <span className="badge-new">Bestseller</span>}
                <button
                  className="fav"
                  onClick={() => toggleWishlist(product)}
                >
                  {wishlist?.find((item) => item.id === product.id) ? "♥" : "♡"}
                </button>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="body">
                <h4>{product.name}</h4>
                <div className="priceline">
                  <span className="price">{product.price}</span>
                  <span className="stars">★ {ratingFor(product.id)}</span>
                </div>
                <button className="add" onClick={() => addToCart(product)}>
                  ＋ Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="why">
        <div className="why-in">
          <div className="sechd">
            <div className="k">Why Pipeful Bloom</div>
            <h2>A gift they'll keep forever</h2>
          </div>
          <div className="why-grid">
            <div className="wc">
              🌸
              <h4>100% Handmade</h4>
              <p>Each bouquet is handcrafted with care.</p>
            </div>
            <div className="wc">
              🎁
              <h4>Perfect Gift</h4>
              <p>Ideal for birthdays, anniversaries and celebrations.</p>
            </div>
            <div className="wc">
              💖
              <h4>Made with Love</h4>
              <p>Every bouquet is unique and long-lasting.</p>
            </div>
          </div>
        </div>
      </section>
      <CustomerReviews />

      {searchTerm == "" && (
      <section className="ctaband">
        <h2>Want a bouquet in your own colours?</h2>
        <p>Tell us the shades, the occasion and the vibe — we'll handcraft a custom bouquet just for you.</p>
        <Link to="/contact"><button className="btn btn-white">Request a custom bouquet 🌸</button></Link>
      </section>
      )}
      {showWishlist && (
  <>
  <div className="cart-backdrop" onClick={() => setShowWishlist(false)} />
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
      <p className="empty-msg">Your wishlist is empty ❤️</p>
    ) : (
      <>
        {wishlist.map((item) => (
          <div key={item.id} className="cart-item wishlist-item">
           <div className="ci-info">
  <strong>{item.name}</strong>
  <span className="ci-price">{item.price}</span>
</div>

<div className="wishlist-buttons">

  <button
    className="move-btn"
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
  </>
)}
      {showCart && (
  <>
  <div className="cart-backdrop" onClick={() => setShowCart(false)} />
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
      <p className="empty-msg">Cart is empty</p>
    ) : (
      <>
      {cart.map((item, index) => (
  <div
    key={index}
    className="cart-item"
  >
    <div className="ci-info">
      <strong>{item.name}</strong>
      <span className="ci-price">{item.price}</span>
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
        <p className="cart-line">Subtotal: ₹{totalPrice}</p>
        <p className="cart-line">Delivery: ₹{deliveryCharge}</p>
        <h3 className="cart-total">Total: ₹{finalTotal}</h3>
        <Link to="/checkout">
  <button className="checkout-btn">
    Proceed to Checkout
  </button>
</Link>
      </>
    )}
  </div>
  </>
)}
    </div>
  );
};

export default Home;