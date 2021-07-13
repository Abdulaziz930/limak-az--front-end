import { FETCH_AUXILIARY_SECTIONS, FETCH_LANGUAGES } from "../constants";
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
