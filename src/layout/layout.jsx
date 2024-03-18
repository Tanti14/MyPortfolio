import React from "react";
import { Navbar } from "../components/navbar/navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
