export default class Product {
  constructor(idx, name, price = 0, margin = 0) {
    this.idx = idx;
    this.name = name;
    this.price = price;
    this.margin = margin;
  }

  get net() {
    return this.price * this.margin;
  }
}
