import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Footer } from "../components";

const Notification = () => {
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 30 ||
        document.body.scrollTop > 30
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
      <Navbar />
      <main className="flex items-start justify-center my-[10px] md:my-[15px] px-4 md:px-8">
        <div className="flex flex-col gap-10 md:gap-20">
          <h1 className="font-bold md:font-medium text-[30px] md:text-[48px]">
            Stay informed at all time!
          </h1>
          <form className="border flex flex-col gap-6">
            <label htmlFor="name" className="flex flex-col gap-1">
              Name:
              <input
                type="text"
                name="name"
                id="name"
                className="border focus:outline-0"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                className="border focus:outline-0"
              />
            </label>
            <label htmlFor="number" className="flex flex-col gap-1">
              Phone Number:
              <input
                type="tel"
                name="number"
                id="number"
                className="border focus:outline-0"
              />
            </label>

            <button
              type="submit"
              className="max-w-[260px] md:max-w-[420px] mx-auto w-full rounded-[6px] hover:bg-artsy-text-greyBlack hover:text-artsy-searchGrey ease-in-out duration-500 md:rounded-[10px] font-medium text-[22px] md:text-[36px] border min-h-[50px] md:min-h-[86px]"
            >
              Notify Me
            </button>
          </form>
        </div>
      </main>

      {/* Scroll Button */}
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
      {/* Scroll Button */}

      <Footer />
    </>
  );
};

export default Notification;
