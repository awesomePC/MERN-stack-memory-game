import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const historyContext = useContext(HistoryContext);
  const authContext = useContext(AuthContext);

  const {
    games,
    updateCurrentLevel,
    updateCurrentTheme,
    getGames,
  } = historyContext;

  const [chosenTheme, setChosenTheme] = useState('');

  useEffect(() => {
    authContext.loadUser();
    getGames();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.M.AutoInit();
  });

  const getAvg = (data) => {
    const gameArr = data[0]
      .filter((game) => game.gameLevel === data[1])
      .map((game) => game.numOfMoves);

    if (gameArr.length > 0) {
      return Math.floor(gameArr.reduce((a, b) => a + b) / gameArr.length);
    } else {
      return 'No games yet played';
    }
  };

  const onClick = (e) => {
    updateCurrentLevel(e.target.name);
  };

  const handleClick = (e) => {
    updateCurrentTheme(e.target.name);
    setChosenTheme(e.target.name);
  };

  return (
    <div className='row container'>
      <div className='col s12'>
        <div className='card blue-grey darken-1 large'>
          <div className='card-content white-text'>
            <span className='center card-title'>
              You have played {games.length} games so far!
            </span>
            <br></br>
            <br></br>
            <span className='center card-title'>
              Your Average Number of Moves:
            </span>
            <br></br>
            <div className='row col s12'>
              <div className='col s4 center'>
                <u>Beginner</u>
              </div>
              <div className='col s4 center'>
                <u>Intermediate</u>
              </div>
              <div className='col s4 center'>
                <u>Expert</u>
              </div>
            </div>
            <div className='row col s12'>
              <div className='col s4 center'>
                <p>{getAvg([games, 'beginner'])}</p>
              </div>
              <div className='col s4 center'>
                <p>{getAvg([games, 'intermediate'])}</p>
              </div>
              <div className='col s4 center'>
                <p>{getAvg([games, 'expert'])}</p>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span className='center card-title'>Start A New Game Below!</span>
          </div>
          <div className='center-align'>
            <a
              className='dropdown-trigger btn blue-grey darken-1'
              href='#'
              data-target='dropdown1'
            >
              {chosenTheme.length > 0 ? chosenTheme : 'Choose A Theme!'}
            </a>
            <ul id='dropdown1' className='dropdown-content'>
              <li>
                <a
                  href='#'
                  onClick={handleClick}
                  name='robots'
                  className='blue-grey-text text-darken-1'
                >
                  Robots
                </a>
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                <a
                  href='#'
                  onClick={handleClick}
                  name='cats'
                  className='blue-grey-text text-darken-1'
                >
                  Cats
                </a>
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                <a
                  href='#'
                  onClick={handleClick}
                  name='monsters'
                  className='blue-grey-text text-darken-1'
                >
                  Monsters
                </a>
              </li>
            </ul>
          </div>
          <div className='col s12 card-action'>
            <div className='col s4 center'>
              <Link
                to='/game'
                className='waves-effect waves-red btn-flat'
                name='beginner'
                onClick={onClick}
              >
                Beginner
              </Link>
            </div>
            <div className='col s4 center'>
              <Link
                to='/game'
                className='waves-effect waves-red btn-flat'
                name='intermediate'
                onClick={onClick}
              >
                Intermediate
              </Link>
            </div>
            <div className='col s4 center'>
              <Link
                to='/game'
                className='waves-effect waves-red btn-flat'
                name='expert'
                onClick={onClick}
              >
                Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
