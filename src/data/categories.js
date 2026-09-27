import {
  CakeSlice,
  Coffee,
  Drumstick,
  Leaf,
  Soup,
  Utensils,
} from "lucide-react";

export const categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day deliciously",
    icon: Coffee,
    color: "text-amber-400",
    background: "bg-amber-400/10",
  },
  {
    id: "main-course",
    name: "Main Course",
    description: "Hearty meals for everyone",
    icon: Utensils,
    color: "text-orange-400",
    background: "bg-orange-400/10",
  },
  {
    id: "soups",
    name: "Soups",
    description: "Warm and comforting bowls",
    icon: Soup,
    color: "text-yellow-400",
    background: "bg-yellow-400/10",
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    description: "Fresh and flavorful dishes",
    icon: Leaf,
    color: "text-emerald-400",
    background: "bg-emerald-400/10",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Something sweet to finish",
    icon: CakeSlice,
    color: "text-pink-400",
    background: "bg-pink-400/10",
  },
  {
    id: "chicken",
    name: "Chicken",
    description: "Delicious chicken recipes",
    icon: Drumstick,
    color: "text-red-400",
    background: "bg-red-400/10",
  },
];