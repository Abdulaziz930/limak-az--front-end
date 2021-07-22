import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  languagesReducers,
  contentsReducers,
  advertisementsReducers,
  certificateContentsReducer,
  certificateReducer,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  languages: languagesReducers,
  contents: contentsReducers,
  advertisements: advertisementsReducers,
  certificateContents: certificateContentsReducer,
  certificate: certificateReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
