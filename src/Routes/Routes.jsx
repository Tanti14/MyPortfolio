import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Home } from "../pages/home/home";

export const RoutesDef = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
