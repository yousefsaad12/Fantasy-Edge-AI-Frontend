// src/pages/Recommendation.jsx

import React, { useEffect, useState } from 'react';
import FetchPlayersData from '../utilities/FetchPlayersData'; // Adjust the import path as needed

const Recommendation = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlayersData = async () => {
      try {
        const data = await fetchPlayersData();
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
    <div>
      <h1>Player Recommendations</h1>
      {/* Render your player data here */}
      {players.length > 0 ? (
        players.map((player) => (
          <div key={player.id}>{player.name}</div> // Adjust based on your data structure
        ))
      ) : (
        <div>No players found.</div>
      )}
    </div>
  );
};

export default Recommendation;
