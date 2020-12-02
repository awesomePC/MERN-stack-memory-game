import React from 'react';

const CardItem = ({ id }) => {
  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div className='activator card blue-grey darken-1'>
          <div className='activator waves-effect waves-block waves-light'>
            <div className='activator card-content white-text'>
              <span className='card-title'>Reveal Me!</span>
            </div>
          </div>
          <div className='card-reveal'>
            <div className='card-image'>
              <img alt='robots' src={`https://robohash.org/${id}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
