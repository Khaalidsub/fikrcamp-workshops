import express, { json } from "express";
import { Products } from "./data";
import { Product } from "./models/product.model";
function main() {
  const app = express();
  app.use(json());

  app.listen(8080, () => {
    console.log("server running on port 8080");
  });
}

main();
