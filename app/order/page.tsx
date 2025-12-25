"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function OrderPage() {
  const params = useSearchParams();

  const size = Number(params.get("size")) || 0;
  const items = params.get("items")
    ? decodeURIComponent(params.get("items")!).split(",")
    : [];

  const priceMap: Record<number, number> = {
    5: 129,
    7: 149,
    9: 179,
  };

  const price = priceMap[size] || 0;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  // Needed to avoid hydration mismatch sometimes
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <main className="p-5 text-lg">Loading...</main>;

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    const order = {
      size,
      items,
      price,
      name,
      phone,
      address,
      time: new Date().toLocaleString(),
      status: "Order Placed",
    };

    const existing = JSON.parse(localStorage.getItem("orders") || "[]");
    existing.push(order);
    localStorage.setItem("orders", JSON.stringify(existing));

    setSuccess(true);
  };

  // SUCCESS SCREEN
  if (success) {
    return (
      <main className="p-5">
        <h1 className="text-2xl font-bold">✅ Order Placed</h1>

        <p className="mt-2 text-lg">
          Your fruit basket is confirmed 🎉
        </p>

        <div className="bg-green-100 border p-4 rounded-xl mt-4">
          <p><b>Fruits:</b> {items.join(", ")}</p>
          <p><b>Basket:</b> {size} Fruits</p>
          <p><b>Total:</b> ₹{price}</p>
        </div>

        <a href="/">
          <button className="mt-5 bg-green-600 text-white px-4 py-3 rounded-xl w-full text-lg">
            Go Back Home →
          </button>
        </a>
      </main>
    );
  }

  // CHECKOUT PAGE
  return (
    <main className="p-5">
      <h1 className="text-2xl font-bold mb-2">🧺 Checkout</h1>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <p className="font-semibold">Basket Size: {size} Fruits</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <p className="font-semibold mb-2">Selected Fruits:</p>

        {items.length === 0 ? (
          <p className="text-gray-500">No fruits found</p>
        ) : (
          <ul className="list-disc pl-5">
            {items.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-green-100 border border-green-500 p-4 rounded-xl mb-4">
        <p className="font-semibold text-lg">
          Total Price: ₹{price}
        </p>
      </div>

      <input
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border w-full p-3 rounded mb-2"
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="border w-full p-3 rounded mb-2"
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        className="border w-full p-3 rounded mb-3"
      />

      <button
        onClick={placeOrder}
        className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold"
      >
        Confirm Order →
      </button>
    </main>
  );
}
