// show a generic class t and how it is used
interface IGenericProduct<T> {
  url: string;
  getProducts(): Promise<T>[];
  getProduct(id: string): Promise<T>;
  deleteProduct(id: string): void;
  updateProduct(id: string, product: T): void;
  createProduct(id: string, product: T): void;
}
class GenericProductService<T = { id: string }> implements IGenericProduct<T> {
  url: string;
  constructor(url: string) {
    this.url;
  }
  async getProducts(): T[] {
    const response = await fetch(this.url);
    return response.json();
  }
  getProduct(id: string): T {
    throw new Error("Method not implemented.");
  }
  deleteProduct(id: string): void {
    throw new Error("Method not implemented.");
  }
  updateProduct(id: string, product: T): void {
    throw new Error("Method not implemented.");
  }
  createProduct(id: string, product: T): void {
    throw new Error("Method not implemented.");
  }
}
// show a generic function t and how it is used
