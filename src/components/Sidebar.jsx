import React from "react";
import { url } from "../URLs";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebarOpen, setSidebar }) => {
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

  return (
    <>
      <main
        className={
          sidebarOpen
            ? "hidden"
            : "flex items-center justify-between w-full h-[10vh]"
        }
      >
        <div className="text-[18px]">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </div>
        <div className="font-bold text-[24px] text-artsy-text-black">
          <button type="button" onClick={() => navigate(url.landingPage)}>
            ARTSY.
          </button>
        </div>
        <ul className="flex-[0.15] max-sm:flex-[0.24] flex items-center justify-between w-full">
          <li>
            <button type="button" onClick={() => navigate(url.search)}>
              <FontAwesomeIcon icon={faSearch} className="text-[18px]" />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate(url.cart)}>
              <FontAwesomeIcon icon={faCartShopping} className="text-[18px]" />
            </button>
          </li>
        </ul>
      </main>

      <main className="flex items-start justify-start min-h-screen w-full py-10">
        <section
          className={
            sidebarOpen
              ? "flex flex-col justify-between h-[50vh] w-full"
              : "hidden"
          }
        >
          <div className="flex flex-row items-center justify-between w-full">
            <div className="font-bold text-[24px] text-artsy-text-black">
              <button type="button" onClick={backToLandingPage}>
                ARTSY.
              </button>
            </div>

            <div className="text-[24px]">
              <button type="button" onClick={removeSidebar}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </div>

          <ul className="flex flex-col items-start justify-between text-[24px] font-medium text-artsy-text-black h-[40vh] w-full">
            <li>
              <button type="button" onClick={backHome}>
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={goToMarketplace}>
                Marketplace
              </button>
            </li>
            <li>
              <button type="button" onClick={goToAuction}>
                Auctions
              </button>
            </li>
            <li>
              <button type="button" onClick={goToDrops}>
                Drop
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Sidebar;
