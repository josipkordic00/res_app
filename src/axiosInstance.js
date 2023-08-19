import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Set the base URL for your API
  // You can also configure other Axios options here
});

export default axiosInstance;