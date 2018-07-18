export default class User {
  constructor(idx, name, refUserIdx) {
    this.idx = idx;
    this.name = name;
    this.links = [];
    this.balance = 0;
    this.refUserIdx = refUserIdx;
  }
}
