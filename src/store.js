import { createStore, combineReducers, applyMiddleware } from "redux";
import { auxiliarySectionsReducers, languagesReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auxiliarySections: auxiliarySectionsReducers,
  languages: languagesReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
