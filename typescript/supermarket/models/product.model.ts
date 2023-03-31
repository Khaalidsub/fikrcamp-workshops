import { randomUUID } from "crypto";

export class Product {
  constructor(
    public name: string,
    public category: string,
    public id?: string
  ) {
    this.id = randomUUID();
  }
}
