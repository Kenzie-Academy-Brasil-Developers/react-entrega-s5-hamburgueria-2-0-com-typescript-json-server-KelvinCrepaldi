import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-app.herokuapp.com",
});

export default api;
