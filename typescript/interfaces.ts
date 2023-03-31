// show an interface with a class implementations
interface IProduct {
  id: string;
  name: string;
}

const data: IProduct = {
  id: "",
  name: "",
};

class Product implements IProduct {
  id: string;
  name: string;
}

type ProductType = {
  id: string;
  name: string;
};
