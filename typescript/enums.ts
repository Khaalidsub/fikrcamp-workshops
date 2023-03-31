import { VegetableProduct } from "./classes";

// show enum roles or types using if statemements or switch
enum ActionType {
  UPDATE = "",
  ADD = "",
  DELETE = "",
}

function upsertProduct(product: VegetableProduct, type: ActionType) {
  if (type === ActionType.UPDATE) {
  }
}
