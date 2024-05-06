// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "../public/vite.svg";
// import { Button } from "antd";
// import Login from "@/pages/Login";
import Login from "./pages/Login";

import styles from "./App.module.less";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Login />
      {/* <div className={styles.card}>123</div> */}
    </div>
  );
}

export default App;
