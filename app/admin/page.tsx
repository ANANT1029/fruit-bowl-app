"use client";

import { useEffect, useState } from "react";

const ADMIN_PASSWORD = "admin123"; // 🔐 change later

const STATUS_OPTIONS = [
  "Order Placed",
  "Preparing",
  "Out for Delivery",
  "Delivered",
];

export default function AdminPage() {
  // 🔐 Login states
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // 📦 Orders state
  const [orders, setOrders] = useState<any[]>([]);

  // 📥 Load orders
  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(savedOrders);
  }, []);

  // 🔄 Update order status
  const updateStatus = (index: number, newStatus: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // 🔐 LOGIN SCREEN
  if (!authenticated) {
    return (
      <main style={{ padding: 20, fontFamily: "Arial" }}>
        <h1>🔐 Admin Login</h1>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 8,
            width: "100%",
            marginBottom: 10,
          }}
        />

        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) {
              setAuthenticated(true);
            } else {
              alert("Wrong password");
            }
          }}
        >
          Login
        </button>
      </main>
    );
  }

  // 👑 ADMIN PANEL
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📊 Admin Panel – Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
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
            <p><b>Name:</b> {order.name}</p>
            <p><b>Phone:</b> {order.phone}</p>
            <p><b>Address:</b> {order.address}</p>
            <p><b>Time:</b> {order.time}</p>

            <label>
              <b>Status:</b>{" "}
              <select
                value={order.status}
                onChange={(e) =>
                  updateStatus(index, e.target.value)
                }
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))
      )}
    </main>
  );
}
