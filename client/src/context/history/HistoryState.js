import React, { useReducer } from 'react';
import HistoryContext from './historyContext';
import historyReducer from './historyReducer';
import { ADD_GAME, DELETE_GAMES } from '../types';

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
  };

  const [state, dispatch] = useReducer(historyReducer, initialState);

  // Add game to history

  // Delete all games from history

  return (
    <HistoryContext.Provider
      value={{
        games: state.games,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryState;
