import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const request = async (endpoint, body, method) => {
  try {
    const response = await api[method](endpoint, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export default api;