import React, { useState, useEffect } from "react";
import { url } from "../URLs";
import { useNavigate, Link, useLocation } from "react-router-dom";
import cartIcon from "../images/utils/cartIcon.svg";
import searchIcon from "../images/utils/searchIcon.svg";
import notifyIcon from "../images/utils/notifyIcon.svg";
import { Sidebar } from "../components";
import { useSelector } from "react-redux";

const Navbar = ({ sidebarOpen, setSidebar }) => {
  const { cartQuantity } = useSelector((store) => store.cart);
  const [fixedNav, setFixedNav] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const backToLandingPage = () => {
    navigate(url.landingPage);
  };
  const goToCart = () => {
    navigate(url.cart);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 10 ||
        document.body.scrollTop > 10
      ) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  }, [fixedNav]);

  return (
    <main className="flex items-center justify-center md:min-h-[12vh] w-full relative">
      <section
        className={
          fixedNav
            ? "hidden md:flex items-center justify-between w-full md:px-8 shadow-sm duration-500 ease-in-out shadow-artsy-HR-bg min-h-[10vh] lg:min-h-[11vh] bg-artsy-background-white z-50 fixed top-0"
            : "hidden md:flex items-center justify-between w-full md:px-8 shadow-none duration-500 ease-in-out shadow-artsy-HR-bg min-h-[10vh] lg:min-h-[11vh] bg-artsy-background-white z-50 fixed top-0"
        }
      >
        <div className="font-bold text-[32px] max-[1000px]:text-[28px] text-artsy-text-black">
          <button type="button" onClick={() => backToLandingPage()}>
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
          <li className="relative cursor-pointer" onClick={() => goToCart()}>
            <button type="button" className=" focus:outline-0">
              <img
                src={cartIcon}
                alt="cart"
                className="max-[1000px]:w-[20px] w-[28px] h-[28px]"
              />
            </button>
            <p className="absolute top-[-15px] right-[-5px] text-[24px] text-artsy-like-red font-semibold">
              {cartQuantity}
            </p>
          </li>
          <li>
            <button
              type="button"
              className=" focus:outline-0"
              onClick={() => navigate(url.notify)}
            >
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
