import { randomUUID } from "crypto";
import { Product } from "../models/product.model";

export const Products: Product[] = [
  { name: "Egyptian Flour", category: "Bakery", id: randomUUID() },
  { name: "Doop", category: "Health & Beauty", id: randomUUID() },
  { name: "Rani", category: "Beverage", id: randomUUID() },
  { name: "Chicken", category: "Frozen Food", id: randomUUID() },
  { name: "Fried Beef", category: "Frozen Food", id: randomUUID() },
];

export const Categories = [
  {
    name: "Bakery",
  },

  {
    name: "Beverage",
  },
  {
    name: "Frozen Food",
  },

  {
    name: "Health & Beauty",
  },
];
