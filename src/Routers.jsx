import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { url } from "./URLs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const SharedLayout = React.lazy(() => import("./pages/SharedLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const MarketPlace = React.lazy(() => import("./pages/Market"));
const SingleMarket = React.lazy(() => import("./pages/SingleMarket"));
const Auction = React.lazy(() => import("./pages/Auction"));
const Drops = React.lazy(() => import("./pages/Drops"));
const Search = React.lazy(() => import("./pages/Search"));
const Cart = React.lazy(() => import("./pages/Cart"));

const Routers = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <FontAwesomeIcon icon={faReact} className="animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path={url.landingPage} element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path={url.home} element={<Home />} />
            <Route path={url.market} element={<MarketPlace />} />
            <Route path={url.singleMarket} element={<SingleMarket />} />
            <Route path={url.auction} element={<Auction />} />
            <Route path={url.drops} element={<Drops />} />
            <Route path={url.cart} element={<Cart />} />
          </Route>

          <Route path={url.search} element={<Search />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
