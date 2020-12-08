import React, { useState, useContext } from 'react';
import ImagesContext from '../../context/images/imagesContext';

const CardItem = ({ id, robotId }) => {
  const imagesContext = useContext(ImagesContext);

  const { tempId } = imagesContext;

  const [show, setShow] = useState(false);
  // const [found, setFound] = useState(false);

  const updateShow = () => {
    let current = show;
    setShow(!current);
  };

  // const updateFound = () => {
  //   let current = found;
  //   setFound(!current);
  // };

  const onClick = (e) => {
    if (tempId === '') {
      updateShow();
      document.getElementById(e.target.id).style.pointerEvents = 'none';
      // imagesContext.storeTempId(e.target.id);
    } else {
      console.log(show);
    }
  };

  return (
    <div
      id={id}
      className='mem-card'
      style={{ backgroundColor: show ? '#D3D3D3' : null }}
      onClick={onClick}
    >
      {show ? (
        <img
          imgid={robotId}
          alt='robot'
          src={`https://robohash.org/${robotId}`}
        ></img>
      ) : null}
    </div>
  );
};

export default CardItem;
