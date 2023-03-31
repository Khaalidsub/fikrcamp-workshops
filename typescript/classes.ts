// class without properties
class Product {
  constructor(public id: string, public name: string) {}
}
const onion = new Product("", "");
// class with private properties
class SecretProduct {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
// class with inheritence (extends)
export class VegetableProduct extends Product {
  constructor(public id: string, public name: string, public expiryDate: Date) {
    super(id, name);
  }
}
