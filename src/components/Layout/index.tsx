// import { useState, useEffect } from "react";

import { MenuDataItem, PageContainer, ProLayout } from "@ant-design/pro-components";
import { useOutlet, Link } from "react-router-dom";
// import { IPropChild } from "@/utils/types";
import { useUserContext } from "@/hooks/userHooks";
import { routes } from "@/routers/menus";
import style from "./index.module.less";

const menuItemRender = (item: MenuDataItem, dom: React.ReactNode) => (
  <Link to={item.path || "/"}>{dom}</Link>
);
/**
 *
 */
const Layout = () => {
  const outLet = useOutlet();

  // const [state, setState] = useState();

  const { store } = useUserContext();

  // useEffect(() => {
  //   console.log(state, setState);
  // }, []);

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
        routes,
      }}
      menuItemRender={menuItemRender}
    >
      <PageContainer>{outLet}</PageContainer>
    </ProLayout>
  );
};

export default Layout;
