import { useState, useEffect } from "react";

import style from "./index.module.less";

/**
 * 首页
 */
const Home = () => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return <div className={style.container}>首页</div>;
};

export default Home;
