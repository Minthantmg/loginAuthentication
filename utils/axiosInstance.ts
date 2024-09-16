import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://login-auth-api.vercel.app/api/v1/",
});
