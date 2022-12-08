import axios from "axios";

const instance = axios.create({
  // TODO: change later
  baseURL: process.env.REACT_APP_API_BASE_URL.replace("/api", ":5003"),
});

export default instance;
