import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserList, login } from "../api/user";

const getUserHook = () => {
  return useQuery({
    queryKey: ["get", "users"],
    queryFn: getUserList,
  });
};

const getLogin = () => {
  return useMutation({
    mutationKey: ["post", "login"],
    mutationFn: (userData: { email: string; password: string }) =>
      login(userData),
  });
};

export const useUser = () => {
  return {
    getUserHook,
    getLogin,
  };
};
