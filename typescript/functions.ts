// // normal function
// function getVegetables() {
//     return ["onions","eggplant","carrot"]
// }

// function printVegetables() {
// console.log("vegetables",getVegetables())
// }
// printVegetables()

// function with a explicit void return
function getVegetables(): string[] {
  return ["onions", "eggplant", "carrot"];
}

function printVegetables(): void {
  console.log("vegetables", getVegetables());
}

// function with a primitive type argument
// function getVegetable(name:string):string {
//     //option 1
//     const result =  getVegetables().find((vegetable)=>vegetable === name)
//     if (result) {
//         return result
//     }
//     throw Error("vegetable not found")
//     // optional 2
//     // return getVegetables().find((vegetable)=>vegetable === name) ?? ""
// }

// function with an object argument and an object return
function addBeverage(beverage: {
  id: string;
  name: string;
  expiryDate: Date;
}): { id: string; name: string; expiryDate: Date } {
  //add in the database
  return beverage;
}
const newBeverage = { id: "", name: "", expiryDate: new Date() };
const result = addBeverage(newBeverage);
// function with an object argument and a explicit object return

console.log(result);
