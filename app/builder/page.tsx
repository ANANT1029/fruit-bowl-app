"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a",
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
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
    category: "Core",
    tag: ["blood", "immunity", "premium"]
  },
  {
    name: "Pineapple",
    hindi: "अनानास",
    image: "https://images.unsplash.com/photo-1550258114-b0d240c64e14",
    category: "Core",
    tag: ["tangy", "vitaminC", "digestion"]
  },
  {
    name: "Guava",
    hindi: "अमरूद",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["fiber", "weightLoss"]
  },
  {
    name: "Orange",
    hindi: "संतरा",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    category: "Citrus",
    tag: ["immunity", "juice", "vitaminC"]
  },
  {
    name: "Kiwi",
    hindi: "कीवी",
    image: "https://images.unsplash.com/photo-1585059895524-72359e061381",
    category: "Exotic",
    tag: ["premium", "vitaminC", "immunity"]
  },
  {
    name: "Dragon Fruit",
    hindi: "ड्रैगन फ्रूट",
    image: "https://images.unsplash.com/photo-1527325241570-cc36a37cc978",
    category: "Exotic",
    tag: ["premium", "visual", "antioxidant"]
  },
  {
    name: "Watermelon",
    hindi: "तरबूज",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    category: "Core",
    tag: ["hydration", "lowCalorie", "summer"]
  },
  {
    name: "Muskmelon",
    hindi: "खरबूजा",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277",
    category: "Core",
    tag: ["hydration", "summer", "sweet"]
  },
  {
    name: "Mango",
    hindi: "आम",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    category: "Tropical",
    tag: ["king", "sweet", "seasonal"]
  },
  {
    name: "Green Grapes",
    hindi: "अंगूर",
    image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d",
    category: "Berries",
    tag: ["energy", "kids", "snack"]
  },
  {
    name: "Black Grapes",
    hindi: "काले अंगूर",
    image: "https://images.unsplash.com/photo-1603186741834-45372336881c",
    category: "Berries",
    tag: ["antioxidant", "premium", "sweet"]
  },
  {
    name: "Pear",
    hindi: "नाशपाती",
    image: "https://images.unsplash.com/photo-1544026852-672044877e03",
    category: "Core",
    tag: ["fiber", "gentle", "diet"]
  },
  {
    name: "Chiku",
    hindi: "चीकू",
    image: "https://images.unsplash.com/photo-1596430324803-fb94e1e35d10",
    category: "Core",
    tag: ["sweet", "energy", "soft"]
  },
  {
    name: "Sweet Lime",
    hindi: "मौसंबी",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c91d",
    category: "Citrus",
    tag: ["refreshing", "immunity", "juice"]
  },
  {
    name: "Strawberry",
    hindi: "स्ट्रॉबेरी",
    image: "https://images.unsplash.com/photo-1464960350423-9f8e13fdec7a",
    category: "Berries",
    tag: ["visual", "antioxidant", "premium"]
  },
  {
    name: "Blueberry",
    hindi: "नीलबदरी",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
    category: "Berries",
    tag: ["superfood", "brain", "premium"]
  },
  {
    name: "Avocado",
    hindi: "एवोकाडो",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
    category: "Exotic",
    tag: ["healthyFat", "gym", "creamy"]
  },
  {
    name: "Peach",
    hindi: "आडू",
    image: "https://images.unsplash.com/photo-1595124253349-20f4e6504127",
    category: "Tropical",
    tag: ["soft", "juicy", "skin"]
  },
  {
    name: "Plum",
    hindi: "आलूबुखारा",
    image: "https://images.unsplash.com/photo-1603141708112-9c948e3532f9",
    category: "Core",
    tag: ["tangy", "digestion", "vitaminC"]
  },
  {
    name: "Custard Apple",
    hindi: "शरीफा",
    image: "https://images.unsplash.com/photo-1596430324803-fb94e1e35d10",
    category: "Tropical",
    tag: ["sweet", "calcium", "energy"]
  },
  {
    name: "Litchi",
    hindi: "लीची",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5",
    category: "Tropical",
    tag: ["juicy", "seasonal", "sweet"]
  },
  {
    name: "Cherry",
    hindi: "चेरी",
    image: "https://images.unsplash.com/photo-1528821128474-27f9e7785893",
    category: "Berries",
    tag: ["visual", "small", "premium"]
  },
  {
    name: "Coconut",
    hindi: "नारियल",
    image: "https://images.unsplash.com/photo-1584947844002-3932824e868a",
    category: "Core",
    tag: ["crunchy", "healthyFat", "fresh"]
  },
  {
    name: "Grapefruit",
    hindi: "चकोतरा",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f",
    category: "Citrus",
    tag: ["weightLoss", "tangy", "vitaminC"]
  },
  {
    name: "Fig",
    hindi: "अंजीर",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["iron", "fiber", "premium"]
  },
  {
    name: "Star Fruit",
    hindi: "कमरख",
    image: "https://images.unsplash.com/photo-1596350310214-5f16c7ccb85d",
    category: "Exotic",
    tag: ["visual", "tangy", "unique"]
  },
  {
    name: "Apricot",
    hindi: "खुबानी",
    image: "https://images.unsplash.com/photo-1559181567-c3190cb9959b",
    category: "Tropical",
    tag: ["soft", "vitaminA", "skin"]
  },
  {
    name: "Raspberry",
    hindi: "रसभरी",
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845",
    category: "Berries",
    tag: ["premium", "visual", "tart"]
  },
  {
    name: "Blackberry",
    hindi: "जामुन",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Berries",
    tag: ["antioxidant", "dark", "superfood"]
  },
  {
    name: "Nectarine",
    hindi: "नेक्टराइन",
    image: "https://images.unsplash.com/photo-1595124253349-20f4e6504127",
    category: "Tropical",
    tag: ["smooth", "juicy", "sweet"]
  },
  {
    name: "Persimmon",
    hindi: "तेंदू फल",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Exotic",
    tag: ["sweet", "unique", "texture"]
  },
  {
    name: "Jackfruit",
    hindi: "कटहल",
    image: "https://images.unsplash.com/photo-1596430324803-fb94e1e35d10",
    category: "Tropical",
    tag: ["energy", "heavy", "sweet"]
  },
  {
    name: "Pomelo",
    hindi: "पॉमेलो",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f",
    category: "Citrus",
    tag: ["large", "vitaminC", "fresh"]
  },
  {
    name: "Passion Fruit",
    hindi: "कृष्णा फल",
    image: "https://images.unsplash.com/photo-1530131272421-2ba03a7b1cb4",
    category: "Exotic",
    tag: ["aroma", "premium", "tangy"]
  },
  {
    name: "Mulberry",
    hindi: "शहतूत",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Berries",
    tag: ["iron", "seasonal", "sweet"]
  },
  {
    name: "Cape Gooseberry",
    hindi: "रसभरी",
    image: "https://images.unsplash.com/photo-1596350310214-5f16c7ccb85d",
    category: "Berries",
    tag: ["tangy", "immunity", "small"]
  },
  {
    name: "Wood Apple",
    hindi: "बेल",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["digestion", "ayurveda", "summer"]
  },
  {
    name: "Jujube",
    hindi: "बेर",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Core",
    tag: ["crunchy", "seasonal", "kids"]
  },
  {
    name: "Pomegranate (Seedless)",
    hindi: "सिंदूरी अनार",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
    category: "Core",
    tag: ["premium", "blood", "sweet"]
  },
  {
    name: "Kinnow",
    hindi: "किन्नू",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    category: "Citrus",
    tag: ["winter", "juice", "vitaminC"]
  },
  {
    name: "Honeydew Melon",
    hindi: "खरबूजा (हरा)",
    image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277",
    category: "Core",
    tag: ["sweet", "hydration", "soft"]
  },
  {
    name: "Longan",
    hindi: "लीची जैसा",
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5",
    category: "Exotic",
    tag: ["premium", "sweet", "unique"]
  },
  {
    name: "Mangosteen",
    hindi: "मैंगोस्टीन",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    category: "Exotic",
    tag: ["premium", "rare", "sweet"]
  },
  {
    name: "Date Fruit",
    hindi: "खजूर",
    image: "https://images.unsplash.com/photo-1596430324803-fb94e1e35d10",
    category: "Core",
    tag: ["energy", "iron", "naturalSugar"]
  },
  {
    name: "Tangerine",
    hindi: "छोटा संतरा",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    category: "Citrus",
    tag: ["easyPeel", "kids", "sweet"]
  },

];

