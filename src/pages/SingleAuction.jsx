import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { auctionSlide } from "../Products";
import { url } from "../URLs";
import closeIcon from "../images/utils/auctionCloseIcon.svg";

const SingleAuction = () => {
  const { auctionId } = useParams();
  const navigate = useNavigate();
  const singleAuction = auctionSlide.find(
    (auction) => auction.id === Number(auctionId)
  );
  // console.log(singleAuction);
  const { imgUrl, bidPrice, creator } = singleAuction;

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col min-h-screen w-full gap-3">
        <section className="hidden md:flex flex-row items-center justify-start text-[24px] font-medium gap-2 min-h-[10vh] px-4 md:px-8">
          <button
            type="button"
            className=" text-artsy-HR-bg hover:underline"
            onClick={() => navigate(url.auction)}
          >
            Auction
          </button>
          <span>›</span>
          <h2 className=" cursor-text">Live Bid</h2>
        </section>

        <section className="hidden lg:grid grid-cols-2 border min-h-[75vh]">
          <div
            className="px-4 md:px-8"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="font-semibold text-[48px] text-artsy-black">
              Current bid: {bidPrice}
            </h1>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex-1">POSTS</div>
            <div className="flex flex-col gap-3">
              <i className="font-medium text-[20px] text-artsy-HR-bg">
                Creator: {creator}
              </i>
              <div className="styled-border flex flex-row items-center p-4 rounded-[25px]">
                <input
                  type="text"
                  placeholder="Place a bid"
                  className="text-[22px] placeholder:text-[22px] text-artsy-text-greyBlack focus:outline-0 flex-1"
                />
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AUCTION MOBILE VIEW */}
        <section
          className="flex flex-col justify-between lg:hidden min-h-screen md:min-h-[75vh] p-4 md:p-8"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <i className="font-medium text-[16px] text-artsy-background-white">
              Creator: {creator}
            </i>
            <ul className="flex flex-row items-center gap-4">
              <li className="flex items-center justify-center bg-artsy-button-blue text-artsy-HR-bg h-[30px] w-[50px]">
                LIVE
              </li>
              <li>
                <button type="button" onClick={() => navigate(url.auction)}>
                  <img src={closeIcon} alt="Cancel" />
                </button>
              </li>
            </ul>
          </div>

          <h1 className="font-bold text-[30px] text-artsy-background-white text-center">
            Current bid: {bidPrice}
          </h1>

          <div className="flex flex-row items-center px-4 rounded-[15px] w-full max-w-[305px] h-[35px]">
            <input
              type="text"
              placeholder="Join conversation"
              className="text-[11px] placeholder:text-[11px] bg- text-artsy-text-greyBlack focus:outline-0 flex-1"
            />
            <button>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </section>

        {/* AUCTION MOBILE VIEW ENDS */}

        <section className="hidden lg:mb-4 md:flex flex-row items-center gap-4 w-full max-w-[500px] min-h-[5vh] px-4 md:px-8">
          <h1 className="text-[36px] font-medium">See upcoming drops</h1>
          <button type="button" onClick={() => navigate(url.drops)}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="border p-3 rounded-full text-[36px] font-medium"
            />
          </button>
        </section>
      </div>
    </main>
  );
};

export default SingleAuction;
