//  option 1 do class as types

export class CreateProductDataHandler {
  constructor(public name: string, public category: string) {}
}

export class UpdateProductDataHandler {
  constructor(
    public id: string,
    public name: string,
    public category: string
  ) {}
}

export type CreateCategoryData = {
  name: string;
};

type UpdateCategoryData = {
  id: string;
  name: string;
  category: string;
};
