export const initialState = {
  childData: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHILD_DATA":
      return {
        ...state,
        childData: action.payload,
      };
    default:
      return state;
  }
};
