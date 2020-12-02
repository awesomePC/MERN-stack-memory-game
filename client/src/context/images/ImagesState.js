import React, { useReducer } from 'react';
import ImagesContext from './imagesContext';
import imagesReducer from './imagesReducer';

const ImagesState = (props) => {
  const initialState = {
    robots: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  };

  const [state, dispatch] = useReducer(imagesReducer, initialState);

  // Choose Robots, Monsters, or Cats

  // Set number of cards based on beginner, intermediate, or expert

  return (
    <ImagesContext.Provider
      value={{
        robots: state.robots,
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesState;
