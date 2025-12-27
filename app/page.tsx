"use client";
import Link from "next/link";

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
        {[
          "Fruit Bowls",
          "Vitamin Bowls",
          "Gym Bowls",
          "Kids",
          "Corporate",
          "Build Your Bowl",
        ].map((c) => (
          <span
            key={c}
            className="bg-white px-4 py-2 rounded-full border shadow-sm text-sm"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Hero */}
      <div className="px-4 mt-5">
        <div className="bg-green-500 text-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold">Fresh Fruit Bowls from ₹99</h2>
          <p>Healthy • Fresh • Delivered Fast</p>
        </div>
      </div>

      {/* ---------------- SECTIONS ---------------- */}

      <Section title="Recommended For You ⭐" data={recommended} />

      <Section title="Nutrition Burst ⚡" data={nutrition} />

      <CustomizeSection />

      <Section title="Seasonal Taste 🍊" data={seasonal} />
    </div>
  );
}

/* ---------------- REUSABLE SECTION COMPONENT ---------------- */

function Section({ title, data }: any) {
  return (
    <div className="mt-6 px-4">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <span className="text-green-600 text-sm cursor-pointer">See all</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {data.map((b: any) => (
          <div
            key={b.name}
            className="w-52 bg-white shadow border rounded-xl p-3"
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

/* ---------------- CUSTOMISE SECTION ---------------- */

function CustomizeSection() {
  return (
    <div className="mt-6 px-4">
      <h3 className="font-semibold text-lg mb-2">
        My Bowl, My Taste (Customise) 🥗
      </h3>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {custom.map((b) => (
          <div
            key={b.name}
            className="w-52 bg-white shadow border rounded-xl p-3"
          >
            <h4 className="font-bold text-sm">{b.name}</h4>
            <p className="text-xs text-gray-500">{b.subtitle}</p>

            <Link href="/builder">
              <button className="mt-2 w-full bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                Customise →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const recommended = [
  {
    name: "Morning Energy Classic",
    subtitle: "Apple • Banana • Papaya • Pomegranate",
    price: 149,
  },
  {
    name: "Kids Rainbow Bowl",
    subtitle: "Mango • Strawberry • Grapes • Banana",
    price: 159,
  },
  {
    name: "Light Evening Snack",
    subtitle: "Watermelon • Muskmelon • Orange • Guava",
    price: 129,
  },
  {
    name: "Office Smart Mix",
    subtitle: "Apple • Pear • Grapes • Fig",
    price: 179,
  },
];

const nutrition = [
  {
    name: "Vitamin C Booster",
    subtitle: "Guava • Orange • Kiwi • Pineapple",
    price: 169,
  },
  {
    name: "Iron & Blood Builder",
    subtitle: "Pomegranate • Fig • Dates • Black Grapes",
    price: 189,
  },
  {
    name: "High Fibre Cleanse",
    subtitle: "Papaya • Guava • Pear • Plum",
    price: 159,
  },
  {
    name: "Hydration Mix",
    subtitle: "Watermelon • Muskmelon • Sweet Lime • Coconut",
    price: 149,
  },
];

const custom = [
  {
    name: "Gym Power Base",
    subtitle: "Banana • Avocado • Dates • Pomegranate",
  },
  {
    name: "Corporate Focus",
    subtitle: "Apple • Blueberry • Pomegranate • Coconut",
  },
  {
    name: "College Budget",
    subtitle: "Watermelon • Banana • Muskmelon • Orange",
  },
  {
    name: "Kids Choice",
    subtitle: "Mango • Strawberry • Grapes • Chiku",
  },
];

const seasonal = [
  {
    name: "Summer Mango Fiesta",
    subtitle: "Mango • Watermelon • Muskmelon • Sweet Lime",
    price: 179,
  },
  {
    name: "Winter Citrus Glow",
    subtitle: "Kinnow • Orange • Grapefruit • Sweet Lime",
    price: 169,
  },
  {
    name: "Monsoon Immunity Mix",
    subtitle: "Papaya • Guava • Pomegranate • Kiwi",
    price: 189,
  },
  {
    name: "Hills Special Bowl",
    subtitle: "Apple • Peach • Plum • Seasonal Fruit",
    price: 199,
  },
];
