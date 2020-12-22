import {
  UPDATE_CURRENT_LEVEL,
  UPDATE_CURRENT_THEME,
  ADD_NEW_GAME,
  GAME_ERROR,
  GET_GAMES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
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
    case ADD_NEW_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case GAME_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
