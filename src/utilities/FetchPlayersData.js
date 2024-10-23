const FetchPlayersData = async () => {
  try {
    const response = await fetch('http://localhost:5235/api/player/playersdata/train', {
      method: 'GET',
      cache: 'no-cache' // Force the request to skip the cache
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(`Error fetching players data: ${error.message}`);
  }
};

export default FetchPlayersData