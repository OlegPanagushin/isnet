import { combineReducers } from "redux";
import products from "./products";
import users from "./users";
import links from "./links";

const defaultState = {};

const root = (
  state = {
    ...defaultState
  },
  action
) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  root,
  products,
  users,
  links
});
