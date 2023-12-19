import { Product } from "../models/products";
export const initialProducts = [
  {
    name: "Book",
    price: 12.49,
    quantity: 1,
    category: "BOOK",
  },
  {
    name: "Music CD",
    quantity: 1,
    price: 14.99,
    category: "MUSIC",
  },
  {
    name: "Chocolate Bar",
    quantity: 1,
    price: 0.85,
    category: "FOOD",
  },
] as Product[];
