import { useState, useEffect, useCallback } from "react";

const useFetchPlayerNames = () => {
  const [players, setPlayers] = useState([]); // Store all players fetched from the API
  const [filteredPlayers, setFilteredPlayers] = useState([]); // Store players relevant to the search term
  const [searchTerm, setSearchTerm] = useState(""); // Store the search input
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track any fetch errors

  // Fetch data from the API with proper error handling
  const fetchData = useCallback(async () => {
    setLoading(true); // Set loading state
    try {
      const response = await fetch(import.meta.env.VITE_FETCHING_PLAYER_NAME, { // API URL from environment variables
        method: "GET",
        cache: "no-cache",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Error fetching player data: ${response.statusText}`);
      }
      const data = await response.json(); // Parse JSON response
      setPlayers(data || []); // Assuming the response is an array of player objects
    } catch (error) {
      console.error(error);
      setError(error.message); // Set error state
      setPlayers([]); // Fallback to an empty array in case of error
    } finally {
      setLoading(false); // Reset loading state
    }
  }, []);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPlayers([]); // Show nothing if search term is empty
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = players.filter((player) =>
        player?.name?.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredPlayers(filtered); // Show only relevant players
    }
  }, [searchTerm, players]);

  // Update search term
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
  };

  return { filteredPlayers, searchTerm, handleSearch, players, loading, error };
};

export default useFetchPlayerNames;
