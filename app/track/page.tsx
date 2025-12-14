"use client";

import { useState } from "react";

export default function TrackOrderPage() {
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState("");

  const findOrder = () => {
    const orders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const userOrders = orders.filter(
      (o: any) => o.phone === phone
    );

    if (userOrders.length === 0) {
      setError("No order found for this phone number");
      setOrder(null);
    } else {
      setOrder(userOrders[userOrders.length - 1]); // latest order
      setError("");
    }
  };

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📦 Track Your Order</h1>

      <input
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 10 }}
      />

      <button onClick={findOrder}>Track Order</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {order && (
        <div
          style={{
            marginTop: 20,
            padding: 12,
            border: "1px solid #ccc",
          }}
        >
          <p><b>Item:</b> {order.item}</p>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Ordered At:</b> {order.time}</p>
        </div>
      )}
    </main>
  );
}
