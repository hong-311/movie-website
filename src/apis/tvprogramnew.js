import axios from 'axios';

export const getTvProgramNews = async () => {
  const response = await axios.get('http://ehfpal311.dothome.co.kr/data.json');
  return response.data.tvprogramnew;
};

export const getTvProgramNewById = async id => {
  const response = await axios.get('http://ehfpal311.dothome.co.kr/data.json');
  return response.data.tvprogramnew[id - 1];
};