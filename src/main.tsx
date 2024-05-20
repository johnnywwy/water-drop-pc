// import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "./utils/apollo";

// import App from "./App";
import "./assets/reset.css";
import "./index.css";

import { routes } from "./routers/menus";
import NotFound from "./pages/NotFound";
import UserInfo from "./components/UserInfo";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { ROUTE_COMPONENT } from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <UserInfo>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {routes.map((item) => {
              const Component = ROUTE_COMPONENT[item.key];
              return <Route path={item.path} key={item.key} element={<Component />} />;
            })}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <App /> */}
      </UserInfo>
    </BrowserRouter>
  </ApolloProvider>,
);
