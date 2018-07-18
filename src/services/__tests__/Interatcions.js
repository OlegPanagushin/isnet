import Products from "../Products";
import Users, { reset as resetUsers, createUser } from "../Users";
import Links, { reset as resetLinks, createLink } from "../Links";
import { incomeEvent, registrationEvent } from "../Simulation";

function createUsers(count) {
  const admin = Users[0];
  for (let i = 0; i < count; i++) createUser(`User${i + 1}`, admin);
}

function createChain(length) {
  for (let i = 0; i < length; i++) createLink(Users[i + 1], Links[i]);
}

function getUsersTotalBalance(chainLength = Users.length) {
  let total = 0;
  for (let i = 0; i < chainLength; i++) total += Users[i].balance;
  return total;
}

afterEach(() => {
  resetUsers();
  resetLinks();
});

it("Simulation:incomeEvent 1 user", () => {
  incomeEvent(0, 0);
  expect(getUsersTotalBalance()).toBe(Products[0].net);
});

it("Simulation:incomeEvent 2 users", () => {
  createUsers(1);
  createChain(1);
  incomeEvent(0, 1);
  expect(getUsersTotalBalance()).toBe(Products[0].net);
});

it("Simulation:incomeEvent 3 users", () => {
  createUsers(2);
  createChain(2);
  incomeEvent(0, 2);
  expect(getUsersTotalBalance()).toBe(Products[0].net);
});

it("Simulation:incomeEvent 3 users, second link", () => {
  createUsers(2);
  createChain(2);
  incomeEvent(0, 1);
  expect(getUsersTotalBalance(2)).toBe(Products[0].net);
});

//=======================================================================

it("Simulation:registrationEvent 1 user", () => {
  registrationEvent();
  const lastLink = Links[Links.length - 1];
  const lastUser = Users[Users.length - 1];
  expect(Users.length).toBe(2);
  expect(Links.length).toBe(2);
  expect(lastLink.user).toBe(lastUser);
  expect(lastLink.parent).toBe(Links[0]);
});

it("Simulation:registrationEvent 2 user", () => {
  registrationEvent(0);
  registrationEvent(1);
  const lastLink = Links[Links.length - 1];
  const lastUser = Users[Users.length - 1];
  expect(Users.length).toBe(3);
  expect(Links.length).toBe(3);
  expect(lastLink.user).toBe(lastUser);
  expect(lastLink.parent).toBe(Links[1]);
});
