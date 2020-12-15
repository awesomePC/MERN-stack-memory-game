import React, { useReducer } from 'react';
import HistoryContext from './historyContext';
import historyReducer from './historyReducer';
import {
  ADD_NEW_GAME,
  DELETE_GAMES,
  UPDATE_CURRENT_LEVEL,
  UPDATE_CURRENT_THEME,
} from '../types';

const HistoryState = (props) => {
  const initialState = {
    games: [
      {
        id: 1,
        user: 'User1',
        gameLevel: 'beginner',
        numOfMoves: 13,
        date: Date.now(),
      },
      {
        id: 2,
        user: 'User1',
        gameLevel: 'beginner',
        numOfMoves: 18,
        date: Date.now(),
      },
      {
        id: 3,
        user: 'User1',
        gameLevel: 'beginner',
        numOfMoves: 23,
        date: Date.now(),
      },
      {
        id: 4,
        user: 'User1',
        gameLevel: 'intermediate',
        numOfMoves: 23,
        date: Date.now(),
      },
      {
        id: 5,
        user: 'User1',
        gameLevel: 'expert',
        numOfMoves: 38,
        date: Date.now(),
      },
      {
        id: 6,
        user: 'User1',
        gameLevel: 'expert',
        numOfMoves: 57,
        date: Date.now(),
      },
    ],
    currentLevel: '',
    currentTheme: 'robots',
  };

  const [state, dispatch] = useReducer(historyReducer, initialState);

  // Add game to history
  const addNewGame = (newGame) => {
    dispatch({ tpye: ADD_NEW_GAME, payload: newGame });
  };

  // Delete all games from history

  // Update currentLevel
  const updateCurrentLevel = (level) => {
    dispatch({ type: UPDATE_CURRENT_LEVEL, payload: level });
  };

  // update currentTheme
  const updateCurrentTheme = (theme) => {
    dispatch({ type: UPDATE_CURRENT_THEME, payload: theme });
  };

  return (
    <HistoryContext.Provider
      value={{
        games: state.games,
        currentLevel: state.currentLevel,
        currentTheme: state.currentTheme,
        updateCurrentLevel,
        updateCurrentTheme,
        addNewGame,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryState;
