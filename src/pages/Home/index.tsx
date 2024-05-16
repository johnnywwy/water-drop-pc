// import { useState, useEffect } from "react";

import { useUserContext } from "@/utils/userHooks";
import style from "./index.module.less";

/**
 * 首页
 */
const Home = () => {
  const { store } = useUserContext();
  console.log("store", store);
  return <div className={style.container}>手机号：{store.tel}</div>;
};

export default Home;
