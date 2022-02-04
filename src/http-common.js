import axios from "axios";

export default axios.create({
  baseURL: "http://10.244.0.157:4007",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});