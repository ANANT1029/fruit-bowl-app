"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black pb-20">

      {/* ---------------- HERO CAROUSEL ---------------- */}
      <section className="w-full overflow-hidden">
        <div className="w-full h-48 rounded-b-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576402187878-974f5a016c35"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 mt-4">
          <h1 className="text-2xl font-bold">Fresh • Healthy • Fast</h1>
          <p className="text-gray-600">Fruit Bowls & Salads delivered in 15 minutes</p>

          <Link href="/builder"></Link>
        
            <button className="mt-4 bg-green-500 text-white px-5 py-3 rounded-xl w-full font-semibold shadow">
              Build Your Own Bowl 🍓
            </button>
          </a>
        </div>
      </section>



      {/* ---------------- SMART CATEGORIES ---------------- */}
      <section className="px-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Shop by Health Goal</h2>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[
            "⚡ Energy Boosters",
            "🏋️‍♂️ Post Workout",
            "🥗 Weight Loss",
            "🍊 Immunity Boost",
            "🍓 Exotic Luxury",
            "🧑‍💼 Corporate Refresh",
          ].map((c, i) => (
            <span
              key={i}
              className="whitespace-nowrap bg-gray-100 border px-4 py-2 rounded-2xl shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </section>



      {/* ---------------- DIY BUILDER BANNER ---------------- */}
      <section className="px-4 mt-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-5 rounded-2xl shadow-lg text-white">
          <h2 className="text-xl font-bold">Your Bowl. Your Taste. Your Power.</h2>
          <p className="text-sm mt-1">
            Choose Base → Pick Fruits → Add Boosters
          </p>

          <a href="/builder">
            <button className="mt-3 bg-white text-green-700 font-semibold px-4 py-2 rounded-lg shadow">
              Start Building ⭐
            </button>
          </a>
        </div>
      </section>



      {/* ---------------- BEST SELLERS ---------------- */}
      <section className="px-4 mt-6">
        <h2 className="text-xl font-semibold mb-2">Bestsellers 🔥</h2>

        <div className="grid grid-cols-1 gap-4">

          <BowlCard
            name="Vitamin Power Punch"
            desc="Apple • Kiwi • Orange • Honey"
            kcal="220 kcal"
            price="₹149"
            img="https://images.unsplash.com/photo-1540420773420-3366772f4999"
            link="/order?item=Vitamin Power Punch"
          />

          <BowlCard
            name="Zesty Weight Loss Mix"
            desc="Papaya • Pineapple • Watermelon"
            kcal="180 kcal"
            price="₹129"
            img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
            link="/order?item=Weight Loss Mix"
          />

          <BowlCard
            name="Protein Charge Bowl"
            desc="Fruits + Nuts + Seeds"
            kcal="260 kcal"
            price="₹179"
            img="https://images.unsplash.com/photo-1551024601-bec78aea704b"
            link="/order?item=Protein Charge Bowl"
          />

        </div>
      </section>



      {/* ---------------- TRUST / FRESHNESS SECTION ---------------- */}
      <section className="px-4 mt-8 mb-10">
        <div className="bg-gray-100 p-5 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">Freshness Promise 🍃</h2>

          <ul className="space-y-1 text-gray-700 text-sm">
            <li>✔ Sourced fresh every morning</li>
            <li>✔ Zero-contact hygienic preparation</li>
            <li>✔ Airtight premium packaging</li>
            <li>✔ Delivered within 15 minutes</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



// ---------------------- BOWL CARD COMPONENT ----------------------
function BowlCard({ name, desc, kcal, price, img, link }: any) {
  return (
    <div className="border rounded-2xl shadow-sm overflow-hidden hover:scale-[1.01] transition bg-white">
      <img src={img} className="w-full h-36 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-600 text-sm">{kcal}</span>

          <a href={link}>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              {price}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
