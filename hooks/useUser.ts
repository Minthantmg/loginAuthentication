import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../api/user";

const getUserHook = () => {
  return useQuery({
    queryKey: ["get", "users"],
    queryFn: getUserList,
  });
};

export const useUser = () => {
  return {
    getUserHook,
  };
};
