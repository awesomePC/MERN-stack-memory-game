import React, { useContext } from 'react';
import HistoryContext from '../../context/history/historyContext';

const Home = () => {
  const historyContext = useContext(HistoryContext);

  const { games } = historyContext;

  const begNumMoves = 403;
  const intNumMoves = 0;
  const expNumMoves = 0;

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
                <p>{begNumMoves}</p>
              </div>
              <div className='col s4 center'>
                <p>{intNumMoves}</p>
              </div>
              <div className='col s4 center'>
                <p>{expNumMoves}</p>
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
              <a className='waves-effect waves-red btn-flat'>Beginner</a>
            </div>
            <div className='col s4 center'>
              <a className='waves-effect waves-red btn-flat'>Intermediate</a>
            </div>
            <div className='col s4 center'>
              <a className='waves-effect waves-red btn-flat'>Expert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
