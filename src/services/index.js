import axios from "axios";
const Api = axios.create({
  baseURL: `${process.env.APP_BACKEND}/`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  withCredentials: true,
});

export default Api;