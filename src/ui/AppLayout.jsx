import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-4  w-full h-screen">
      <Sidebar />
      <div className=" col-span-3 ">
        <Header />
        <div className="mx-auto max-w-screen-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;