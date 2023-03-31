import { Router } from "express";
import { CreateProductDataHandler } from "../data-handler";
import { ProductsService } from "../services/products.service";

const productRoute = Router();

const productsService = new ProductsService();
// get
productRoute.get("/", (request, response) => {
  const products = productsService.get();
  return response.json(products);
});
//create

productRoute.post("/", (request, response) => {
  const { name, category } = request.body;

  //   const createdProduct = productsService.create({ category, name });
  const createProductDataHandler = new CreateProductDataHandler(name, category);
  const createdProduct = productsService.create(createProductDataHandler);
  return response.json(createdProduct);
});
// update

productRoute.put("/:id", (request, response) => {
  const id = request.params.id;
  const { name, category } = request.body;
  const updatedProduct = productsService.update({ id, name, category });
  return response.json(updatedProduct);
});
// delete

productRoute.delete("/:id", (request, response) => {
  const id = request.params.id;
  const result = productsService.delete(id);
  return response.json(result);
});
//get

export default productRoute;
