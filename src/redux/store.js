import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  languagesReducers,
  calculatorContentReducer,
  countryContentReducers,
  cityContentReducers,
  productTypesContentReducers,
  advertisementsReducers,
  shopsReducers,
  shopsCountReducers,
  shopContentReducers,
  countriesContentReducers,
  exchangeRateReducers,
  calculatorInformationContentReducers,
  currencyReducers,
  calculatorContentReducers,
  gendersReducers,
  setUserReducers,
  counterReducer,
  setPriceReducer,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  languages: languagesReducers,
  calculatorContent: calculatorContentReducer,
  countries: countryContentReducers,
  cities: cityContentReducers,
  productTypes: productTypesContentReducers,
  advertisements: advertisementsReducers,
  shops: shopsReducers,
  shopsCount: shopsCountReducers,
  shopContent: shopContentReducers,
  countryContent: countriesContentReducers,
  exchangeRate: exchangeRateReducers,
  calculatorInformationContent: calculatorInformationContentReducers,
  currencies: currencyReducers,
  calculatorPageContent: calculatorContentReducers,
  genders: gendersReducers,
  user: setUserReducers,
  counter: counterReducer,
  priceValue: setPriceReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
