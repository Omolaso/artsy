import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { url } from "./URLs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SharedLayout = React.lazy(() => import("./pages/SharedLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const MarketPlace = React.lazy(() => import("./pages/Market"));
const SingleMarket = React.lazy(() => import("./pages/SingleMarket"));
const Auction = React.lazy(() => import("./pages/Auction"));
const SingleAuction = React.lazy(() => import("./pages/SingleAuction"));
const Drops = React.lazy(() => import("./pages/Drops"));
const Search = React.lazy(() => import("./pages/Search"));
const SingleSearch = React.lazy(() => import("./pages/SingleSearch"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Notifications = React.lazy(() => import("./pages/Notification"));
const Shipping = React.lazy(() => import("./pages/Shipping"));
const Payment = React.lazy(() => import("./pages/Payment"));
const Completed = React.lazy(() => import("./pages/Completed"));
const ProtectedRoute = React.lazy(() => import("./pages/ProtectedRoute"));

const Routers = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <FontAwesomeIcon icon={faRefresh} className="animate-spin" />
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
            <Route
              path={url.shipping}
              element={
                <ProtectedRoute cartItems={cartItems}>
                  <Shipping cartItems={cartItems} />
                </ProtectedRoute>
              }
            />
            <Route
              path={url.payment}
              element={
                <ProtectedRoute cartItems={cartItems}>
                  <Payment cartItems={cartItems} />
                </ProtectedRoute>
              }
            />
            <Route path={url.notify} element={<Notifications />} />
            <Route path={url.search} element={<Search />} />
            <Route path={url.completed} element={<Completed />} />
          </Route>

          <Route path={url.singleAuction} element={<SingleAuction />} />
          <Route path={url.singleSearch} element={<SingleSearch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
