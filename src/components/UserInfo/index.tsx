// import { useEffect } from "react";
import { IPropChild } from "../../utils/types";
import { connect, useGetUserInfo } from "../../utils/userHooks";

// import style from "./index.module.less";

/**
 * 获取用户信息组件
 */
const UserInfo = ({ children }: IPropChild) => {
  useGetUserInfo();
  return <div>{children}</div>;
};

export default connect(UserInfo);
