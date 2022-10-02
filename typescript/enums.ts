// show enum roles or types using if statemements or switch

// enums are ways to store global const variables, could be used for checking conditions
enum ProductType {
  BEVERAGE,
  SWEETS,
  SPICES,
}

function getProductType(productType: ProductType) {
  if (productType === ProductType.BEVERAGE) return ["beverage"];
  if (productType === ProductType.SPICES) {
    return ["spice"];
  }
}
