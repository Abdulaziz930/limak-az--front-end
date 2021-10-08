import axios from "axios";

export const mainAPI = axios.create({
  baseURL: "http://abdulazizk-001-site1.ctempurl.com/api/",
});

export const excahgeRateAPI = axios.create({
  baseURL: "https://api.exchangerate.host/",
});
