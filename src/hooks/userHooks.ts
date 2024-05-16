import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "@/graphql/user";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser } from "@/utils/types";
import { connectFactory, useAppContext } from "@/utils/contextFactory";

const KEY = "userInfo";
const DEFAULT_VALUE = {};
export const useUserContext = () => useAppContext(KEY);

export const connect = connectFactory(KEY, DEFAULT_VALUE);

export const useGetUserInfo = () => {
  const { setStore } = useUserContext();

  const location = useLocation();
  const nav = useNavigate();
  const { loading } = useQuery<{ getUserInfo: IUser }>(GET_USER_INFO, {
    onCompleted: (data) => {
      if (data.getUserInfo) {
        const { email, id, name, tel } = data.getUserInfo;
        setStore({ id, email, name, tel });

        if (location.pathname.startsWith("/login")) {
          nav("/");
        }

        return;
      }

      if (location.pathname !== "/login") {
        console.log("为啥");

        nav(`/login?orginUrl=${location.pathname}`);
      }
    },
    onError: (error) => {
      console.log("error", error);
      if (location.pathname !== "/login") {
        nav(`/login?orginUrl=${location.pathname}`);
      }
    },
  });

  return { loading };
};
