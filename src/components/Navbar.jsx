import React from "react";
import { url } from "../URLs";
import { useNavigate, Link, useLocation } from "react-router-dom";
import cartIcon from "../images/utils/cartIcon.svg";
import searchIcon from "../images/utils/searchIcon.svg";
import notifyIcon from "../images/utils/notifyIcon.svg";
import { Sidebar } from "../components";

const Navbar = ({ sidebarOpen, setSidebar }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const backToLandingPage = () => {
    navigate(url.landingPage);
  };
  const goToCart = () => {
    navigate(url.cart);
  };

  return (
    <main className="flex items-center justify-center md:h-[12vh] w-full">
      <section className="hidden md:flex items-center justify-between w-full md:px-8">
        <div className="font-bold text-[32px] max-[1000px]:text-[28px] text-artsy-text-black">
          <button type="button" onClick={backToLandingPage}>
            ARTSY.
          </button>
        </div>
        <ul className="flex-[0.55] flex items-center justify-between text-[24px] max-[1000px]:text-[20px] text-artsy-text-black w-full">
          <li>
            <Link
              to={url.home}
              className={
                pathname === url.home ? "underline font-medium" : "font-normal"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={url.market}
              className={
                pathname === url.market
                  ? "underline font-medium"
                  : "font-normal"
              }
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              to={url.auction}
              className={
                pathname === url.auction
                  ? "underline font-medium"
                  : "font-normal"
              }
            >
              Auction
            </Link>
          </li>
          <li>
            <Link
              to={url.drops}
              className={
                pathname === url.drops ? "underline font-medium" : "font-normal"
              }
            >
              Drop
            </Link>
          </li>
        </ul>
        <ul className="flex-[0.15] flex items-center justify-between w-full">
          <li>
            <button type="button" onClick={() => navigate(url.search)}>
              <img
                src={searchIcon}
                alt="search"
                className="max-[1000px]:w-[20px] w-[28px] h-[28px]"
              />
            </button>
          </li>
          <li>
            <button type="button" onClick={goToCart}>
              <img
                src={cartIcon}
                alt="cart"
                className="max-[1000px]:w-[20px] w-[28px] h-[28px]"
              />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate(url.notify)}>
              <img
                src={notifyIcon}
                alt="notification"
                className="max-[1000px]:w-[20px] w-[28px] h-[28px]"
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
