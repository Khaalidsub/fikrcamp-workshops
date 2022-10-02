// class without properties
class Product {}
// class with private properties
class ProductWithPrivateProperties {
  private id: string;
  private name: string;
  constructor(name: string, id: string) {
    this.id = id;
    this.name = name;
  }
}
// class with inheritence (extends)
class ExtendedProduct extends Product {}
