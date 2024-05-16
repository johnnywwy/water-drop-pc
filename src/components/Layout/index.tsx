import { useState, useEffect } from "react";

import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { useOutlet } from "react-router-dom";
// import { IPropChild } from "@/utils/types";
import { useUserContext } from "@/hooks/userHooks";
import { routers } from "@/routers";
import style from "./index.module.less";

/**
 *
 */
const Layout = () => {
  const outLet = useOutlet();

  const [state, setState] = useState();

  const { store } = useUserContext();

  useEffect(() => {
    console.log(state, setState);
  }, []);

  return (
    <ProLayout
      layout="mix"
      avatarProps={{
        src: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
        title: store.name,
        size: "small",
      }}
      className={style.layout}
      route={{
        path: "/",
        routes: routers,
      }}
    >
      <PageContainer>{outLet}</PageContainer>
    </ProLayout>
  );
};

export default Layout;
