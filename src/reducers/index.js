import { FETCH_AUXILIARY_SECTIONS, FETCH_LANGUAGES } from "../constants";

export const auxiliarySectionsReducers = (auxiliarySections = [], action) => {
  switch (action.type) {
    case FETCH_AUXILIARY_SECTIONS:
      return action.payload;
    default:
      return auxiliarySections;
  }
};

export const languagesReducers = (languages = [], action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return action.payload;
    default:
      return languages;
  }
};
