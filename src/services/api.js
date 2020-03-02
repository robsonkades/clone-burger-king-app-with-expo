import axios from "axios";

export const HOST = "http://192.168.15.4:4000";
const api = axios.create({ baseURL: HOST });

export default api;
