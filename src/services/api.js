import axios from "axios";

export const HOST = "http://192.168.15.9:4000";
const api = axios.create({ baseURL: HOST });

export default api;
