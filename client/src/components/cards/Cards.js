import React, { useContext } from 'react';
import ImagesContext from '../../context/images/imagesContext';
import CardItem from './CardItem';

const Cards = () => {
  const imagesContext = useContext(ImagesContext);

  const { robots } = imagesContext;

  return (
    <div className='mem-cards-container'>
      {robots.map((robot) => (
        <CardItem key={Math.floor(Math.random() * 100) + 1} id={robot.id} />
      ))}
    </div>
  );
};

export default Cards;
