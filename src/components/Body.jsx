import React from "react";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";

const Body = () => {
  return (
    <div className="bodyDiv">
      <Sidebar />
      <MainLayout />
    </div>
  );
};

export default Body;
