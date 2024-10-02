import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="w-full h-full ml-16 md:ml-56 bg-gray-100 min-h-screen">
            <Header />
                <div className="p-6">
                    <Outlet />
                </div>
            </div>


        </div>
    </div>
  );
}

export default Layout;
