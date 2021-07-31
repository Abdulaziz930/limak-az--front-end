import * as CONSTANT from "../constants";

export const languagesReducers = (
  state = { loading: false, languages: [] },
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
        languages: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_LANGUAGES_FAIL:
      return {
        ...state,
        error: action.payload,
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

export const weightContentReducers = (
  state = { loading: true, weights: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_WEIGHT_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_WEIGHT_CONTENT_SUCCESS:
      return {
        ...state,
        weights: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_WEIGHT_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const unitsOfLengthContentReducers = (
  state = { loading: true, unitsOfLength: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT_SUCCESS:
      return {
        ...state,
        unitsOfLength: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT_FAIL:
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

export const howItWorksContentReducers = (
  state = { loading: false, content: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_HOW_IT_WORKS_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_HOW_IT_WORKS_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_HOW_IT_WORKS_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const howItWorksCardContentReducers = (
  state = { loading: false, contents: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT_SUCCESS:
      return {
        ...state,
        contents: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const certificateContentsReducer = (
  state = { loading: false, certificateContents: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CERTIFICATE_CONTENTS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CERTIFICATE_CONTENTS_SUCCESS:
      return {
        ...state,
        certificateContents: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CERTIFICATE_CONTENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const certificateReducer = (
  state = { loading: false, certificate: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CERTIFICATE:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CERTIFICATE_SUCCESS:
      return {
        ...state,
        certificate: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CERTIFICATE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const advertisimentTitleContentReducers = (
  state = { loading: false, content: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_ADVERTISEMENT_TITLE:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_ADVERTISEMENT_TITLE_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_ADVERTISEMENT_TITLE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const recommendedShopsReducers = (
  state = { loading: false, recommendedShops: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_RECOMMENDED_SHOPS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_RECOMMENDED_SHOPS_SUCCESS:
      return {
        ...state,
        recommendedShops: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_RECOMMENDED_SHOPS_FAIL:
      return {
        ...state,
        recommendedShops: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
