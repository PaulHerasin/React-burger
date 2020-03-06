import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-name-42b57.firebaseio.com/"
});

export default instance;
