import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default axiosRequest;
