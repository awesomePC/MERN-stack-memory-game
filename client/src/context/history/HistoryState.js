import React, { useReducer } from 'react';
import axios from 'axios';
import HistoryContext from './historyContext';
import historyReducer from './historyReducer';
import {
  ADD_NEW_GAME,
  UPDATE_CURRENT_LEVEL,
  UPDATE_CURRENT_THEME,
  GAME_ERROR,
  GET_GAMES,
} from '../types';

const HistoryState = (props) => {
  // declare initial state
  const initialState = {
    games: [],
    currentLevel: 'beginner',
    currentTheme: 'robots',
    error: null,
  };

  // declare state and dispatch with usereducer hook
  const [state, dispatch] = useReducer(historyReducer, initialState);

  // Get games for user
  const getGames = async () => {
    // declare response from backend, dispatch to reducer
    try {
      const res = await axios.get('/api/history');

      dispatch({
        type: GET_GAMES,
        payload: res.data,
      });
      // dispatch errr msg if found
    } catch (error) {
      dispatch({
        type: GAME_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Add game to history
  const addNewGame = async (newGame) => {
    const config = {
      header: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/history', newGame, config);

      dispatch({
        type: ADD_NEW_GAME,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GAME_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // Delete all games from history

  // Update currentLevel
  const updateCurrentLevel = (level) => {
    dispatch({ type: UPDATE_CURRENT_LEVEL, payload: level });
  };

  // Update currentTheme
  const updateCurrentTheme = (theme) => {
    dispatch({ type: UPDATE_CURRENT_THEME, payload: theme });
  };

  return (
    // return all variables and functions to provider
    <HistoryContext.Provider
      value={{
        games: state.games,
        currentLevel: state.currentLevel,
        currentTheme: state.currentTheme,
        error: state.error,
        updateCurrentLevel,
        updateCurrentTheme,
        addNewGame,
        getGames,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryState;
