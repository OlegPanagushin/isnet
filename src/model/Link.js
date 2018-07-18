export default class Link {
  constructor(idx, userIdx, parentLinkIdx) {
    this.idx = idx;
    this.userIdx = userIdx;
    this.parentLinkIdx = parentLinkIdx;
    this.childrenIdx = [];
  }
}
