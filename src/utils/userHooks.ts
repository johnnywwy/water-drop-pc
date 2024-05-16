import { useQuery } from "@apollo/client";
import { connectFactory, useAppContext } from "./contextFactory";
import { GET_USER_INFO } from "../graphql/user";
import { IUser } from "./types";

const KEY = "userInfo";
const DEFAULT_VALUE = {};
export const useUserContext = () => useAppContext(KEY);

export const connect = connectFactory(KEY, DEFAULT_VALUE);

export const useGetUserInfo = () => {
  const { setStore } = useUserContext();

  useQuery<{ getUserInfo: IUser }>(GET_USER_INFO, {
    onCompleted: (data) => {
      if (data.getUserInfo) {
        const { email, id, name, tel } = data.getUserInfo;
        setStore({ id, email, name, tel });
        return;
      }
      window.location.href = "/login";
    },
    onError: (error) => {
      console.log("error", error);
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    },
  });
};
