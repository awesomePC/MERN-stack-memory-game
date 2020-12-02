import React, { useContext } from 'react';
import ImagesContext from '../../context/images/imagesContext';
import CardItem from './CardItem';

const Cards = () => {
  const imagesContext = useContext(ImagesContext);

  const { robots } = imagesContext;

  return robots.map((robot) => <CardItem key={robot.id} id={robot.id} />);
};

export default Cards;
