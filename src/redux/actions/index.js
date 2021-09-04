import * as CONSTANT from "../constants";
import { mainAPI, excahgeRateAPI } from "../../api";

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

export const fetchGenders =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: CONSTANT.FETCH_GENDERS });

    try {
      const response = await mainAPI.get(
        `RegisterContent/getGenders/${languageCode}`
      );

      dispatch({
        type: CONSTANT.FETCH_GENDERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CONSTANT.FETCH_GENDERS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const setUser = (user) => async (dispatch) => {
  dispatch({ type: CONSTANT.SET_USER });

  try {
    dispatch({
      type: CONSTANT.SET_USER_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: CONSTANT.SET_USER_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const setPrice =
  (priceValue = 0) =>
  (dispatch) => {
    dispatch({ type: CONSTANT.SET_PRICE, payload: priceValue });
  };

export const increaseCounter = () => (dispatch) => {
  dispatch({ type: CONSTANT.INCREASE_COUNTER, payload: 1 });
};

export const decreaseCounter = () => (dispatch) => {
  dispatch({ type: CONSTANT.DECREASE_COUNTER, payload: 1 });
};
