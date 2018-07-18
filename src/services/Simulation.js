import Products from "./Products";
import Links, { createLink } from "./Links";
import Users, { createUser } from "./Users";

function rnd(max) {
  return Math.round(Math.random() * max);
}

export function incomeEvent(
  productIdx = rnd(Products.length - 1),
  linkIdx = rnd(Links.length - 1)
) {
  const product = Products[productIdx];
  const link = Links[linkIdx];
  const chain = [link];

  let linkParent = link.parent;
  while (linkParent !== undefined) {
    chain.push(linkParent);
    linkParent = linkParent.parent;
  }

  const spread = product.net / chain.length;
  for (let i = 0; i < chain.length; i++) {
    chain[i].user.balance += spread;
  }
}

export function registrationEvent(parentLinkIdx = rnd(Links.length - 1)) {
  const parentLink = Links[parentLinkIdx];
  const parent = parentLink.user;
  const newUser = createUser(`User ${Users.length}`, parent);
  createLink(newUser, parentLink);
}
