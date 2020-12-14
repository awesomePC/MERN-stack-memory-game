import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';
import Cards from '../cards/Cards';

const Game = () => {
  const historyContext = useContext(HistoryContext);

  const { currentLevel, currentTheme } = historyContext;

  const [active, setActive] = useState(true);
  const [numOfMoves, setNumOfMoves] = useState(0);

  const updateActive = () => {
    let cur = active;
    setActive(!cur);
  };

  const updateNumOfMoves = (count) => {
    setNumOfMoves(count);
  };

  return (
    <div className='game-board'>
      {active ? (
        <Cards
          updateActive={updateActive}
          updateNumOfMoves={updateNumOfMoves}
          currentLevel={currentLevel}
          currentTheme={currentTheme}
        />
      ) : (
        <div className='row container'>
          <div className='col s12'>
            <div className='card blue-grey darken-1 small'>
              <div className='card-content white-text'>
                <span className='center card-title'>Congratulations!</span>
                <span className='center card-title'>
                  You won in {numOfMoves} moves!
                </span>
                <br></br>
                <div className='col s12 card-action'>
                  <div className='col s12 center'>
                    <Link
                      to='/home'
                      className='waves-effect waves-red btn-flat'
                    >
                      End Game
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
