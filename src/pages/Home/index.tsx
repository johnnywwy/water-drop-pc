// import { useState, useEffect } from "react";

import { useUserContext } from "@/hooks/userHooks";
import { Button } from "antd";
import { ROUTER_KEY } from "@/routers/menus";
import { useGoTo } from "@/hooks";
import style from "./index.module.less";

/**
 * 首页
 */
const Home = () => {
  const { store } = useUserContext();
  const { go } = useGoTo();
  console.log("store", store);
  return (
    <div className={style.container}>
      我是首页
      <Button onClick={() => go(ROUTER_KEY.MY)}>去个人中心</Button>
      手机号：{store.tel}
    </div>
  );
};

export default Home;
