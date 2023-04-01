import React from "react";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bodyDiv">
      <Sidebar />
      {/* <MainLayout /> */}
      <Outlet />
    </div>
  );
};

export default Body;
