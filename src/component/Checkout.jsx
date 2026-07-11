import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import paymentQR from "../assets/qr.jpeg";

const Checkout = ({ cart, setCart }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "UPI",
  });
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );

  const getDeliveryCharge = () => {
    const city = form.city.trim().toLowerCase();
    const state = form.state.trim().toLowerCase();

    if (city === "gurdaspur" && state === "punjab") {
      return 0;
    }

    if (state === "punjab") {
      return 150;
    }

    return 250;
  };

  const deliveryCharge = getDeliveryCharge();
  const finalTotal = total + deliveryCharge;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
const placeOrder = async () => {
  console.log("Placing order with data:", form, cart, finalTotal);
  if (
    !form.name ||
    !form.email ||
    !form.phone ||
    !form.address ||
    !form.city ||
    !form.state ||
    !form.pincode
  ) {
    alert("Please fill all the details.");
    return;
  }

  if (form.phone.length !== 10) {
    alert("Phone number should be 10 digits.");
    return;
  }

  if (form.pincode.length !== 6) {
    alert("Pincode should be 6 digits.");
    return;
  }

  if (!paymentConfirmed) {
    alert("Please confirm that you have completed the payment.");
    return;
  }

  setIsProcessing(true);

  // Generate Order ID
  const orderId = "PB" + Math.floor(100000 + Math.random() * 900000);
   console.log("Generated Order ID:", orderId);
  // Create Order Object
  const orderData = {
    orderId,
    customerInfo: form,
    items: cart,
    totalAmount: finalTotal,
    payment: form.payment,
    paymentStatus: "Paid",
    timestamp: new Date(),
  };

  try {
    // Save Order in Firestore
    await addDoc(collection(db, "orders"), orderData);
       
    console.log("Order saved in Firestore:", orderData);
    // Save latest order for Success Page
    localStorage.setItem("lastOrder", JSON.stringify(orderData));

const templateParams = {
  email: form.email,
  customer_name: form.name,
  order_id: orderId,
  products: cart.map(item => `${item.name} - ${item.price}`).join("\n"),
  total: finalTotal,
  address: `${form.address}, ${form.city} - ${form.pincode}`,
  phone: form.phone,
  payment: form.payment,
};
    console.log("Email Parameters:", templateParams);

    const response = await emailjs.send(
      "service_bk5k8nq",
      "template_nwdmbgf",
      templateParams,
      "uW3FVcVAMKkmH8gEY"
    );

    console.log("EmailJS Response:", response);
    setCart([]);
    navigate("/success");

  } catch (error) {
    console.log("EmailJS Full Error:", error);
    console.log("Status:", error.status);
    console.log("Text:", error.text);
    setIsProcessing(false);

    alert(error.text || "Something went wrong");
  }
};

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="customer-details">
          <h2>Customer Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />
        </div>

        <div className="payment-section">
          <h3>💳 UPI Payment</h3>
          <div className="payment-method-display">
            <span className="payment-method-label">Pay To</span>
            <span className="payment-method-value">Kritika Kashyap</span>
          </div>
          <img src={paymentQR}
          alt="UPI QR Code"
          className="payment-qr"></img>
          <p className="payment-note">Scan the QR code using any UPI app. After completing the payment, tick the checkbox below to place your order. Your order will be confirmed by email after payment.</p>
          <div className="payment-confirm">
            <input
              type="checkbox"
              checked={paymentConfirmed}
              onChange={(e) => setPaymentConfirmed(e.target.checked)}
              id="payment-confirm"
            />
            <label htmlFor="payment-confirm">☑ I confirm that I have completed the UPI payment.</label>
          </div>

          <button className="place-order-button" onClick={placeOrder} disabled={!paymentConfirmed || isProcessing}>
            {isProcessing ? "⏳ Processing Payment..." : "Place Order"}
          </button>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - {item.price}
            </p>
          ))}

          <hr />
          <p>Subtotal : ₹{total}</p>

<p>Delivery : ₹{deliveryCharge}</p>

<div className="shipping-policy">
  <p><strong>Shipping Policy</strong></p>
  <p>• Free delivery within Gurdaspur</p>
  <p>• ₹150 across Punjab</p>
  <p>• ₹250 for the rest of India</p>
</div>

<hr />

<h3>Total : ₹{finalTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;