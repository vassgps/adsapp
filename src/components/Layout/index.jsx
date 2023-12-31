"use client";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" flex overflow-hidden h-screen ">
      <Sidebar />
      <div className="w-full h-full overflow-hidden">
        <Topbar />
        <div className="p-8 w-full h-[91%] overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
