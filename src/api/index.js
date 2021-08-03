import axios from "axios";

export const mainAPI = axios.create({
  baseURL: "https://localhost:44393/api/",
});

export const excahgeRateAPI = axios.create({
  baseURL: "https://api.exchangerate.host/",
});
