import React, { useReducer } from 'react';
import ImagesContext from './imagesContext';
import imagesReducer from './imagesReducer';
import { STORE_TEMPID } from '../types';

const ImagesState = (props) => {
  const initialState = {
    robots: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ],
    tempId: '',
  };

  const [state, dispatch] = useReducer(imagesReducer, initialState);

  // Choose Robots, Monsters, or Cats

  // Set number of cards based on beginner, intermediate, or expert

  // Store tempId
  const storeTempId = (id) => {
    dispatch({ type: STORE_TEMPID, payload: id });
  };

  // Remove tempId

  return (
    <ImagesContext.Provider
      value={{
        robots: state.robots,
        tempId: state.tempId,
        storeTempId,
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesState;
