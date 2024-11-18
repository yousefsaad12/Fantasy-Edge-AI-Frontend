import React, { useEffect, useState } from 'react';
import FetchPlayersData from '../services/FetchPlayersData'; 
import PlayerTable from '../components/PlayerTable';

const Recommendation = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getPlayersData = async () => {
      try {
        const data = await FetchPlayersData();
        setPlayers(data); // Adjust based on your data structure
      } catch (err) {
        setError(err.message);
      }
    };

    getPlayersData();
  }, []);

  // Display error if it exists
  if (error) {
    return <div>Error: {error}</div>;
  }

  

 return ( 
    <div className='from-gray-50 to-slate-50'>
    {/* Render the PlayerTable component */}
    {players.length > 0 ? (
      <PlayerTable playersData={players} /> // Pass players data to PlayerTable as a prop
    ): <></>}
    
  </div>
);
};

export default Recommendation;
