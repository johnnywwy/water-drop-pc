// import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./utils/apollo";

// import App from "./App";
import "./assets/reset.css";
import "./index.css";

import { routers } from "./routers";
import NotFound from "./pages/NotFound";
import UserInfo from "./components/UserInfo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <UserInfo>
      <BrowserRouter>
        <Routes>
          {routers.map((item) => (
            <Route path={item.path} key={item.key} element={<item.element />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </UserInfo>
  </ApolloProvider>,
);
