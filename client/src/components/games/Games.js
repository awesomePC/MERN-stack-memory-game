import React, { useContext } from 'react';
import HistoryContext from '../../context/history/historyContext';

const Games = () => {
  const historyContext = useContext(HistoryContext);

  const { games } = historyContext;

  return (
    <div>
      {games.map((game) => (
        <h6>{game.gameLevel}</h6>
      ))}
    </div>
  );
};

export default Games;
