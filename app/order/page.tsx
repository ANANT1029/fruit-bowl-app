"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

function OrderPage() {
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
      <main style={{ padding: 20 }}>
        <h1>✅ Order Placed</h1>
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
    <main style={{ padding: 20 }}>
      <h1>🧾 Place Your Order</h1>

      <p><b>Item:</b> {item}</p>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8 }}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8 }}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ display: "block", marginBottom: 10, padding: 8 }}
      />

      <button onClick={placeOrder}>Confirm Order</button>
    </main>
  );
}

export default dynamic(() => Promise.resolve(OrderPage), {
  ssr: false,
});
