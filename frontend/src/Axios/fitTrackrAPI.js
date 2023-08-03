import axios from "axios";

// const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
// const baseURL = isDev ? 'http://localhost:8001/backend/api/v1' : 'http://142.93.166.27/backend/api/v1/'

const baseURL = 'http://localhost:8001/backend/api/v1';

const fitTrackrAPI = axios.create({
  baseURL: baseURL
})

export default fitTrackrAPI;