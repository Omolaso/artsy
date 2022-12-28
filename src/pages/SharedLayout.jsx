import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedLayout = () => {
  const [sidebarOpen, setSidebar] = useState(false);

  return (
    <main className="px-4 md:px-8">
      <div className="h-[10vh] md:h-[15vh]">
        <Navbar sidebarOpen={sidebarOpen} setSidebar={setSidebar} />
      </div>

      <div className={sidebarOpen ? "hidden" : "block border min-h-screen"}>
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
