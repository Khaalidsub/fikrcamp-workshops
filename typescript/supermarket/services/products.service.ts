import { Products } from "../data";
import {
  CreateProductDataHandler,
  UpdateProductDataHandler,
} from "../data-handler";
import { Product } from "../models/product.model";

export class ProductsService {
  get() {
    return Products;
  }
  create(createProduct: CreateProductDataHandler) {
    const newProduct = new Product(createProduct.name, createProduct.category);
    Products.push(newProduct);
    return newProduct;
  }

  update(updateProduct: UpdateProductDataHandler) {
    const product = Products.find((product) => product.id === updateProduct.id);
    if (product) {
      product.name = updateProduct.name;
      product.category = updateProduct.category;
      return product;
    }

    throw new Error(`Product ${updateProduct.id} not found`);
  }

  delete(id: string) {
    const productIndex = Products.findIndex((product) => product.id === id);
    if (productIndex) {
      Products.splice(productIndex, 1);
      return "Product ${id} removed";
    }
    throw new Error(`Product ${id} not found`);
  }
}
