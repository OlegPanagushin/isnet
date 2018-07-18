import * as consts from "../constants";

const productsReducer = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case consts.GOT_PRODUCTS:
      state = [...action.products];
      return state;

    default:
      return state;
  }
};

export default productsReducer;
