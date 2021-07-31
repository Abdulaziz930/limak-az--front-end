import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  languagesReducers,
  calculatorContentReducer,
  countryContentReducers,
  cityContentReducers,
  weightContentReducers,
  unitsOfLengthContentReducers,
  productTypesContentReducers,
  advertisementsReducers,
  certificateContentsReducer,
  certificateReducer,
  howItWorksContentReducers,
  howItWorksCardContentReducers,
  advertisimentTitleContentReducers,
  recommendedShopsReducers,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  languages: languagesReducers,
  calculatorContent: calculatorContentReducer,
  countries: countryContentReducers,
  cities: cityContentReducers,
  weights: weightContentReducers,
  unitsOfLength: unitsOfLengthContentReducers,
  productTypes: productTypesContentReducers,
  advertisements: advertisementsReducers,
  certificateContents: certificateContentsReducer,
  certificate: certificateReducer,
  howItWorkContent: howItWorksContentReducers,
  howItWorkCardContent: howItWorksCardContentReducers,
  advertisimentTitleContent: advertisimentTitleContentReducers,
  recommendedShops: recommendedShopsReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
