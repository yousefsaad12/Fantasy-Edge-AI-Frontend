import React, { useState } from "react";
import Select from "react-select"; // React-Select for the dropdown
import useFetchPlayerNames from "../services/fetchPlayerNames"; // Update to use the new hook
import useFetchPredictions from "../services/useFetchPredictions"; // Import the new hook
import { motion } from "framer-motion"; // Importing framer-motion
import { useNavigate } from "react-router-dom"; // For navigation (instead of useHistory)

const Analyze = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const { filteredPlayers, searchTerm, handleSearch, loading, error } = useFetchPlayerNames();
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Use the new hook for predictions
  const { predictions, loadingPrediction, error: predictionError, fetchPredictions } = useFetchPredictions();

  // Transform player names into options for React-Select
  const playerOptions = filteredPlayers.map((player) => ({
    value: player.id, // Assuming each player has an id
    label: player.name, // Assuming each player has a name
  }));

  const handlePlayerChange = (selectedOption) => {
    setSelectedPlayer(selectedOption);
  };

  // Function to handle the form submission and API call
  const handleSubmit = () => {
    if (selectedPlayer) {
      fetchPredictions(selectedPlayer.label); // Pass the full name to fetchPredictions
    }
  };

  
  return (
    <div className="p-4 pb-48 mb-48 max-w-md mx-auto mt-48">
      <h2 className="text-4xl text-center font-bold mb-4 bg-gradient-to-tr from-[#37003c] to-[#da0043] bg-clip-text text-transparent">Analyze Player</h2>

      {loading && <p>Loading player data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Select
          options={playerOptions}
          value={selectedPlayer}
          onChange={handlePlayerChange}
          onInputChange={handleSearch}
          placeholder="Search for a player..."
          isClearable
          isSearchable
          noOptionsMessage={() => "No players found"}
          className="w-full rounded-3xl" 
        />
      </motion.div>

      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-2 bg-[#37003c] flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#6d0044] before:to-[#a7006c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white text-xs sm:text-sm"
          disabled={loadingPrediction || !selectedPlayer}
        >
          {loadingPrediction ? 'Loading Predictions...' : 'Get Predictions'}
        </button>
      </motion.div>

      {selectedPlayer && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold">Selected Player:</h3>
          <p>{selectedPlayer.label}</p>
        </motion.div>
      )}

      {predictions && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Predictions:</h3>
          <div className="mt-4">
            <p><strong>Predicted Points:</strong> {predictions.predictedPoints}</p>
            <p><strong>Percentage Change:</strong> 
              {predictions.trend == 'Increasing' ? (
                <span className="text-green-500">↑ {predictions.percentageChange}%</span>
              ) : (
                <span className="text-red-500">↓ {predictions.percentageChange}%</span>
              )}
            </p>
            <p><strong>Trend:</strong> {predictions.trend}</p>
            <p><strong>Average Bonus Points:</strong> {predictions.avgBonusPoints}</p>
            <p><strong>Points Per Week:</strong> {predictions.pointsPerWeek}</p>
            <p><strong>Assists Percentage:</strong> {predictions.assistsPercentage}</p>
            <p><strong>Goals Percentage:</strong> {predictions.goalsPercentage}</p>
          </div>
        </motion.div>
      )}

      {predictionError && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-500">Error fetching predictions: {predictionError}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Analyze;
