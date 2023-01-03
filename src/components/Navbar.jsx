import React, { useState } from "react";
import { url } from "../URLs";
import { useNavigate } from "react-router-dom";
import cartIcon from "../images/utils/cartIcon.svg";
import searchIcon from "../images/utils/searchIcon.svg";
import notifyIcon from "../images/utils/notifyIcon.svg";
import { Sidebar } from "../components";

const Navbar = ({ sidebarOpen, setSidebar }) => {
  const [homeNavActive, setHomeNavActive] = useState(false);
  const [marketNavActive, setMarketNavActive] = useState(false);
  const [auctionNavActive, setAuctionNavActive] = useState(false);
  const [dropsNavActive, setDropsNavActive] = useState(false);
  const navigate = useNavigate();

  const backToLandingPage = () => {
    navigate(url.landingPage);
    setHomeNavActive(false);
    setMarketNavActive(false);
    setAuctionNavActive(false);
    setDropsNavActive(false);
  };

  const backHome = () => {
    navigate(url.home);
    setHomeNavActive(true);
    setMarketNavActive(false);
    setAuctionNavActive(false);
    setDropsNavActive(false);
  };

  const goToMarketplace = () => {
    navigate(url.market);
    setHomeNavActive(false);
    setMarketNavActive(true);
    setAuctionNavActive(false);
    setDropsNavActive(false);
  };

  const goToAuction = () => {
    navigate(url.auction);
    setHomeNavActive(false);
    setAuctionNavActive(true);
    setMarketNavActive(false);
    setDropsNavActive(false);
  };

  const goToDrops = () => {
    navigate(url.drops);
    setHomeNavActive(false);
    setDropsNavActive(true);
    setMarketNavActive(false);
    setAuctionNavActive(false);
  };

  const goToCart = () => {
    navigate(url.cart);
    setHomeNavActive(false);
    setDropsNavActive(false);
    setMarketNavActive(false);
    setAuctionNavActive(false);
  };

  return (
    <main className="flex items-center justify-center md:h-[15vh] w-full ">
      <section className="hidden md:flex items-center justify-between w-full md:px-8">
        <div className="font-bold text-[32px] max-[1000px]:text-[28px] text-artsy-text-black">
          <button type="button" onClick={backToLandingPage}>
            ARTSY.
          </button>
        </div>
        <ul className="flex-[0.55] flex items-center justify-between text-[24px] max-[1000px]:text-[20px] text-artsy-text-black w-full">
          <li>
            <button
              type="button"
              className={homeNavActive ? "font-normal" : "font-normal"}
              onClick={backHome}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={marketNavActive ? "font-normal" : "font-normal"}
              onClick={goToMarketplace}
            >
              Marketplace
            </button>
          </li>
          <li>
            <button
              type="button"
              className={auctionNavActive ? "font-normal" : "font-normal"}
              onClick={goToAuction}
            >
              Auctions
            </button>
          </li>
          <li>
            <button
              type="button"
              className={dropsNavActive ? "font-normal" : "font-normal"}
              onClick={goToDrops}
            >
              Drop
            </button>
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
            <button type="button">
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
