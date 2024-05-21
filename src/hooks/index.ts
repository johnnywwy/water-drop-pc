import { getRouterByKey, routes } from "@/routers/menus";
import { useEffect, useMemo } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

/*
 * 设置网页标题
 * @param {string} title 标题
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

/**
 * 路由跳转
 * @param {string} pageKey 路由key
 * @param {Record<string, string | number>} params 路由参数
 */
export const useGoTo = () => {
  const nav = useNavigate();
  const back = () => nav(-1);
  const go = (pageKey: string, params?: Record<string, string | number>) => {
    console.log("pageKey", pageKey);

    if (!pageKey) {
      nav("/");
      return;
    }
    const route = getRouterByKey(pageKey);
    if (route && route?.path) {
      if (!params) {
        nav(`/${route.path}`);
        return;
      }
      const url = route.path.replace(/\/:(\w+)/g, (_, $1) => `/${params[$1]}`);
      console.log("url", url);
      nav(`/${url}`);
      // if (Object.keys(params).length > 0) nav(route.path, { state: params });
    }
  };
  return { back, go };
};

/**
 * 获取当前 URL 匹配的路由
 * @returns {void}
 */
export const useMatchedRouter = () => {
  const r = useLocation();
  const route = useMemo(
    () => routes.find((item) => matchPath(item.path, r.pathname)),
    [r.pathname],
  );
  return route;
};
