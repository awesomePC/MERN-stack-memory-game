import React, { useState } from 'react';
import CardItem from './CardItem';

const Cards = ({ updateActive }) => {
  const [images, setImages] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  const [shownCards, setShownCards] = useState([]);
  const [currCards, setCurrCards] = useState([]);
  const [disableClick, setDisableClick] = useState(false);

  let curId = 0;
  let curImgId = 0;

  const cardClicked = (cardDiv) => {
    curImgId = parseInt(cardDiv.getAttribute('imgid'));
    curId = parseInt(cardDiv.id);
    if (currCards.length === 0) {
      setCurrCards((currCards) => [...currCards, curImgId]);
      setShownCards((shownCards) => [...shownCards, curId]);
    } else {
      if (currCards.includes(curImgId)) {
        setShownCards((shownCards) => [...shownCards, curId]);
        setCurrCards([]);
        if (shownCards.length === images.length - 1) {
          setTimeout(() => {
            updateActive();
          }, 1000);
        }
      } else {
        setDisableClick(true);
        setShownCards((shownCards) => [...shownCards, curId]);
        setCurrCards([]);
        setTimeout(() => {
          let shownCardsTempArr = [...shownCards];
          shownCardsTempArr.splice(-1, 1);
          setShownCards(shownCardsTempArr);
          setDisableClick(false);
        }, 2000);
      }
    }
    console.log(currCards);
    console.log(shownCards);
  };

  const noClicking = () => {
    console.log('nope!');
  };

  return (
    <div className='mem-cards-container'>
      {images.map((image, index) => (
        <CardItem
          key={index}
          id={index}
          imageId={image.id}
          shownCards={shownCards}
          cardClicked={disableClick ? noClicking : cardClicked}
        />
      ))}
    </div>
  );
};

export default Cards;
