 const FetchPlayersData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_FETCHING_PLAYER_API, {
      method: 'GET',
      cache: 'no-cache',
      mode: 'cors'
    });

    console.log('HTTP Status:', response.status);
    console.log('Response Type:', response.headers.get('Content-Type'));

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;

  } catch (error) {
    console.error(`Error fetching players data: ${error.message}`);
    throw new Error(`Error fetching players data: ${error.message}`);
  }
};

export default FetchPlayersData;