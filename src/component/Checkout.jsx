import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const Checkout = ({ cart, setCart }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );
  const deliveryCharge = 250;
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

  // Generate Order ID
  const orderId = "PB" + Math.floor(100000 + Math.random() * 900000);
   console.log("Generated Order ID:", orderId);
  // Create Order Object
  const orderData = {
    orderId,
    customerInfo: form,
    items: cart,
    totalAmount: finalTotal,
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

  }catch (error) {
  console.log("EmailJS Full Error:", error);
  console.log("Status:", error.status);
  console.log("Text:", error.text);

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
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />

          <select name="payment" onChange={handleChange}>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>
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

<hr />

<h3>Total : ₹{finalTotal}</h3>
          
          <button onClick={placeOrder}>
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;