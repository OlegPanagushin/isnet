import Link from "../model/Link";

const links = [new Link(0, 0)];

export default links;

export function createLink(user, parentLink) {
  const link = new Link(
    links.length,
    user,
    parentLink ? parentLink.idx : undefined
  );
  links.push(link);
  return link;
}

export function reset() {
  links.length = 1;
}
