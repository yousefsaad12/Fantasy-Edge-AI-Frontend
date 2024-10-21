
import React from 'react';

const PlayerTable = ({ playersData }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 p-4">Player Name</th>
          <th className="border border-gray-300 p-4">Position</th>
          <th className="border border-gray-300 p-4">Team</th>
          <th className="border border-gray-300 p-4">Points</th>
          {/* Add other relevant columns */}
        </tr>
      </thead>
      <tbody>
        {playersData.map((player) => (
          <tr key={player.id}>
            <td className="border border-gray-300 p-4">{player.name}</td>
            <td className="border border-gray-300 p-4">{player.position}</td>
            <td className="border border-gray-300 p-4">{player.team}</td>
            <td className="border border-gray-300 p-4">{player.points}</td>
            {/* Add other relevant data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
