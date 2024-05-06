// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import App from "./App";
import "./assets/reset.css";
import "./index.css";

import { routers } from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {routers.map((item) => (
        <Route path={item.path} key={item.key} element={<item.element />} />
      ))}
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
);
