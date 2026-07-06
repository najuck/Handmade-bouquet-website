import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const orderId = "PB" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="tick">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>Pipeful Bloom 🌸</strong>
        </p>

        <h3>Order ID: #{orderId}</h3>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;