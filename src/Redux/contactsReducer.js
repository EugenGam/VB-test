import axios from "axios";
import { startLoading, finishLoading } from "./loadingReducer";

export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return [...action.payload];
    default:
      return state;
  }
};

export const setContacts = (payload) => {
  return { type: "SET_CONTACTS", payload };
};

export const getContacts = () => (dispatch) => {
  dispatch(startLoading());
  axios
    .get("https://venbest-test.herokuapp.com/")
    .then((res) => {
      dispatch(setContacts(res.data));
    })
    .catch((e) => console.log("Error:", e))
    .finally(() => dispatch(finishLoading()));
};
