interface IRouter {
  path: string;
  name: string;
  icon?: React.ReactNode;
  key?: string;
  hideInMenu?: boolean;
}

export const ROUTER_KEY = {
  HOME: "home",
  MY: "my",
  PAGE_404: "notFound",
};

export const ROUTER_CONFIG: Record<string, IRouter> = {
  [ROUTER_KEY.HOME]: {
    path: "home",
    name: "首页",
  },
  [ROUTER_KEY.MY]: {
    path: "my",
    name: "个人",
  },
  [ROUTER_KEY.PAGE_404]: {
    path: "*",
    hideInMenu: true,
    name: "404",
  },
};

export const routes = Object.keys(ROUTER_CONFIG).map((key) => ({ ...ROUTER_CONFIG[key], key }));
export const getRouterByKey = (key: string) => {
  return routes.find((item) => item.key === key);
};
