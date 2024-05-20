// import { lazy } from "react";
import Home from "@/pages/Home";
import My from "@/pages/My";
import NotFound from "@/pages/NotFound";

import { ROUTER_KEY } from "./menus";

export const ROUTE_COMPONENT = {
  // 这里添加你的路由组件
  [ROUTER_KEY.HOME]: Home,
  [ROUTER_KEY.MY]: My,
  [ROUTER_KEY.PAGE_404]: NotFound,
};
