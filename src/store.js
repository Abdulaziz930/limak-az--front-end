import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  languagesReducers,
  contentsReducers,
  advertisementsReducers,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  languages: languagesReducers,
  contents: contentsReducers,
  advertisements: advertisementsReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
