import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Checkout.css";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import paymentQR from "../../assets/qr.jpeg";

const UPI_ID = "kritikakashyap833@okhdfcbank";

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
  const [giftMessage, setGiftMessage] = useState(true);
  const [copied, setCopied] = useState(false);

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

  const copyUpiId = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
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
      toast.error("Please fill all the details.");
      return;
    }

    if (form.phone.length !== 10) {
      toast.error("Phone number should be 10 digits.");
      return;
    }

    if (form.pincode.length !== 6) {
      toast.error("Pincode should be 6 digits.");
      return;
    }

    if (!paymentConfirmed) {
      toast.error("Please confirm that you have completed the payment.");
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
      giftMessage,
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
        products: cart.map((item) => `${item.name} - ${item.price}`).join("\n"),
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

      toast.error(error.text || "Something went wrong");
    }
  };

  const canPlaceOrder = paymentConfirmed;

  return (
    <div className="checkout">
      <div className="wrap">
        <div className="steps">
          <div className="step done">
            <div className="n">✓</div>
            <div className="lbl">Cart</div>
          </div>
          <div className="bar done" />
          <div className="step now">
            <div className="n">2</div>
            <div className="lbl">Details &amp; payment</div>
          </div>
          <div className="bar" />
          <div className="step">
            <div className="n">3</div>
            <div className="lbl">Confirmation</div>
          </div>
        </div>

        <div className="pagetitle">
          <h1>Almost yours 🌷</h1>
          <p>Fill in your details, pay by UPI, and your handmade bouquet is on its way.</p>
        </div>

        <div className="grid">
          {/* LEFT */}
          <div>
            <div className="card">
              <div className="hd">
                <div className="ci">📍</div>
                <h3>Delivery details</h3>
                <span className="step-tag">Step 1 of 2</span>
              </div>
              <div className="bd">
                <div className="two">
                  <div className="field half">
                    <input id="f-name" name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
                    <label htmlFor="f-name">Full name</label>
                  </div>
                  <div className="field half">
                    <input id="f-phone" name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange} />
                    <label htmlFor="f-phone">Phone number</label>
                  </div>
                </div>
                <div className="field">
                  <input id="f-email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
                  <label htmlFor="f-email">Email address</label>
                </div>
                <div className="field">
                  <textarea id="f-address" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
                  <label htmlFor="f-address">Delivery address</label>
                </div>
                <div className="three">
                  <div className="field half">
                    <input id="f-city" name="city" placeholder="City" value={form.city} onChange={handleChange} />
                    <label htmlFor="f-city">City</label>
                  </div>
                  <div className="field half">
                    <input id="f-state" name="state" placeholder="State" value={form.state} onChange={handleChange} />
                    <label htmlFor="f-state">State</label>
                  </div>
                  <div className="field half">
                    <input id="f-pincode" name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} />
                    <label htmlFor="f-pincode">Pincode</label>
                  </div>
                </div>

                <div
                  className={`opt ${giftMessage ? "on" : ""}`}
                  onClick={() => setGiftMessage(!giftMessage)}
                >
                  <div className="cbox">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <b>Add a gift message 💌</b>
                    <span>We'll hand-write your note on a card</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="hd">
                <div className="ci">💳</div>
                <h3>Payment</h3>
                <span className="step-tag">Step 2 of 2</span>
              </div>
              <div className="bd">
                <div className="upi">
                  <div className="qr">
                    <img src={paymentQR} alt="UPI QR Code" />
                  </div>
                  <div>
                    <div className="who">
                      Pay to <b>Kritika Kashyap</b>
                    </div>
                    <p className="steps-txt">
                      Scan the QR with <b>any UPI app</b>, complete the payment, then tick the box
                      below. We'll confirm your order by email.
                    </p>
                    <div className="upiid">
                      <code>{UPI_ID}</code>
                      <button type="button" onClick={copyUpiId}>
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`confirm ${paymentConfirmed ? "on" : ""}`}
                  onClick={() => setPaymentConfirmed(!paymentConfirmed)}
                >
                  <div className="cbox">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span>
                    I confirm that I have completed the UPI payment of <b>₹{finalTotal.toLocaleString("en-IN")}</b>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: summary */}
          <div className="summary">
            <div className="sum-card">
              <div className="hd">
                <h3>Order summary</h3>
              </div>

              <div className="items">
                {cart.map((item, index) => (
                  <div className="item" key={index}>
                    {item.image ? (
                      <img className="th" src={item.image} alt={item.name} />
                    ) : (
                      <div className="th" />
                    )}
                    <div>
                      <b>{item.name}</b>
                      <span>Handmade bouquet</span>
                    </div>
                    <div className="p">{item.price}</div>
                  </div>
                ))}
              </div>

              <div className="totals">
                <div className="tl">
                  <span>Subtotal</span>
                  <b>₹{total.toLocaleString("en-IN")}</b>
                </div>
                <div className="tl">
                  <span>Delivery</span>
                  <b>₹{deliveryCharge}</b>
                </div>
                <div className={`tl ${giftMessage ? "free" : ""}`}>
                  <span>Gift message</span>
                  <b>{giftMessage ? "Free" : "—"}</b>
                </div>
              </div>

              <div className="shipping-policy">
                <p>
                  <strong>Shipping Policy</strong>
                </p>
                <p>• Free delivery within Gurdaspur</p>
                <p>• ₹150 across Punjab</p>
                <p>• ₹250 for the rest of India</p>
              </div>

              <div className="grand">
                <span className="k">Total</span>
                <span className="v">₹{finalTotal.toLocaleString("en-IN")}</span>
              </div>

              <button
                className="placebtn"
                onClick={placeOrder}
                disabled={!canPlaceOrder || isProcessing}
              >
                {isProcessing ? (
                  "⏳ Processing…"
                ) : (
                  <>
                    Place order
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M2 8h11M9 4l4 4-4 4" />
                    </svg>
                  </>
                )}
              </button>

              <div className="assure">
                <div>
                  <span className="em">🚚</span> Delivery calculated at checkout
                </div>
                <div>
                  <span className="em">🌸</span> Handmade to order — never wilts
                </div>
                <div>
                  <span className="em">🔒</span> Your details stay private
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
