// import { useState, useEffect } from "react";

import style from "./index.module.less";
import { useUserContext } from "../../utils/userHooks";

/**
 * 首页
 */
const Home = () => {
  const { store } = useUserContext();
  console.log("store", store);
  return <div className={style.container}>手机号：{store.tel}</div>;
};

export default Home;
