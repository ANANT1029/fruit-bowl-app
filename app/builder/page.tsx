"use client";
import { useState } from "react";

type Fruit = {
  name: string;
  hindi: string;
  image: string;
  tag: string[];
  category: string;
};

const fruits: Fruit[] = [
  {
    name: "Red Apple",
    hindi: "लाल सेब",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    category: "Core",
    tag: ["sweet", "energy", "kids", "allSeason"]
  },
  {
    name: "Green Apple",
    hindi: "हरा सेब",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    category: "Core",
    tag: ["fiber", "digestion", "weightLoss"]
  },
  {
    name: "Banana",
    hindi: "केला",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e12e",
    category: "Core",
    tag: ["energy", "gym", "sweet"]
  },
  {
    name: "Papaya",
    hindi: "पपीता",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["digestion", "weightLoss"]
  },
  {
    name: "Pomegranate",
    hindi: "अनार",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["blood", "immunity", "premium"]
  },
];

export default function Builder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const toggleSelect = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    );
  };

  const filteredFruits =
    filter === "all"
      ? fruits
      : fruits.filter(f => f.tag.includes(filter));

  return (
    <div className="min-h-screen bg-white pb-28">
      <div className="p-5">

        {/* HERO */}
        <h1 className="text-3xl font-bold">
          Build Your Bowl 🍓
        </h1>
        <p className="text-gray-600 text-sm">
          Select your favorite fruits • English + हिंदी • Healthy + Fresh
        </p>

        {/* FILTERS */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {[
            { id: "all", label: "All" },
            { id: "sweet", label: "Most Sweet 😋" },
            { id: "fiber", label: "High Fiber 💪" },
            { id: "weightLoss", label: "Weight Loss 🔥" },
            { id: "energy", label: "Energy Booster ⚡" },
            { id: "digestion", label: "Digestive Health 🧠" },
            { id: "immunity", label: "Immunity 🛡️" },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3 py-2 rounded-full text-sm border ${
                filter === btn.id
                  ? "bg-green-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* CATEGORY TITLE */}
        <h2 className="mt-6 font-semibold text-lg">
          Select Fruits
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {filteredFruits.map(f => (
            <div
              key={f.name}
              onClick={() => toggleSelect(f.name)}
              className={`border rounded-xl shadow-sm overflow-hidden cursor-pointer ${
                selected.includes(f.name)
                  ? "border-green-600 bg-green-50"
                  : "border-gray-300"
              }`}
            >
              <img
                src={f.image}
                alt={f.name}
                className="h-24 w-full object-cover"
              />

              <div className="p-2">
                <p className="font-semibold text-sm">{f.name}</p>
                <p className="text-gray-500 text-xs">{f.hindi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED SECTION */}
        <div className="mt-6 p-4 bg-gray-100 rounded-xl">
          <h3 className="font-semibold">Selected Fruits</h3>
          {selected.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No fruits selected yet
            </p>
          ) : (
            <div className="flex flex-wrap gap-2 mt-2">
              {selected.map(i => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-300 rounded-full text-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CONTINUE */}
        <button className="w-full bg-green-600 text-white p-4 rounded-xl mt-5 text-lg font-semibold">
          Continue →
        </button>
      </div>
    </div>
  );
}
