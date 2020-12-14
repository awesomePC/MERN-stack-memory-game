import { UPDATE_CURRENT_LEVEL, UPDATE_CURRENT_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: action.payload,
      };
    case UPDATE_CURRENT_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};
