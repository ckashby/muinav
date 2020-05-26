import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgo-b046b.firebaseio.com/",
});

export default instance;
