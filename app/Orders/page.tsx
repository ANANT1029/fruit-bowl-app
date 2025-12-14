"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(savedOrders);
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📦 Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 12,
            }}
          >
            <p><b>Item:</b> {order.item}</p>
            <p><b>Status:</b> {order.status}</p>
            <p><b>Time:</b> {order.time}</p>
          </div>
        ))
      )}
    </main>
  );
}

export default dynamic(() => Promise.resolve(OrdersPage), {
  ssr: false,
});
