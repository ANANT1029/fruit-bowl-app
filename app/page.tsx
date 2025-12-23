"use client";
import { useState } from "react";

export default function BowlBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Record<string, boolean>>({});

  const toggleSelect = (item: string) => {
    if (!availability[item]) return; // Can't select unavailable items

    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const toggleAvailability = (item: string) => {
    setAvailability((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const Section = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div
            key={item}
            className={`border rounded-xl p-3 shadow cursor-pointer flex justify-between items-center
            ${selected.includes(item) ? "bg-green-100 border-green-500" : "bg-white"}
            ${availability[item] === false ? "opacity-40" : ""}
          `}
            onClick={() => toggleSelect(item)}
          >
            <span className="text-sm">{item}</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleAvailability(item);
              }}
              className={`text-xs px-2 py-1 rounded-lg ${
                availability[item] === false
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {availability[item] === false ? "Unavailable" : "Available"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="p-5">
        <h1 className="text-2xl font-bold">
          Build Your Bowl <span>🍓</span>
        </h1>
        <p className="text-gray-600 text-sm">
          Choose your favorite fruits & salads. Toggle to mark availability.
        </p>

        {/* ---------------- CORE FRUITS ---------------- */}
        <Section
          title="🍎 Core Base Fruits (Always Available)"
          items={[
            "Red Apple (लाल सेब)",
            "Green Apple (हरा सेब)",
            "Banana (केला)",
            "Papaya (पपीता)",
            "Pomegranate (अनार)",
            "Pineapple (अनानास)",
            "Guava (अमरुद)",
            "Pear (नाशपाती)",
            "Sapodilla / Chiku (चीकू)",
            "Watermelon (तरबूज)",
          ]}
        />

        {/* ---------------- CITRUS ---------------- */}
        <Section
          title="🍊 Citrus & Refreshing Fruits"
          items={[
            "Orange (संतरा)",
            "Sweet Lime / Mosambi (मौसंबी)",
            "Grapefruit (चकोतरा)",
            "Tangerine / Mandarin (नागपुर संतरा)",
            "Lemon / Lime (नींबू)",
            "Pomelo (चकोतरा)",
            "Kinnow (किन्नू)",
            "Muskmelon (खरबूजा)",
            "Honeydew Melon (हनीड्यू)",
            "Sun Melon (सन खरबूजा)",
          ]}
        />

        {/* ---------------- BERRIES ---------------- */}
        <Section
          title="🍓 Berries & Premium Fruits"
          items={[
            "Strawberry (स्ट्रॉबेरी)",
            "Blueberry (ब्लूबेरी)",
            "Blackberry (ब्लैकबेरी)",
            "Raspberry (रसभरी)",
            "Black Grapes (काले अंगूर)",
            "Green Grapes (हरे अंगूर)",
            "Red Grapes (लाल अंगूर)",
            "Cherry (चेरी)",
            "Mulberry (शहतूत)",
            "Cape Gooseberry / Rasbhari (रसभरी)",
          ]}
        />

        {/* ---------------- TROPICAL ---------------- */}
        <Section
          title="🌴 Tropical & Exotic Fruits"
          items={[
            "Mango (आम)",
            "Kiwi (कीवी)",
            "Dragon Fruit (ड्रैगन फ्रूट)",
            "Avocado (ऐवोकाडो)",
            "Lychee (लीची)",
            "Passion Fruit (पैशन फ्रूट)",
            "Star Fruit (कमरख)",
            "Custard Apple / Sharifa (सीताफल)",
            "Jackfruit (कटहल)",
            "Mangosteen (मेंगोस्टीन)",
          ]}
        />

        {/* ---------------- STONE FRUITS ---------------- */}
        <Section
          title="🍑 Stone Fruits & Unique Textures"
          items={[
            "Peach (आड़ू)",
            "Plum (आलूबुखारा)",
            "Apricot (खुबानी)",
            "Nectarine (नेक्टरीन)",
            "Persimmon (तेंदू/जापानी फल)",
            "Fig / Anjeer (अंजीर)",
            "Coconut Chunks (नारियल)",
            "Fresh Dates (खजूर)",
            "Wood Apple / Bael (बेल)",
            "Jujube / Ber (बेर)",
          ]}
        />

        {/* ---------------- SALAD BASES ---------------- */}
        <Section
          title="🥗 Salad Base Greens"
          items={[
            "Iceberg Lettuce (आइसबर्ग लेट्यूस)",
            "Romaine Lettuce (रोमेन लेट्यूस)",
            "Baby Spinach (पालक)",
            "Purple Cabbage (बैंगनी पत्ता गोभी)",
            "Arugula / Rocket Leaves (रॉकेट पत्ता)",
          ]}
        />

        {/* ---------------- SALAD CRUNCH ---------------- */}
        <Section
          title="🥒 Salad Crunch & Veggies"
          items={[
            "English Cucumber (खीरा)",
            "Cherry Tomatoes (चेरी टमाटर)",
            "Bell Peppers (शिमला मिर्च)",
            "Carrot (गाजर)",
            "Broccoli (ब्रोकली)",
          ]}
        />

        {/* ---------------- PROTEINS ---------------- */}
        <Section
          title="💪 Protein & Fillers"
          items={[
            "Chickpeas / Chana (चना)",
            "Paneer (पनीर)",
            "Tofu (टोफू)",
            "Sweet Corn (भुट्टा)",
            "Boiled Peanuts / Walnuts (मूंगफली/अखरोट)",
            "Kidney Beans / Rajma (राजमा)",
          ]}
        />

        {/* ---------------- TOPPINGS ---------------- */}
        <Section
          title="✨ Toppings & Flavor Boosters"
          items={[
            "Feta Cheese (फेटा चीज़)",
            "Parmesan (पार्मेज़ान)",
            "Black & Green Olives (जैतून)",
            "Jalapeño (जलेपेनो)",
            "Pickled Onion (अचार वाला प्याज)",
            "Mixed Seeds (मिक्स बीज)",
          ]}
        />

        {/* Selected */}
        <div className="mt-8 p-4 bg-gray-100 rounded-xl">
          <h3 className="font-semibold mb-2">Selected Items:</h3>
          {selected.length === 0 ? (
            <p className="text-gray-500 text-sm">No items selected yet</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selected.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-200 rounded-full text-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          )}
        </div>

        <button className="w-full mt-5 bg-green-600 text-white p-4 rounded-xl text-lg font-semibold shadow">
          Continue to Price & Checkout →
        </button>
      </div>
    </div>
  );
}
