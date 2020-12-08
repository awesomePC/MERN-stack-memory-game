import React, { useContext } from 'react';
import ImagesContext from '../../context/images/imagesContext';
import CardItem from './CardItem';

const Cards = () => {
  const imagesContext = useContext(ImagesContext);

  const { robots } = imagesContext;

  return (
    <div className='mem-cards-container'>
      {robots.map((robot, index) => (
        <CardItem
          key={Math.floor(Math.random() * 1000) + 1}
          id={index}
          robotId={robot.id}
        />
      ))}
    </div>
  );
};

export default Cards;
