import { useState } from "react";

const useFetchPredictions = () => {
  const [predictions, setPredictions] = useState(null);
  const [loadingPrediction, setLoadingPrediction] = useState(false);
  const [error, setError] = useState(null);

  const fetchPredictions = async (playerName) => {

    setLoadingPrediction(true);
    setError(null);

    const apiUrl = import.meta.env.VITE_PREDICTION_API; 

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ player_name: playerName }), // Send playerName in the request body
      });

      if (!response.ok) {
        
        const errorText = await response.text();
        throw new Error(`Failed to fetch predictions: ${errorText}`);
      }

      const data = await response.json();
     
      setPredictions(data); 
    } catch (error) {
      setError(error.message);
      console.error("Error fetching predictions:", error); 
    } finally {
      setLoadingPrediction(false);
    }
  };

  return { predictions, loadingPrediction, error, fetchPredictions };
};

export default useFetchPredictions;
