import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';

const Home = () => {
  const historyContext = useContext(HistoryContext);

  const { games, updateCurrentLevel, updateCurrentTheme } = historyContext;

  const [chosenTheme, setChosenTheme] = useState('');

  const getBegAvg = (gamesHistory) => {
    const begArr = gamesHistory
      .filter((game) => game.gameLevel === 'beginner')
      .map((game) => game.numOfMoves);

    return begArr.reduce((a, b) => a + b) / begArr.length;
  };

  const getIntAvg = (gamesHistory) => {
    const begArr = gamesHistory
      .filter((game) => game.gameLevel === 'intermediate')
      .map((game) => game.numOfMoves);

    return begArr.reduce((a, b) => a + b) / begArr.length;
  };

  const getExpAvg = (gamesHistory) => {
    const begArr = gamesHistory
      .filter((game) => game.gameLevel === 'expert')
      .map((game) => game.numOfMoves);

    return begArr.reduce((a, b) => a + b) / begArr.length;
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
                <p>{getBegAvg(games)}</p>
              </div>
              <div className='col s4 center'>
                <p>{getIntAvg(games)}</p>
              </div>
              <div className='col s4 center'>
                <p>{getExpAvg(games)}</p>
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
                <a href='#!' onClick={handleClick} name='robots'>
                  Robots
                </a>
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                <a href='#!' onClick={handleClick} name='cats'>
                  Cats
                </a>
              </li>
              <li className='divider' tabIndex='-1'></li>
              <li>
                <a href='#!' onClick={handleClick} name='monsters'>
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
