// statically mentioning the object type
const pear: {
  isAvailable: boolean;
  name: string;
  count: number;
  createdAt?: Date;
  updatedAt?: Date;
} = {
  name: "pear",
  count: 120,
  isAvailable: true,
  createdAt: new Date(),
};

// inferring the type
let pickle = {
  name: "lemon pickle",
  count: 5,
  isAvailable: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log("initila pear", pear);
pear.count = pear.count - 1;
pear.updatedAt = new Date();

console.log("after pear", pear);
