import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

// declare props and initial state
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
    // declare number of cards based on level
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

    // declare array with integers up to 'number', repeated once, and then randomize
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

    // save random int array to state
    setImages(buffer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // declare variables
  let curId = 0;
  let curImgId = 0;

  // declare source based on user's chosen theme for robohash api
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

  // handle cards clicked
  const cardClicked = (cardDiv) => {
    // delcare imgId and div id
    curImgId = parseInt(cardDiv.getAttribute('imgid'));
    curId = parseInt(cardDiv.id);
    // if card is first clicked in pair, store values
    if (currCards.length === 0) {
      setCurrCards((currCards) => [...currCards, curImgId]);
      setShownCards((shownCards) => [...shownCards, curId]);
      // runs if card second clicked in pair
    } else {
      // increase count state by 1
      setCount(count + 1);
      // if cards match, store second card and clear currCards state
      if (currCards.includes(curImgId)) {
        setShownCards((shownCards) => [...shownCards, curId]);
        setCurrCards([]);
        // runs if all cards found
        if (shownCards.length === images.length - 1) {
          // store number of moves, pass game object to updateNewGame function
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
        // runs if second card does not match firs card
      } else {
        // disable click, show second card, clear current cards
        setDisableClick(true);
        setShownCards((shownCards) => [...shownCards, curId]);
        setCurrCards([]);
        // after 2 seconds, flip last two cards back over and enable clicking
        setTimeout(() => {
          let shownCardsTempArr = [...shownCards];
          shownCardsTempArr.splice(-1, 1);
          setShownCards(shownCardsTempArr);
          setDisableClick(false);
        }, 2000);
      }
    }
  };

  // log message if shown card clicked
  const noClicking = () => {
    console.log('nope!');
  };

  return (
    // materializeCSS card
    <div
      className='mem-cards-container'
      // set width for number of cards
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
