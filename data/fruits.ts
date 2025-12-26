export type FruitCategory =
  | "Everyday Essentials"
  | "Citrus & Immunity"
  | "Berries & Exotics"
  | "Summer Specials"
  | "Gym & Energy"
  | "Kids Favourites";

export type NutritionTag =
  | "vitaminC"
  | "vitaminA"
  | "iron"
  | "fiber"
  | "healthyFat"
  | "lowCal"
  | "hydration"
  | "energy"
  | "antioxidant";

export interface Fruit {
  name: string;
  hindi: string;
  image: string;
  uiCategory: FruitCategory;
  nutrition: NutritionTag[];
  seasonal?: "summer" | "winter" | "allSeason";
  premium?: boolean;
  kidsFriendly?: boolean;
}

export const fruits: Fruit[] = [
  {
    name: "Red Apple",
    hindi: "लाल सेब",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    uiCategory: "Everyday Essentials",
    nutrition: ["fiber", "energy", "antioxidant"],
    seasonal: "allSeason",
    kidsFriendly: true
  },
  {
    name: "Banana",
    hindi: "केला",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e12e",
    uiCategory: "Gym & Energy",
    nutrition: ["energy", "potassium", "fiber"],
    seasonal: "allSeason",
    kidsFriendly: true
  },
  {
    name: "Orange",
    hindi: "संतरा",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    uiCategory: "Citrus & Immunity",
    nutrition: ["vitaminC", "immunity", "hydration"],
    seasonal: "winter"
  },
  {
    name: "Kiwi",
    hindi: "कीवी",
    image: "https://images.unsplash.com/photo-1585059895524-72359e061381",
    uiCategory: "Berries & Exotics",
    nutrition: ["vitaminC", "antioxidant"],
    premium: true
  },
  {
    name: "Watermelon",
    hindi: "तरबूज",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    uiCategory: "Summer Specials",
    nutrition: ["hydration", "lowCal"],
    seasonal: "summer"
  },
];
