export default class Link {
  constructor(id, userId, parentLinkId) {
    this.id = id;
    this.userId = userId;
    this.parentLinkId = parentLinkId;
    this.childrenIds = [];
  }
}
