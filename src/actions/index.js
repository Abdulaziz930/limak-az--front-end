import {
  FETCH_AUXILIARY_SECTIONS,
  FETCH_AUXILIARY_SECTIONS_SUCCESS,
  FETCH_AUXILIARY_SECTIONS_FAIL,
  FETCH_LANGUAGES,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
  FETCH_AUTHENTICATIONS,
  FETCH_AUTHENTICATIONS_SUCCESS,
  FETCH_AUTHENTICATIONS_FAIL,
  FETCH_SECTIONS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAIL,
  FETCH_ORDER,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAIL,
  FETCH_ADVERTISEMENTS,
  FETCH_ADVERTISEMENTS_SUCCESS,
  FETCH_ADVERTISEMENTS_FAIL,
} from "../constants";
import api from "../api";

export const fetchAuxiliarySections =
  (languageCode = "AZ") =>
  async (dispatch) => {
    dispatch({ type: FETCH_AUXILIARY_SECTIONS });
    try {
      const response = await api.get(
        `AuxiliarySections/languageCode/${languageCode}`
      );

      dispatch({
        type: FETCH_AUXILIARY_SECTIONS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_AUXILIARY_SECTIONS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchLanguages = () => async (dispatch) => {
  dispatch({ type: FETCH_LANGUAGES });

  try {
    const response = await api.get("Language");

    dispatch({ type: FETCH_LANGUAGES_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({
      type: FETCH_LANGUAGES_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchAuthentications =
  (languageCode = "AZ") =>
  async (dispatch) => {
    dispatch({ type: FETCH_AUTHENTICATIONS });

    try {
      const response = await api.get(
        `Authentication/languageCode/${languageCode}`
      );

      dispatch({
        type: FETCH_AUTHENTICATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_AUTHENTICATIONS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchSections =
  (languageCode = "AZ") =>
  async (dispatch) => {
    dispatch({ type: FETCH_SECTIONS });

    try {
      const response = await api.get(`Section/languageCode/${languageCode}`);

      dispatch({ type: FETCH_SECTIONS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: FETCH_SECTIONS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchOrder =
  (languageCode = "AZ") =>
  async (dispatch) => {
    dispatch({ type: FETCH_ORDER });

    try {
      const response = await api.get(`Order/languageCode/${languageCode}`);

      dispatch({ type: FETCH_ORDER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: FETCH_ORDER_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };

export const fetchAdvertisements =
  (count = 10) =>
  async (dispatch) => {
    dispatch({ type: FETCH_ADVERTISEMENTS });

    try {
      const response = await api.get(`Advertisements/count/${count}`);

      dispatch({ type: FETCH_ADVERTISEMENTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: FETCH_ADVERTISEMENTS_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };
