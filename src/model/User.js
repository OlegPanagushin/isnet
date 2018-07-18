export default class User {
  constructor(id, name, refUserId, linkId) {
    this.id = id;
    this.name = name;
    this.links = [linkId];
    this.orders = 0;
    this.balance = 0;
    this.refUserId = refUserId;
    this.childrenIds = [];
  }
}
