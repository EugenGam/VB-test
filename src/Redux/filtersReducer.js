export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FILTERS":
      return { ...action.payload };
    default:
      return state;
  }
};

export const setFilters = (payload) => {
  return { type: "SET_FILTERS", payload };
};
