import axios from "axios";

// const AxiosInstance = axios.interceptors.request.use((config) => {

// })

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
