import {
  FETCH_AUXILIARY_SECTIONS,
  FETCH_LANGUAGES,
  FETCH_AUTHENTICATIONS,
  FETCH_SECTIONS,
  FETCH_ORDER,
} from "../constants/navabarConstants";
import api from "../api";

export const fetchAuxiliarySections =
  (languageCode = "AZ") =>
  async (dispatch) => {
    const response = await api.get(
      `AuxiliarySections/languageCode/${languageCode}`
    );

    return dispatch({ type: FETCH_AUXILIARY_SECTIONS, payload: response.data });
  };

export const fetchLanguages = () => async (dispatch) => {
  const response = await api.get("Language");

  return dispatch({ type: FETCH_LANGUAGES, payload: response.data });
};

export const fetchAuthentications =
  (languageCode = "AZ") =>
  async (dispatch) => {
    const response = await api.get(
      `Authentication/languageCode/${languageCode}`
    );

    return dispatch({ type: FETCH_AUTHENTICATIONS, payload: response.data });
  };

export const fetchSections =
  (languageCode = "AZ") =>
  async (dispatch) => {
    const response = await api.get(`Section/languageCode/${languageCode}`);

    return dispatch({ type: FETCH_SECTIONS, payload: response.data });
  };

export const fetchOrder =
  (languageCode = "AZ") =>
  async (dispatch) => {
    const response = await api.get(`Order/languageCode/${languageCode}`);

    return dispatch({ type: FETCH_ORDER, payload: response.data });
  };
