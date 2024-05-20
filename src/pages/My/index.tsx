import { useEffect } from "react";
import { Button } from "antd";
import { routes } from "@/routers/menus";
import { useNavigate } from "react-router-dom";

// import style from "./index.module.less";

/**
 *
 */
const My = () => {
  // const [state, setState] = useState();
  useEffect(() => {
    // console.log(state, setState);
    console.log("routes", routes);
  }, []);
  const nav = useNavigate();
  return (
    <div>
      {/* {routes.map(() => (
        <div>123456</div>
      ))} */}
      <Button onClick={() => nav("/home")}>去首页</Button>
    </div>
  );
};

export default My;
