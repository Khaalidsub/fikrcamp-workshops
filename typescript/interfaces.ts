// show an interface with a class implementations
//interface is used for classes, acts like a blueprint for a class to flow
interface IProduct {
  id: string;
  name: string;

  getProduct();
}

class Product implements IProduct {
  getProduct() {
    throw new Error("Method not implemented.");
  }
  id: string;
  name: string;
}
