import * as consts from "../constants";

const usersReducer = (state = [], action) => {
  const { type } = action;

  switch (type) {
    case consts.GOT_USERS:
      state = [...action.users];
      return state;

    default:
      return state;
  }
};

export default usersReducer;
