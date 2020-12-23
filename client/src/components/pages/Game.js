import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';
import AuthContext from '../../context/auth/authContext';
import Cards from '../cards/Cards';

const Game = () => {
  // declare historyContext, authContext, destructure historyContext
  const historyContext = useContext(HistoryContext);
  const authContext = useContext(AuthContext);

  const { currentLevel, currentTheme, addNewGame } = historyContext;

  // delcare component state
  const [active, setActive] = useState(true);
  const [curNumOfMoves, setCurNumOfMoves] = useState(0);
  const [newGame, setNewGame] = useState({
    gameLevel: '',
    numOfMoves: 0,
    date: Date.now(),
  });

  // authenticate user if game page is loaded
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  // change active state boolean
  const updateActive = () => {
    let cur = active;
    setActive(!cur);
  };

  // store current number of moves
  const updateCurNumOfMoves = (count) => {
    setCurNumOfMoves(count);
  };

  // store newGame object
  const updateNewGame = (newGame) => {
    setNewGame(newGame);
  };

  // add new game object to context and database
  const onClick = (e) => {
    addNewGame(newGame);
  };

  return (
    // materializeCSS card
    // prevent view if page loading
    !authContext.loading && (
      <div className='game-board'>
        {/* show game cards if active state true */}
        {active ? (
          <Cards
            updateActive={updateActive}
            updateNumOfMoves={updateCurNumOfMoves}
            currentLevel={currentLevel}
            currentTheme={currentTheme}
            updateNewGame={updateNewGame}
          />
        ) : (
          // show congratulations card if game not active
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
                        to='/'
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
    )
  );
};

export default Game;
