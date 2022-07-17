import axios from "axios";

let url = "";

if (process.env.NODE_ENV === "development") url = "http://localhost:5000/";

export const usersAPI = axios.create({
  baseURL: url,
});
