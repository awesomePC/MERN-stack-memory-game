import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';
import Cards from '../cards/Cards';

const Game = () => {
  const historyContext = useContext(HistoryContext);

  const { games, currentLevel, currentTheme, addNewGame } = historyContext;

  const [active, setActive] = useState(true);
  const [curNumOfMoves, setCurNumOfMoves] = useState(0);
  const [newGame, setNewGame] = useState({
    id: 0,
    user: 'User1',
    gameLevel: '',
    numOfMoves: 0,
    date: Date.now(),
  });

  const updateActive = () => {
    let cur = active;
    setActive(!cur);
  };

  const updateCurNumOfMoves = (count) => {
    setCurNumOfMoves(count);
  };

  // const updateNewGame = (newGame) => {
  //   setNewGame(newGame);
  // };

  const onClick = (e) => {
    //   addNewGame(newGame);
    //   console.log(newGame);
    //   console.log(games);
  };

  return (
    <div className='game-board'>
      {active ? (
        <Cards
          updateActive={updateActive}
          updateNumOfMoves={updateCurNumOfMoves}
          currentLevel={currentLevel}
          currentTheme={currentTheme}
          // updateNewGame={updateNewGame}
        />
      ) : (
        <div className='row container'>
          <div className='col s12'>
            <div className='card blue-grey darken-1 small'>
              <div className='card-content white-text'>
                <span className='center card-title'>Congratulations!</span>
                <br></br>
                <span className='center card-title'>
                  You won in {curNumOfMoves} moves!
                </span>
                <br></br>
                <div className='col s12 card-action'>
                  <div className='col s12 center'>
                    <Link
                      to='/home'
                      className='waves-effect waves-red btn-flat'
                      onClick={onClick}
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
