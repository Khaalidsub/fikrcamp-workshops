import express, { json } from "express";
import productRouter from "./routes/products.routes";

import { categoryRouter } from "./routes/categories.routes";

function main() {
  const app = express();
  app.use(json());

  app.use("/products", productRouter);
  app.use("/categories", categoryRouter);

  app.listen(8080, () => {
    console.log("server running on port 8080");
  });
}

main();
