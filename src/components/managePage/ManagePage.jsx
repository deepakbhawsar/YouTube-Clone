import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const ManagePage = () => {
  return (
    <div>
      <>
        <Sidebar />
        <Outlet />
      </>
    </div>
  );
};

export default ManagePage;
