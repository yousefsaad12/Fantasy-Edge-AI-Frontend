
const FetchPlayersData = async () => {
    try {
      const response = await fetch(process.env.FETCHING_PLAYER_API); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data; // Adjust based on your data structure
    } catch (error) {
      throw new Error(`Error fetching players data: ${error.message}`);
    }
  };
  
  export default FetchPlayersData;
  