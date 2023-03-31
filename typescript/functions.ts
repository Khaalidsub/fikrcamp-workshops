// normal function
function getProducts() {
  return ["onions", "eggplants"];
}
// function with a explicit void return
function getVegetables(): void {}
// function with a primitive type argument
function getProduct(name: string): string {
  return ["onions", "eggplants"].find((product) => product === name) ?? "";
}
// function with an object argument and an object return
function createProduct(product: { id: string; name: string }) {
  return product;
}
// function with an object argument and a explicit object return
function updateProduct(product: { id: string; name: string }): {
  id: string;
  name: string;
} {
  return product;
}
