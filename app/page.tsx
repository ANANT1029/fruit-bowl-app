"use client";
import Link from "next/link";
import { vitaminBowls, lifestyleBowls } from "@/data/bowls";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">

      {/* Delivery Bar */}
      <div className="p-4 bg-white shadow-sm flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg">Delivering in 10–20 mins</p>
          <span className="text-sm text-gray-500">
            Dehradun • Fresh Cut Fruits
          </span>
        </div>
        <button className="text-green-600 text-sm">Change</button>
      </div>

      {/* Search */}
      <div className="px-4 mt-3">
        <input
          placeholder="Search fruits, bowls, salads..."
          className="w-full p-3 rounded-full shadow-sm border"
        />
      </div>

      {/* Quick Categories */}
      <div className="flex gap-3 overflow-x-auto px-4 mt-4">
        {["Fruit Bowls","Vitamin Bowls","Gym Bowls","Kids","Corporate","Build Your Bowl"].map(c => (
          <span key={c} className="bg-white px-4 py-2 rounded-full border shadow-sm text-sm">
            {c}
          </span>
        ))}
      </div>

      {/* Hero Banner */}
      <div className="px-4 mt-5">
        <div className="bg-green-500 text-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            Fresh Fruit Bowls from ₹99
          </h2>
          <p>Healthy • Fresh • Delivered Fast</p>
        </div>
      </div>

      {/* Vitamin Bowls */}
      <Section title="Vitamin Boost Bowls" data={vitaminBowls} />

      {/* Lifestyle */}
      <Section title="Gym & Lifestyle Bowls" data={lifestyleBowls} />

      {/* Build Your Bowl */}
      <div className="px-4 mt-6">
        <div className="bg-white shadow p-5 rounded-2xl">
          <h3 className="font-bold text-lg">Build Your Own Bowl</h3>
          <p className="text-gray-500 text-sm">
            Choose Fruits → Add Toppings → Done
          </p>
          <Link href="/builder">
            <button className="mt-3 w-full bg-green-600 text-white p-3 rounded-xl">
              Start Building ⭐
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

function Section({ title, data }: any) {
  return (
    <div className="mt-6 px-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {data.map((b: any) => (
          <div
            key={b.id}
            className="w-48 bg-white shadow border rounded-xl p-3"
          >
            <h4 className="font-bold text-sm">{b.name}</h4>
            <p className="text-xs text-gray-500">{b.subtitle}</p>

            <div className="flex justify-between mt-2 items-center">
              <span className="font-semibold">₹{b.price}</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
