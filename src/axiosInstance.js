import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://calm-forest-35172-38d7ff5b8b11.herokuapp.com/api', // Set the base URL for your API
  // You can also configure other Axios options here
});

export default axiosInstance;