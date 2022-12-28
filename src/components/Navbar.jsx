import React from "react";
import { url } from "../URLs";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../components";

const Navbar = ({ sidebarOpen, setSidebar }) => {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center md:h-[15vh] w-full">
      <section className="hidden md:flex items-center justify-between w-full">
        <div className="font-bold text-[32px] max-[1000px]:text-[28px] text-artsy-text-black">
          <button type="button" onClick={() => navigate(url.landingPage)}>
            ARTSY.
          </button>
        </div>
        <ul className="flex-[0.5] flex items-center justify-between text-[24px] max-[1000px]:text-[20px] text-artsy-text-black w-full">
          <li>
            <button
              type="button"
              className="active:underline focus:underline focus:font-medium font-normal"
              onClick={() => navigate(url.home)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="active:underline focus:underline focus:font-medium font-normal"
              onClick={() => navigate(url.market)}
            >
              Marketplace
            </button>
          </li>
          <li>
            <button
              type="button"
              className="active:underline focus:underline focus:font-medium font-normal"
              onClick={() => navigate(url.auction)}
            >
              Auctions
            </button>
          </li>
          <li>
            <button
              type="button"
              className="active:underline focus:underline focus:font-medium font-normal"
              onClick={() => navigate(url.drops)}
            >
              Drop
            </button>
          </li>
        </ul>
        <ul className="flex-[0.15] flex items-center justify-between w-full">
          <li>
            <button type="button" onClick={() => navigate(url.search)}>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-[24px] max-[1000px]:text-[20px]"
              />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate(url.cart)}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[24px] max-[1000px]:text-[20px]"
              />
            </button>
          </li>
          <li>
            <button type="button">
              <FontAwesomeIcon
                icon={faBell}
                className="text-[24px] max-[1000px]:text-[20px]"
              />
            </button>
          </li>
        </ul>
      </section>

      <section className="block md:hidden w-full">
        <Sidebar sidebarOpen={sidebarOpen} setSidebar={setSidebar} />
      </section>
    </main>
  );
};

export default Navbar;
