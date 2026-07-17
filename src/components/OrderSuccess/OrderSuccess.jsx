import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder));
    }
  }, []);

  const orderId = orderData?.orderId || ("PB" + Math.floor(100000 + Math.random() * 900000));

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="tick">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with <strong>Pipeful Bloom 🌸</strong>
        </p>

        <h3>Order ID: #{orderId}</h3>

        {orderData && (
          <div className="order-details" style={{ marginTop: "20px", textAlign: "left", background: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
            <h4>Order Details:</h4>
            <p><strong>Name:</strong> {orderData.customerInfo.name}</p>
            <p><strong>Phone:</strong> {orderData.customerInfo.phone}</p>
            <p><strong>Address:</strong> {orderData.customerInfo.address}, {orderData.customerInfo.city} - {orderData.customerInfo.pincode}</p>
            <p><strong>Total Items:</strong> {orderData.items.length}</p>
            <p><strong>Total Amount:</strong> ₹{orderData.totalAmount}</p>
            <p><strong>Payment Method:</strong> {orderData.payment || "UPI"}</p>
            <p><strong>Payment Status:</strong> {orderData.paymentStatus || "Paid"} ✅</p>
          </div>
        )}

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;