export default function Builder() {
const [selected, setSelected] = useState<string[]>([]);
const [filter, setFilter] = useState<string>("all");
const router = useRouter();
const [basketSize, setBasketSize] = useState<number | null>(null);
const allowedSizes = [5, 7, 9];

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
      
  const handleContinue = () => {
    if (!basketSize) {
      alert("Please select basket size");
      return;
    }

    if (selected.length !== basketSize) {
      alert(`Please select exactly ${basketSize} fruits`);
      return;
    }

    alert("Basket Saved! Redirecting to Checkout 🚀");

  const query = `type=custom&size=${basketSize}&items=${selected.join(",")}`;
   router.push(`/order?${query}`);
  };


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

{/* Basket Size Selection */}
<div className="mt-6">
  <h3 className="font-semibold mb-2">Select Basket Size</h3>

  <div className="flex gap-3">
    {allowedSizes.map(size => (
      <button
        key={size}
        onClick={() => setBasketSize(size)}
        className={`px-4 py-2 rounded-xl border ${
          basketSize === size
            ? "bg-green-600 text-white"
            : "bg-gray-100"
        }`}
      >
          {size} Fruits
      </button>
    ))}
  </div>
</div>

{/* CONTINUE BUTTON */}
<button
  onClick={handleContinue}
  className="w-full bg-green-600 text-white p-4 rounded-xl mt-5 text-lg font-semibold"
>
  Continue →
</button>
 </div>
    </div>
  );
}