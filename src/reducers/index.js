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
  FETCH_CERTIFICATE_CONTENTS_FAIL,
  FETCH_CERTIFICATE_CONTENTS_SUCCESS,
  FETCH_CERTIFICATE,
  FETCH_CERTIFICATE_SUCCESS,
  FETCH_CERTIFICATE_FAIL,
} from "../constants";

export const languagesReducers = (
  state = { loading: false, languages: [] },
  action
) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload,
        loading: false,
      };
    case FETCH_LANGUAGES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const contentsReducers = (
  state = { loading: true, contents: {} },
  action
) => {
  switch (action.type) {
    case FETCH_CONTENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: action.payload,
        loading: false,
      };
    case FETCH_CONTENTS_FAIL:
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
    case FETCH_ADVERTISEMENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADVERTISEMENTS_SUCCESS:
      return {
        ...state,
        advertisements: action.payload,
        loading: false,
      };
    case FETCH_ADVERTISEMENTS_FAIL:
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
    case FETCH_CERTIFICATE_CONTENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CERTIFICATE_CONTENTS_SUCCESS:
      return {
        ...state,
        certificateContents: action.payload,
        loading: false,
      };
    case FETCH_CERTIFICATE_CONTENTS_FAIL:
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
    case FETCH_CERTIFICATE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CERTIFICATE_SUCCESS:
      return {
        ...state,
        certificate: action.payload,
        loading: false,
      };
    case FETCH_CERTIFICATE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
