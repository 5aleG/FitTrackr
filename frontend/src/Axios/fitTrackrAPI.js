import axios from "axios";

const baseURL = 'http://localhost:8001/backend/api/v1';

const fitTrackrAPI = axios.create({
  baseURL: baseURL
});

fitTrackrAPI.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default fitTrackrAPI;
