import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { filtersReducer } from "./filtersReducer";
import { contactsReducer } from "./contactsReducer";
import { loadingReducer } from "./loadingReducer";

let reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  isLoading: loadingReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
