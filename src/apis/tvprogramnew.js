import axios from 'axios';

export const getTvProgramNews = async () => {
  const response = await axios.get('http://localhost:4000/tvprogramnew');
  return response.data;
};

export const getTvProgramNewById = async id => {
  const response = await axios.get(`http://localhost:4000/tvprogramnew/${id}`);
  return response.data;
};