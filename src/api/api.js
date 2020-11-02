import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-9525.herokuapp.com/",
});

export default instance;
