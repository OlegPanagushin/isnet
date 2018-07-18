import random from "lodash.random";
import User from "../model/User";
import Link from "../model/Link";
import Product from "../model/Product";

const users = [new User(0, "System", undefined, 0)];
const usersLevels = [[0]];
const links = [new Link(0, 0)];
const products = [
  new Product(0, "cheap", 10, 0.3),
  new Product(1, "normal", 50, 0.15),
  new Product(2, "expensive", 100, 0.05)
];

export function fetchData() {
  return {
    users,
    links,
    products
  };
}

export function createLink(user, parentLink) {
  const link = new Link(
    links.length,
    user.id,
    parentLink ? parentLink.id : undefined
  );
  links.push(link);
  return link;
}

export function createUser(name, refUser, linkId) {
  const user = new User(users.length, name, (refUser || users[0]).id);
  users.push(user);
  return user;
}

export function spreadComission(earnerIds = [], amount) {
  if (!earnerIds.length) users[0].balance += amount;
  else {
    const spread = amount / earnerIds.length;
    for (let i = 0; i < earnerIds.length; i++)
      users[earnerIds[i]].balance += spread;
  }
}

export function register(minChildren, maxChildren, maxDepth) {
  for (let i = 1; i < maxDepth + 1; i++) {
    const parentUsersIds = usersLevels[i - 1];
    for (let j = 0; j < parentUsersIds.length; j++) {
      const parentUser = parentUsersIds[j];
      const friendsCount = random(minChildren, maxChildren);
      for (let k = 0; k < friendsCount; k++) {
        const newUser = createUser(`User ${users.length}`, parentUser.id);
        const newLink = createLink(newUser, parentLink);

        parentLink.childrenIds.push(newLink.id);
        parentUser.childrenIds.push(newUser.id);
      }
    }
  }
  console.log(users.length);
}

export function income() {
  if (links.length > 1) {
    const productId = random(products.length - 1);
    const linkId = random(1, links.length - 1);

    const product = products[productId];
    const link = links[linkId];
    const user = users[link.userId];
    user.orders++;

    const chain = [];
    let parentLinkId = link.parentLinkId;
    while (parentLinkId !== undefined) {
      const parentLink = links[parentLinkId];
      chain.push(parentLink.userId);
      parentLinkId = parentLink.parentLinkId;
    }
    spreadComission(chain, product.net);
  }
}
