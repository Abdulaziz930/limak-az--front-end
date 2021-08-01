import * as CONSTANT from "../constants";
import api from "../api";

export const fetchLanguages = () => async (dispatch) => {
  dispatch({ type: CONSTANT.FETCH_LANGUAGES });

  try {
    const response = await api.get("Language");

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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
    const response = await api.get("CertificateContent");

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
      const response = await api.get(
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
      const response = await api.get(
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
    const response = await api.get("Shop");

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
    const response = await api.get("SocialMedia");

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
      const response = await api.get(
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
      const response = await api.get(
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
      const response = await api.get(
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
