import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components";

const Notification = () => {
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 10 ||
        document.body.scrollTop > 10
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
      <main className="flex items-start justify-center my-[10px] md:my-[15px] px-4 md:px-8">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-medium text-center md:text-left text-[30px] md:text-[48px] text-artsy-text-greyBlack">
            Stay informed at all time!
          </h1>
          <form className="flex flex-col gap-4">
            <label
              htmlFor="name"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Name:
              <input
                type="text"
                name="name"
                id="name"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Email:
              <input
                type="email"
                name="email"
                id="email"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
              />
            </label>
            <label
              htmlFor="number"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Phone Number:
              <input
                type="tel"
                name="number"
                id="number"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-[6px] bg-artsy-text-greyBlack text-artsy-searchGrey md:rounded-[10px] font-medium md:font-semibold text-[18px] md:text-[24px] border min-h-[50px] md:min-h-[60px]"
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
