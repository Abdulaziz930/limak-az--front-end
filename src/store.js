import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  auxiliarySectionsReducers,
  languagesReducers,
  authenticationsReducers,
  sectionsReducers,
  orderReducers,
  advertisementsReducers,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auxiliarySections: auxiliarySectionsReducers,
  languages: languagesReducers,
  authentications: authenticationsReducers,
  sections: sectionsReducers,
  order: orderReducers,
  advertisements: advertisementsReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
