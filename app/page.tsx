export default function Home() {
  return (
    <div className="px-4 py-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">Welcome to</p>
          <h1 className="text-2xl font-bold">
            PHALAM 🍃 <span className="text-green-400">Fresh Bowls</span>
          </h1>
        </div>
        <img src="/logo.png" className="w-10 h-10 rounded-full" />
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-green-500 to-teal-400 p-4 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold">Healthy Starts Here</h2>
        <p className="text-sm">
          Fresh fruit bowls delivered in <b>15 minutes</b>
        </p>
      </div>

      {/* Quick Categories */}
      <div className="grid grid-cols-2 gap-3">
        <CategoryCard title="Energy Boost ⚡" />
        <CategoryCard title="Weight Loss 🥗" />
        <CategoryCard title="Immunity 🍊" />
        <CategoryCard title="Corporate Refill 🧑‍💼" />
      </div>

      {/* Popular Bowls */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Trending Bowls 🔥</h2>

        <div className="space-y-3">
          <BowlCard name="Vitamin Power Bowl" price="₹120" kcal="220" />
          <BowlCard name="Protein Fruit Mix" price="₹160" kcal="280" />
          <BowlCard name="Classic Refresh Bowl" price="₹90" kcal="150" />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ title }: any) {
  return (
    <div className="bg-[#111827] border border-gray-700 p-4 rounded-xl hover:scale-[1.02] transition shadow">
      <p className="text-sm">{title}</p>
    </div>
  );
}

function BowlCard({ name, price, kcal }: any) {
  return (
    <div className="bg-[#0b1220] border border-gray-700 p-4 rounded-xl shadow hover:scale-[1.01] transition">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{kcal} kcal</p>
        </div>

        <button className="bg-green-500 px-4 py-2 rounded-lg text-black font-semibold">
          {price}
        </button>
      </div>
    </div>
  );
}
