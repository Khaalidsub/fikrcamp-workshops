import { Categories } from "../data";
import { CreateCategoryData } from "../data-handler";
import { Category } from "../models/category.model";

export class CategoriesService {
  get() {
    return Categories;
  }

  create(createCategoryData: CreateCategoryData) {
    const newCategory = new Category(createCategoryData.name);
    Categories.push(newCategory);
    return newCategory;
  }
}
