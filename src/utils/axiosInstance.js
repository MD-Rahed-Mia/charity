import axios from "axios";

// const AxiosInstance = axios.interceptors.request.use((config) => {

// })

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
