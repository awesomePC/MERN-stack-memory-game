import React from 'react';

const onClick = (e) => {
  console.log(document.getElementById('random'));
  if (document.getElementById('random').style.display === 'none') {
    document.getElementById('random').style.display = 'flex';
  } else {
    document.getElementById('random').style.display = 'none';
  }
};

const CardItem = ({ id }) => {
  return (
    <div id='random' className='mem-card' onClick={onClick}>
      <img alt='robot' src={`https://robohash.org/${id}`}></img>
    </div>
  );
};

export default CardItem;
