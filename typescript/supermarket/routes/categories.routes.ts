import { Router } from "express";
import { CategoriesService } from "../services/categories.service";

const categoryRouter = Router();

const categoriesService = new CategoriesService();

categoryRouter.get("/", (request, response) => {
  return response.json(categoriesService.get());
});

categoryRouter.post("/", (request, response) => {
  const { name } = request.body;

  const createdCategory = categoriesService.create({ name });

  return response.json(createdCategory);
});

export { categoryRouter };
