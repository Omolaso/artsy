import React, { useState, useEffect } from "react";
import { auctionSlide, popularCreators } from "../Products";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../components";

const Auction = () => {
  const [auction, setAuction] = useState([]);
  const [popular, setPopular] = useState([]);
  const [like, setLike] = useState(false);
  const [like2, setLike2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuction(auctionSlide);
    setPopular(popularCreators);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 768, min: 350 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 50,
    },
  };

  return (
    <>
      <main className="flex flex-col gap-10 my-[15px]">
        <h1 className="font-medium text-[20px] md:text-[28px] px-4 md:px-8">
          Here&apos;s an overview of products actively on auction, explore!
        </h1>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          // centerMode={true}
          partialVisible={true}
        >
          {auction &&
            auction.map((item) => (
              <button
                className="flex justify-center h-[300px] md:h-[450px]"
                key={item.id}
                onClick={() => navigate(`/auction/${item.id}`)}
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="h-[250px] md:h-[396px]"
                />
              </button>
            ))}
        </Carousel>

        <section className="flex flex-col gap-8 min-h-screen">
          <h1 className="font-bold text-[20px] md:text-[36px] px-4 md:px-8">
            Top bids from popular creators
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-8">
            {popular &&
              popular.map((items) => (
                <div key={items.id} className="flex flex-col gap-5">
                  <div
                    style={{
                      boxShadow: "0px 0px 9px -1px rgba(0, 0, 0, 0.25)",
                    }}
                    className="flex flex-col gap-5 min-h-[260px] md:min-h-[500px] rounded-[15px] py-4"
                  >
                    {/* OUT OF THE BOX */}
                    <button
                      type="button"
                      className={
                        items.id === 30
                          ? "px-4 md:px-8 self-end flex items-center justify-center fill-artsy-like-red active:outline-0 focus:outline-0 bg-artsy-background-white w-full max-w-[66px] md:max-w-[110px]"
                          : "hidden"
                      }
                      onClick={() => items.id === 30 && setLike(!like)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          items.id === 30 && like ? "artsy-like-red" : "none"
                        }
                        viewBox="0 0 24 24"
                        strokeWidth={0.8}
                        stroke={
                          items.id === 30 && like ? "none" : "currentColor"
                        }
                        onClick={() => items.id === 30 && setLike(!like)}
                        className="w-[35px] md:w-[45px] h-[35px] md:h-[50px] border p-1 md:p-2 rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    {/* FALLING APART */}
                    <button
                      type="button"
                      className={
                        items.id === 31
                          ? "px-4 md:px-8 self-end flex items-center justify-center fill-artsy-like-red active:outline-0 focus:outline-0 bg-artsy-background-white w-full max-w-[66px] md:max-w-[110px]"
                          : "hidden"
                      }
                      onClick={() => items.id === 31 && setLike2(!like2)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          items.id === 31 && like2 ? "artsy-like-red" : "none"
                        }
                        viewBox="0 0 24 24"
                        strokeWidth={0.8}
                        stroke={
                          items.id === 31 && like2 ? "none" : "currentColor"
                        }
                        className="w-[35px] md:w-[45px] h-[35px] md:h-[50px] border p-1 md:p-2 rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <img
                      src={items.imgUrl}
                      alt={items.name}
                      className="h-[184px] md:h-[280px]"
                    />

                    <div className="flex flex-row items-center justify-between w-full px-4 md:px-8">
                      <h1 className="font-bold text-[20px] md:text-[40px]">
                        {items.name}
                      </h1>
                      <h1 className="block md:hidden font-bold text-[20px]">
                        {items.currentBid}
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:gap-5">
                    <h1 className="flex items-center px-4 md:px-8">
                      <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                        Creator:
                      </span>
                      <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                        {items.creator}
                      </span>
                    </h1>

                    <h1 className="flex items-center px-4 md:px-8">
                      <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                        Date:
                      </span>
                      <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                        {items.date}
                      </span>
                    </h1>

                    <h1 className="hidden lg:flex items-center px-4 md:px-8">
                      <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                        Current Bid:
                      </span>
                      <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                        {items.bidPrice}
                      </span>
                    </h1>

                    <div className="flex flex-col items-start lg:items-center lg:justify-between gap-4 lg:flex-row min-h-[85px] lg:min-h-[145px] bg-[#F7F4F4] py-3 px-4 md:px-8">
                      <h1 className="flex lg:hidden flex-row flex-1 items-center gap-3">
                        <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                          Highest bid:
                        </span>
                        <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue">
                          {items.highestBid}
                        </span>
                      </h1>

                      <h1 className="hidden lg:flex flex-col flex-1">
                        <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                          Highest bid
                        </span>
                        <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue">
                          {items.highestBid}
                        </span>
                      </h1>

                      <button
                        type="button"
                        onClick={() => navigate(`/auction/${items.id}`)}
                        className="w-full max-w-[214px] md:max-w-[315px] h-[55px] md:h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
                      >
                        Place bid
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Auction;
