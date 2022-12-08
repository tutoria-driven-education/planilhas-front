import axios from "axios";

const instance = axios.create({
  // TODO: change later
  baseURL: "http://discord-bot.sistemas.driven.com.br:5003", //process.env.REACT_APP_API_BASE_URL,
});

export default instance;
