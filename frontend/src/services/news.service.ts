import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000/v1/news',
});

export default axiosInstance;
