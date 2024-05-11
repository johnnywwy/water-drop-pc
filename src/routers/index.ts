import { lazy } from "react";

// import Login from "../pages/Login";
// import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export const routers = [
  {
    path: "/login",
    element: Login,
    key: "login",
    title: "登录",
  },
  {
    path: "/home",
    element: Home,
    key: "home",
    title: "首页",
  },
  // {
  //   path: "*",
  //   element: NotFound,
  //   key: "notFound",
  //   title: "404",
  // },
];
