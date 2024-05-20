import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Home = lazy(() => import("@/pages/Home"));

interface IRouter {
  path: string;
  name: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  icon?: React.ReactNode;
  key?: string;
  hideInMenu?: boolean;
}

export const ROUTER_KEY = {
  HOME: "home",
  MY: "login",
  PAGE_404: "notFound",
};

export const ROUTER_CONFIG: Record<string, IRouter> = {
  [ROUTER_KEY.HOME]: {
    path: "/",
    element: Home,
    // key: "home",
    name: "首页",
  },
  [ROUTER_KEY.MY]: {
    path: "/my",
    element: Home,
    // key: "login",
    hideInMenu: true,
    name: "个人",
  },
  [ROUTER_KEY.PAGE_404]: {
    path: "*",
    element: Home,
    // key: "notFound",
    name: "404",
  },
};

export const routers: IRouter[] = [
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

export const routes = Object.values(ROUTER_CONFIG);
export const getRouterByKey = (key: string) => {
  return routes.find((item) => item.key === key);
};
