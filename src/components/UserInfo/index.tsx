// import { useEffect } from "react";
import { IPropChild } from "@/utils/types";
import { connect, useGetUserInfo } from "@/hooks/userHooks";
import { Spin } from "antd";

import style from "./index.module.less";

/**
 * 获取用户信息组件
 */
const UserInfo = ({ children }: IPropChild) => {
  const { loading } = useGetUserInfo();
  return (
    <Spin spinning={loading}>
      <div className={style.wrapper}>{children}</div>
    </Spin>
  );
};

export default connect(UserInfo);
