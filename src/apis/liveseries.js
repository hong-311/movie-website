import axios from 'axios';

export const getLiveSeries = async () => {
  const response = await axios.get('http://ehfpal311.dothome.co.kr/data.json');
  return response.data.liveseries;
};
