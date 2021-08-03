import * as CONSTANT from "../constants";
import { mainAPI, excahgeRateAPI } from "../api";

export const fetchLanguages = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_LANGUAGES });

  try {
    const response = await mainAPI.get("Language");

    dispatch({
      type: CONSTANT.FETCH_LANGUAGES_SUCCESS,
      payload: {
        languages: response.data,
        activeLanguage: localStorage.getItem("language"),
      },
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.FETCH_LANGUAGES_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchCalculatorContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CALCULATOR_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getCalculatorContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCountriesContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_COUNTRIES_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getContriesContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_COUNTRIES_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_COUNTRIES_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCitiesContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CITIES_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getCitiesContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_CITIES_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_COUNTRIES_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchWeightContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_WEIGHT_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getWeightContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_WEIGHT_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_WEIGHT_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchUnitsOfLengthContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getUnitsOfLengthContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_UNITS_OF_LENGTH_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchProductTypesContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_PRODUCT_TYPES_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getProductTypesContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_PRODUCT_TYPES_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_PRODUCT_TYPES_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchAdvertisements =
  (count = 10, languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_ADVERTISEMENTS });

    try {
      const response = await mainAPI.get(
        `Content/getAdvertisimentContent/${languageCode}/${count}`
      );

      dispatch({
        type: CONSTANT.FETCH_ADVERTISEMENTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_ADVERTISEMENTS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchHowItWorksContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_HOW_IT_WORKS_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getHowItWorkContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_HOW_IT_WORKS_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_HOW_IT_WORKS_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchHowItWorksCardContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT });

    try {
      const response = await mainAPI.get(
        `Content/getHowItWorkCardContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_HOW_IT_WORKS_CARD_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCertificateContents = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_CERTIFICATE_CONTENTS });

  try {
    const response = await mainAPI.get("CertificateContent");

    dispatch({
      type: CONSTANT.FETCH_CERTIFICATE_CONTENTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.FETCH_CERTIFICATE_CONTENTS_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchCertificate =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CERTIFICATE });

    try {
      const response = await mainAPI.get(
        `Content/getCertificateContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_CERTIFICATE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CERTIFICATE_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchAdvertisementTitle =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_ADVERTISEMENT_TITLE });

    try {
      const response = await mainAPI.get(
        `Content/GetAdvertisimentTitleContent/${languageCode}`
      );
      dispatch({
        type: CONSTANT.FETCH_ADVERTISEMENT_TITLE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_ADVERTISEMENT_TITLE_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchRecommendedShops = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_RECOMMENDED_SHOPS });

  try {
    const response = await mainAPI.get("Shop");

    dispatch({
      type: CONSTANT.FETCH_RECOMMENDED_SHOPS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.FETCH_RECOMMENDED_SHOPS_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchSocialMedias = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_SOCIAL_MEDIAS });

  try {
    const response = await mainAPI.get("SocialMedia");

    dispatch({
      type: CONSTANT.FETCH_SOCIAL_MEDIAS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.FETCH_SOCIAL_MEDIAS_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchContact =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CONTACT });

    try {
      const response = await mainAPI.get(
        `Content/getContactContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_CONTACT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CONTACT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchContacts =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CONTACTS });

    try {
      const response = await mainAPI.get(
        `ContactContent/getContactsContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_CONTACTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CONTACTS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchContactContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CONTACT_CONTENT });

    try {
      const response = await mainAPI.get(
        `ContactContent/getContactContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_CONTACT_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CONTACT_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchShops =
  (countryId = 1, skipCount = 0, takeCount = 12) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_SHOPS });

    try {
      const response = await mainAPI.get(
        `Shop/getAllShops/${countryId}/${skipCount}/${takeCount}`
      );

      dispatch({
        type: CONSTANT.FETCH_SHOPS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_SHOPS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const getShopsCount =
  (countryId = 1) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.GET_SHOPS_COUNT });

    try {
      const response = await mainAPI.get(`Shop/getShopsCount/${countryId}`);

      dispatch({
        type: CONSTANT.GET_SHOPS_COUNT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.GET_SHOPS_COUNT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchShopContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_SHOP_CONTENT });

    try {
      const response = await mainAPI.get(
        `ShopContent/getShopContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_SHOP_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_SHOP_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCountryContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_COUNTRY_CONTENT });

    try {
      const response = await mainAPI.get(
        `CountryContent/getCountryCountent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_COUNTRY_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_COUNTRY_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const getExchangeRate =
  (currency = "AZN") =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.GET_EXCAHGE_RATE });

    try {
      const response = await excahgeRateAPI.get("latest", {
        params: {
          base: currency,
        },
      });

      dispatch({
        type: CONSTANT.GET_EXCAHGE_RATE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.GET_EXCAHGE_RATE_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCalculatorInformationContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT });

    try {
      const response = await mainAPI.get(
        `CalculatorContent/getCalculatorInformationContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_INFORMATION_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchCurrency = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_CURRENCY });

  try {
    const response = await mainAPI.get("CalculatorContent/getCurrency");

    dispatch({
      type: CONSTANT.FETCH_CURRENCY_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.FETCH_CURRENCY_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchCalculatorPageContent =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT });

    try {
      const response = await mainAPI.get(
        `CalculatorContent/getCalculatorContent/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_CALCULATOR_PAGE_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchRules =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_RULES });

    try {
      const response = await mainAPI.get(`Rule/getRules/${languageCode}`);

      dispatch({
        type: CONSTANT.FETCH_RULES_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_RULES_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchRuleContents =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_RULES_CONTENT });

    try {
      const response = await mainAPI.get(`Rule/getRuleContent/${languageCode}`);

      dispatch({
        type: CONSTANT.FETCH_RULES_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_RULES_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchQuestions =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_QUESTIONS });

    try {
      const response = await mainAPI.get(
        `Question/getQuestions/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_QUESTIONS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_QUESTIONS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchQuestionsContents =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_QUESTIONS_CONTENT });

    try {
      const response = await mainAPI.get(`Question/getQuestionContent/${languageCode}`);

      dispatch({
        type: CONSTANT.FETCH_QUESTIONS_CONTENT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_QUESTIONS_CONTENT_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };
