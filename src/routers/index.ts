import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Home = lazy(() => import("@/pages/Home"));

export const routers = [
  {
    path: "/",
    element: Home,
    key: "home",
    name: "首页",
  },
  {
    path: "/login",
    element: Login,
    key: "login",
    hideInMenu: true,
    name: "登录",
  },

  // {
  //   path: "*",
  //   element: NotFound,
  //   key: "notFound",
  //   title: "404",
  // },
];
