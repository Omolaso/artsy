import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SharedLayout = () => {
  const [sidebarOpen, setSidebar] = useState(false);
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setScrollUpBtn(true);
      } else {
        setScrollUpBtn(false);
      }
    });
  }, [scrollUpBtn]);

  function scrollBackUp() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <>
      <main className="relative select-none">
        <div className="w-full">
          <Navbar sidebarOpen={sidebarOpen} setSidebar={setSidebar} />
        </div>

        <div className={sidebarOpen ? "hidden" : "block min-h-screen w-full"}>
          <Outlet />
        </div>

        <div
          className={
            scrollUpBtn
              ? "fixed right-4 top-[85%] duration-300 ease-in-out z-50"
              : "fixed right-[-100%] top-[85%] duration-300 ease-in-out"
          }
        >
          <button
            title="Back Up"
            type="button"
            onClick={scrollBackUp}
            className="border p-4 rounded-full bg-artsy-text-greyBlack text-artsy-background-white"
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              className="text-[28px] md:text-[32px]"
            />
          </button>
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
