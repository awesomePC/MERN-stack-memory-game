import React, { useState, useEffect } from 'react';

// bring in props
const CardItem = ({ id, imageId, shownCards, cardClicked, source }) => {
  // set state
  const [show, setShow] = useState(false);

  // check if cardItem should be displayed, display if so
  useEffect(() => {
    let buff = shownCards.includes(id);
    setShow(buff);
    // eslint-disable-next-line
  }, [shownCards]);

  // call cardClicked with card div
  const onClick = (e) => {
    cardClicked(e.target);
  };

  return (
    // materializeCSS card
    <div
      id={id}
      imgid={imageId}
      className='mem-card'
      // show card img and disable click if necessary
      style={{
        backgroundColor: show ? '#D3D3D3' : null,
        pointerEvents: show ? 'none' : 'auto',
      }}
      onClick={onClick}
    >
      <img
        id={id}
        imgid={imageId}
        alt='card-figure'
        // get image from robohash
        src={`https://robohash.org/${imageId}` + source}
        // hide image if necesarry
        style={{ visibility: !show ? 'hidden' : 'visible' }}
      ></img>
    </div>
  );
};

export default CardItem;
