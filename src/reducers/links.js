import * as consts from "../constants";

const linksReducer = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case consts.GOT_LINKS:
      state = [...action.links];
      return state;

    default:
      return state;
  }
};

export default linksReducer;
