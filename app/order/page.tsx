"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const params = useSearchParams();
  const item = params.get("item");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const placeOrder = () => {
    const order = {
      item,
      name,
      phone,
      address,
      time: new Date().toLocaleString(),
      status: "Order Placed",
    };

    const existingOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setSuccess(true);
  };

if (success) {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>✅ Order Placed</h1>
      <p>Your order has been received.</p>
      <p>Status: <b>Order Placed</b></p>

      <a href="/payment">
        <button style={{ marginTop: 15 }}>
          Proceed to Payment
        </button>
      </a>
    </main>
  );
}


  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🧾 Place Your Order</h1>

      <p><b>Item:</b> {item}</p>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />

      <button onClick={placeOrder}>Confirm Order</button>
    </main>
  );
}
