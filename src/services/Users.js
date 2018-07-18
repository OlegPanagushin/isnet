import User from "../model/User";

const users = [new User(0, "System")];
export default users;

export function createUser(name, refUser) {
  const user = new User(users.length, name, (refUser || users[0]).idx);
  users.push(user);
  return user;
}

export function reset() {
  users.length = 1;
  users[0].balance = 0;
}
