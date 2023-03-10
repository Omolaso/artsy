import React, { useState, useEffect } from "react";
import { url } from "../URLs";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import closeIcon from "../images/utils/closeIcon.svg";
import cartIcon from "../images/utils/cartIcon.svg";
import searchIcon from "../images/utils/searchIcon.svg";
import { useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen, setSidebar }) => {
  const [fixedNav, setFixedNav] = useState(false);
  const { cartQuantity } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  function toggleSidebar() {
    setSidebar(!sidebarOpen);
  }
  function removeSidebar() {
    setSidebar(false);
  }

  const backToLandingPage = () => {
    navigate(url.landingPage);
    setSidebar(!sidebarOpen);
  };

  const backHome = () => {
    navigate(url.home);
    setSidebar(!sidebarOpen);
  };

  const goToMarketplace = () => {
    navigate(url.market);
    setSidebar(!sidebarOpen);
  };

  const goToAuction = () => {
    navigate(url.auction);
    setSidebar(!sidebarOpen);
  };

  const goToDrops = () => {
    navigate(url.drops);
    setSidebar(!sidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 3 ||
        document.body.scrollTop > 3
      ) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  }, [fixedNav]);

  return (
    <main className="w-full h-[10vh] overflow-y-hidden relative">
      <section
        className={
          sidebarOpen
            ? "hidden"
            : fixedNav
            ? "flex items-center justify-between w-full min-h-[10vh] px-4 bg-artsy-background-white shadow-sm duration-500 ease-in-out shadow-artsy-HR-bg fixed top-0 z-50"
            : "flex items-center justify-between w-full min-h-[10vh] px-4 bg-artsy-background-white shadow-none duration-500 ease-in-out shadow-artsy-HR-bg fixed top-0 z-50"
        }
      >
        <button onClick={() => toggleSidebar()}>
          <FontAwesomeIcon icon={faBars} className="text-[20px]" />
        </button>
        <div className="font-bold text-[24px] text-artsy-text-black">
          <button type="button" onClick={() => navigate(url.landingPage)}>
            ARTSY.
          </button>
        </div>
        <ul className="flex-[0.12] max-sm:flex-[0.24] flex items-center justify-between w-full">
          <li>
            <button type="button" onClick={() => navigate(url.search)}>
              <img
                src={searchIcon}
                alt="search"
                className="w-[16px] h-[16px]"
              />
            </button>
          </li>
          <li className="relative">
            <button type="button" onClick={() => navigate(url.cart)}>
              <img src={cartIcon} alt="cart" className="w-[16px] h-[16px]" />
            </button>
            <p className="absolute top-[-8px] right-[-5px] text-[16px] text-artsy-like-red font-semibold">
              {cartQuantity}
            </p>
          </li>
        </ul>
      </section>

      <section className="flex items-start justify-start min-h-screen w-full py-8">
        <div
          className={
            sidebarOpen
              ? "fixed left-0 duration-500 ease-in-out flex flex-col justify-between h-[50vh] w-full px-4"
              : "fixed left-[-100%] duration-100 ease-in-out flex flex-col justify-between h-[50vh] w-full px-4"
          }
        >
          <div className="flex flex-row items-center justify-between w-full">
            <div className="font-bold text-[24px] text-artsy-text-black">
              <button type="button" onClick={() => backToLandingPage()}>
                ARTSY.
              </button>
            </div>

            <div className="text-[24px]">
              <button type="button" onClick={() => removeSidebar()}>
                <img src={closeIcon} alt="closeIcon" />
              </button>
            </div>
          </div>

          <ul className="flex flex-col items-start justify-between text-[24px] font-medium text-artsy-text-greyBlack h-[40vh] w-full">
            <li>
              <button type="button" onClick={() => backHome()}>
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => goToMarketplace()}>
                Marketplace
              </button>
            </li>
            <li>
              <button type="button" onClick={() => goToAuction()}>
                Auctions
              </button>
            </li>
            <li>
              <button type="button" onClick={() => goToDrops()}>
                Drop
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
