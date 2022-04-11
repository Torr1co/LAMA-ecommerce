import axios from "axios";

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
