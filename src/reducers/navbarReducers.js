import {
  FETCH_AUXILIARY_SECTIONS,
  FETCH_LANGUAGES,
  FETCH_AUTHENTICATIONS,
  FETCH_SECTIONS,
  FETCH_ORDER,
} from "../constants/navabarConstants";

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

export const authenticationsReducers = (authentications = [], action) => {
  switch (action.type) {
    case FETCH_AUTHENTICATIONS:
      return action.payload;
    default:
      return authentications;
  }
};

export const sectionsReducers = (sections = [], action) => {
  switch (action.type) {
    case FETCH_SECTIONS:
      return action.payload;
    default:
      return sections;
  }
};

export const orderReducers = (order = [], action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return action.payload;
    default:
      return order;
  }
};
