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

export const socialMediasReducers = (
  state = { loading: false, socialMedias: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_SOCIAL_MEDIAS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_SOCIAL_MEDIAS_SUCCESS:
      return {
        ...state,
        socialMedias: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_SOCIAL_MEDIAS_FAIL:
      return {
        ...state,
        socialMedias: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const contactReducers = (
  state = { loading: false, contact: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CONTACT_FAIL:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const contactsReducers = (
  state = { loading: true, contacts: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CONTACTS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CONTACTS_FAIL:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const contactContentReducers = (
  state = { loading: true, contactContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_CONTACT_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_CONTACT_CONTENT_SUCCESS:
      return {
        ...state,
        contactContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_CONTACT_CONTENT_FAIL:
      return {
        ...state,
        contactContent: action.payload,
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
        shops: action.payload,
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
        shopsCount: action.payload,
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
        shopContent: action.payload,
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
        countryContent: action.payload,
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
        exchangeRate: action.payload,
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
        calculatorInformationContent: action.payload,
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
        currencies: action.payload,
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
        calculatorPageContent: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const rulesReducers = (
  state = { loading: false, rules: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_RULES:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_RULES_SUCCESS:
      return {
        ...state,
        rules: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_RULES_FAIL:
      return {
        ...state,
        rules: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const ruleContentReducers = (
  state = { loading: false, ruleContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_RULES_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_RULES_CONTENT_SUCCESS:
      return {
        ...state,
        ruleContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_RULES_CONTENT_FAIL:
      return {
        ...state,
        ruleContent: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const questionsReducers = (
  state = { loading: false, questions: [] },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_QUESTIONS:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const questionContentReducers = (
  state = { loading: false, questionContent: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_QUESTIONS_CONTENT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_QUESTIONS_CONTENT_SUCCESS:
      return {
        ...state,
        questionContent: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_QUESTIONS_CONTENT_FAIL:
      return {
        ...state,
        questionContent: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const aboutReducers = (
  state = { loading: false, about: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_ABOUT:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        about: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_ABOUT_FAIL:
      return {
        ...state,
        about: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const privacyReducers = (
  state = { loading: false, privacy: {} },
  action
) => {
  switch (action.type) {
    case CONSTANT.FETCH_PRIVACY:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.FETCH_PRIVACY_SUCCESS:
      return {
        ...state,
        privacy: action.payload,
        loading: false,
      };
    case CONSTANT.FETCH_PRIVACY_FAIL:
      return {
        ...state,
        privacy: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
