import axios from 'axios';

export const getLiveSeries = async () => {
  const response = await axios.get('http://localhost:4000/liveseries');
  return response.data;
};
