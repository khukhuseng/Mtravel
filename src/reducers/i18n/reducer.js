import { UPDATE_LANGUAGE } from "./actions";

const defaultState = {
  lang: "ZH-CN"
};

const i18nReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        ...{
          lang: action.lang
        }
      };
    default:
      return state;
  }
};

export default i18nReducer;
