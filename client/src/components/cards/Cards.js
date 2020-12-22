import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

const Cards = ({
  updateActive,
  updateNumOfMoves,
  currentLevel,
  currentTheme,
  updateNewGame,
}) => {
  const [images, setImages] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  const [currCards, setCurrCards] = useState([]);
  const [disableClick, setDisableClick] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let number;
    switch (currentLevel) {
      case 'beginner':
        number = 12;
        break;
      case 'intermediate':
        number = 20;
        break;
      case 'expert':
        number = 30;
        break;
      default:
        number = 12;
    }

    let buffer = [];
    for (let i = 1; i <= number; i++) {
      let temp;
      if (i <= number / 2) {
        temp = i;
      } else {
        temp = i - number / 2;
      }
      buffer.push({ id: temp });
    }

    buffer.sort((a, b) => {
      return 0.5 - Math.random();
    });

    setImages(buffer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let curId = 0;
  let curImgId = 0;

  let source;
  switch (currentTheme) {
    case 'robots':
      source = '?set=set1';
      break;
    case 'cats':
      source = '?set=set4';
      break;
    case 'monsters':
      source = '?set=set2';
      break;
    default:
      source = '?set=set1';
  }

  const cardClicked = (cardDiv) => {
    curImgId = parseInt(cardDiv.getAttribute('imgid'));
    curId = parseInt(cardDiv.id);
    if (currCards.length === 0) {
      setCurrCards((currCards) => [...currCards, curImgId]);
      setShownCards((shownCards) => [...shownCards, curId]);
    } else {
      setCount(count + 1);
      if (currCards.includes(curImgId)) {
        setShownCards((shownCards) => [...shownCards, curId]);
        setCurrCards([]);
        if (shownCards.length === images.length - 1) {
          updateNumOfMoves(count);
          setTimeout(() => {
            updateNewGame({
              gameLevel: currentLevel,
              numOfMoves: count,
              date: Date.now(),
            });
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
  };

  const noClicking = () => {
    console.log('nope!');
  };

  return (
    <div
      className='mem-cards-container'
      style={{
        maxWidth:
          currentLevel === 'beginner'
            ? '500px'
            : currentLevel === 'intermediate'
            ? '600px'
            : '700px',
      }}
    >
      {images.map((image, index) => (
        <CardItem
          key={index}
          id={index}
          imageId={image.id}
          shownCards={shownCards}
          cardClicked={disableClick ? noClicking : cardClicked}
          source={source}
        />
      ))}
    </div>
  );
};

export default Cards;
