import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HistoryContext from '../../context/history/historyContext';

const Home = () => {
  const historyContext = useContext(HistoryContext);

  const { games } = historyContext;

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
          <div className='col s12 card-action'>
            <div className='col s4 center'>
              <Link to='/game' className='waves-effect waves-red btn-flat'>
                Beginner
              </Link>
            </div>
            <div className='col s4 center'>
              <Link to='/game' className='waves-effect waves-red btn-flat'>
                Intermediate
              </Link>
            </div>
            <div className='col s4 center'>
              <Link to='/game' className='waves-effect waves-red btn-flat'>
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
