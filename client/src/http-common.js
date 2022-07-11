//Setting default api address for axios service

import axios from "axios";

export default axios.create({
  baseURL: "https://recipe-app-mern.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
