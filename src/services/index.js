import axios from "axios";
const Api = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND}/`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default Api;