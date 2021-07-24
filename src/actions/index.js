import {
  FETCH_LANGUAGES,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
  FETCH_CONTENTS,
  FETCH_CONTENTS_SUCCESS,
  FETCH_CONTENTS_FAIL,
  FETCH_ADVERTISEMENTS,
  FETCH_ADVERTISEMENTS_SUCCESS,
  FETCH_ADVERTISEMENTS_FAIL,
  FETCH_CERTIFICATE_CONTENTS,
  FETCH_CERTIFICATE_CONTENTS_SUCCESS,
  FETCH_CERTIFICATE_CONTENTS_FAIL,
  FETCH_CERTIFICATE,
  FETCH_CERTIFICATE_SUCCESS,
  FETCH_CERTIFICATE_FAIL,
} from "../constants";
import api from "../api";

export const fetchLanguages = () => async (dispatch) => {
  dispatch({ type: FETCH_LANGUAGES });

  try {
    const response = await api.get("Language");

    dispatch({
      type: FETCH_LANGUAGES_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_LANGUAGES_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchContents =
  (languageCode = "AZ") =>
  async (dispatch) => {
    dispatch({ type: FETCH_CONTENTS });

    try {
      const response = await api.get(
        `Content/getContentWebSite/${languageCode}`
      );
      dispatch({
        type: FETCH_CONTENTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FETCH_CONTENTS_FAIL,
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

export const fetchCertificateContents = () => async (dispatch) => {
  dispatch({ type: FETCH_CERTIFICATE_CONTENTS });

  try {
    const response = await api.get("CertificateContent");

    dispatch({
      type: FETCH_CERTIFICATE_CONTENTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_CERTIFICATE_CONTENTS_FAIL,
      payload: e.message ? e.message : e,
    });
  }
};

export const fetchCertificate =
  (languageCode = localStorage.getItem("language")) =>
  async (dispatch) => {
    dispatch({ type: FETCH_CERTIFICATE });

    try {
      const response = await api.get(
        `Content/getContnentCertificate/${languageCode}`
      );
      dispatch({ type: FETCH_CERTIFICATE_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: FETCH_CERTIFICATE_FAIL,
        payload: e.message ? e.message : e,
      });
    }
  };
