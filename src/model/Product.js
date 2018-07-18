export default class Product {
  constructor(id, name, price = 0, margin = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.margin = margin;
  }

  get net() {
    return this.price * this.margin;
  }
}
