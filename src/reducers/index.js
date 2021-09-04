import * as CONSTANT from "../constants";

export const languagesReducers = (
  state = {
    loading: false,
    languages: [],
    activeLanguage: localStorage.getItem("language"),
  },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_LANGUAGES:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload.languages,
        activeLanguage: action.payload.activeLanguage,
        loading: false,
      };
    case CONSTANT.FETCH_LANGUAGES_FAIL:
      return {
        ...state,
        error: action.payload.languages,
        loading: false,
      };
    default:
      return state;
  }
};

export const calculatorContentReducer = (
  state = { loading: true, calculatorContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CALCULATOR_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CALCULATOR_CONTENT_SUCCESS:
      return {
        ...state,
        calculatorContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CALCULATOR_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const countryContentReducers = (
  state = { loading: true, countries: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_COUNTRIES_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_COUNTRIES_CONTENT_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_COUNTRIES_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const cityContentReducers = (
  state = { loading: true, cities: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CITIES_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CITIES_CONTENT_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CITIES_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const productTypesContentReducers = (
  state = { loading: true, productTypes: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_PRODUCT_TYPES_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_PRODUCT_TYPES_CONTENT_SUCCESS:
      return {
        ...state,
        productTypes: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_PRODUCT_TYPES_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const advertisementsReducers = (
  state = { loading: false, advertisements: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_ADVERTISEMENTS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        advertisements: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_ADVERTISEMENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const shopsReducers = (
  state = { loading: false, shops: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_SHOPS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_SHOPS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const shopsCountReducers = (
  state = { loading: false, shopsCount: 1 },
  action
) => {
  switch (action.type) {
    case CONSTANT.GET_SHOPS_COUNT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.GET_SHOPS_COUNT_SUCCESS:
      return {
        ...state,
        shopsCount: action.payload,
        loading: false,
      };
    case CONSTANT.GET_SHOPS_COUNT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const shopContentReducers = (
  state = { loading: false, shopContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_SHOP_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_SHOP_CONTENT_SUCCESS:
      return {
        ...state,
        shopContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_SHOP_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const countriesContentReducers = (
  state = { loading: false, countryContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_COUNTRY_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_COUNTRY_CONTENT_SUCCESS:
      return {
        ...state,
        countryContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_COUNTRY_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const exchangeRateReducers = (
  state = { loading: false, exchangeRate: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.GET_EXCAHGE_RATE:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.GET_EXCAHGE_RATE_SUCCESS:
      return {
        ...state,
        exchangeRate: action.payload,
        loading: false,
      };
    case CONSTANT.GET_EXCAHGE_RATE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const calculatorInformationContentReducers = (
  state = { loading: false, calculatorInformationContent: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT_SUCCESS:
      return {
        ...state,
        calculatorInformationContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const currencyReducers = (
  state = { loading: false, currencies: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CURRENCY:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CURRENCY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const calculatorContentReducers = (
  state = { loading: false, calculatorPageContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT_SUCCESS:
      return {
        ...state,
        calculatorPageContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const gendersReducers = (
  state = { loading: false, genders: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_GENDERS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_GENDERS_SUCCESS:
      return {
        ...state,
        genders: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_GENDERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const setUserReducers = (
  state = { loading: false, user: "" },
  action
) => {
  switch (action.type) {
    case CONSTANT.SET_USER:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CONSTANT.SET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const setPriceReducer = (state = { priceValue: 0 }, action) => {
  switch (action.type) {
    case CONSTANT.SET_PRICE:
      return {
        ...state,
        priceValue: action.payload,
      };
    default:
      return state;
  }
};

export const counterReducer = (state = { counter: 1 }, action) => {
  switch (action.type) {
    case CONSTANT.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case CONSTANT.DECREASE_COUNTER:
      if (state.counter <= 1) {
        return state;
      }
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};
