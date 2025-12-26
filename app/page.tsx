"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [address] = useState("Dehradun");

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* -------- ADDRESS + DELIVERY BAR -------- */}
      <div className="px-4 py-3 bg-white shadow flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Delivering to</p>
          <p className="font-semibold text-lg">{address}</p>
          <p className="text-green-600 text-sm">Delivery in 10–20 mins ⏱️</p>
        </div>

        <button className="text-sm border px-3 py-1 rounded-lg">
          Change
        </button>
      </div>


      {/* -------- SEARCH BAR -------- */}
      <div className="px-4 mt-3">
        <div className="bg-white p-3 rounded-full shadow flex items-center gap-2">
          <span className="text-gray-500">🔍</span>
          <input
            placeholder="Search fruits, salads, bowls..."
            className="w-full outline-none"
          />
          <span className="text-gray-500">🎤</span>
        </div>
      </div>


      {/* -------- QUICK CATEGORY ICONS -------- */}
      <section className="px-4 mt-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

          {[
            { name: "Fruit Bowls", emoji: "🍓" },
            { name: "Salad Bowls", emoji: "🥗" },
            { name: "Build Your Bowl", emoji: "🧺" },
            { name: "Weight Loss", emoji: "🔥" },
            { name: "Energy Boost", emoji: "⚡" },
            { name: "Immunity", emoji: "🛡️" },
          ].map((c, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white shadow rounded-full p-4">
                <span className="text-xl">{c.emoji}</span>
              </div>
              <p className="text-sm mt-1">{c.name}</p>
            </div>
          ))}

        </div>
      </section>


      {/* -------- SMALL PROMO BANNER -------- */}
      <section className="px-4 mt-4">
        <div className="bg-green-200 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">
              Morning Fruit Bowls from ₹99
            </h3>
            <p className="text-sm text-gray-700">
              Freshly cut · Delivered fast
            </p>

            <Link href="/builder">
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg">
                Build Your Bowl ⭐
              </button>
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999"
            className="w-20 h-20 rounded-xl object-cover"
          />
        </div>
      </section>


      {/* -------- TOP PICKS GRID -------- */}
      <section className="px-4 mt-5">
        <h2 className="text-lg font-semibold mb-2">Top Picks for You</h2>

        <div className="grid grid-cols-2 gap-3">
          {[
            {
              name: "Vitamin Power Punch",
              price: "₹149",
              img: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
              link: "/order?item=Vitamin Bowl"
            },
            {
              name: "Weight Loss Mix",
              price: "₹129",
              img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
              link: "/order?item=Weight Loss"
            },
            {
              name: "Energy Booster",
              price: "₹159",
              img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
              link: "/order?item=Energy"
            },
          ].map((p, i) => (
            <div key={i} className="bg-white p-2 rounded-xl shadow">
              <img src={p.img} className="h-24 w-full rounded-xl object-cover"/>

              <p className="font-semibold text-sm mt-1">{p.name}</p>

              <div className="flex justify-between items-center mt-1">
                <span className="font-bold">{p.price}</span>

                <a href={p.link}>
                  <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                    + Add
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* -------- COLLECTION CAROUSEL -------- */}
      <section className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-2">Weight Loss Bowls 🔥</h2>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white min-w-[150px] p-2 rounded-xl shadow">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                className="h-24 w-full rounded-xl object-cover"
              />
              <p className="font-semibold text-sm mt-1">Low Cal Mix</p>
              <p className="font-bold">₹129</p>
            </div>
          ))}
        </div>
      </section>


      {/* -------- FRESHNESS PROMISE -------- */}
      <section className="px-4 mt-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">Freshness Promise 🍃</h3>

          <ul className="text-sm text-gray-700 space-y-1">
            <li>✔ Cut fresh after order</li>
            <li>✔ No added sugar</li>
            <li>✔ Sealed hygienic packing</li>
            <li>✔ Delivered within 15 minutes</li>
          </ul>
        </div>
      </section>


      {/* -------- BOTTOM NAV -------- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow h-14 flex justify-around items-center text-sm">
        <a href="/" className="text-green-600 font-semibold">🏠 Home</a>
        <a href="/builder">🧺 Build</a>
        <a href="/Orders">📦 Orders</a>
        <a href="/admin">👤 Account</a>
      </nav>

    </div>
  );
}
