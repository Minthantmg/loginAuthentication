import { axiosInstance } from "../utils/axiosInstance";

export const getUserList = async () => {
  try {
    const res = await axiosInstance.get("/users");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const login = async (userData: { email: string; password: string }) => {
  try {
    const res = await axiosInstance.post("/login", userData);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Authentication Failed: " + res.statusText);
    }
  } catch (e) {
    throw e;
  }
};
