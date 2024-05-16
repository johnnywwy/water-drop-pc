// import { useState, useEffect } from "react";
import { Button, Result } from "antd";

// import style from "./index.module.less";

/**
 * 404页面
 */
const NotFound = () => {
  // const [state, setState] = useState();
  // useEffect(() => {
  //   console.log(state, setState);
  // }, []);
  return (
    <Result
      status="404"
      title="404"
      subTitle="您访问的页面不存在"
      extra={<Button type="primary">返回首页</Button>}
    />
  );
};

export default NotFound;
