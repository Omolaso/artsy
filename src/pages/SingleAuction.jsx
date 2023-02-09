import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { auctionSlide } from "../Products";
import { url } from "../URLs";
import closeIcon from "../images/utils/auctionCloseIcon.svg";

const SingleAuction = () => {
  const [bid, setBid] = useState(""); //bid post request
  const [getBid, setGetBid] = useState([]); //bid get request
  const [reload, setReload] = useState(false); //trigger

  const { auctionId } = useParams();
  const navigate = useNavigate();
  const singleAuction = auctionSlide.find(
    (auction) => auction.id === Number(auctionId)
  );
  const { imgUrl, bidPrice, creator } = singleAuction;

  //post request for bid
  const placeBid = () => {
    if (bid.length > 0) {
      axios.post("http://localhost:3000/posts", { title: bid, id: uuid() });
    } else {
      alert("Can not place empty bid");
    }

    setBid("");
  };

  //get request for bid
  const getPlacedBid = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        // console.log(res.data);
        setGetBid(res.data);
        setReload(!reload);
      })
      .catch((err) => console.log("Error:", err));
  };

  useEffect(() => {
    getPlacedBid();
  }, [reload]);

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
          <h2 className="cursor-text">Live Bid</h2>
        </section>

        <section className="hidden lg:grid grid-cols-2 border h-[75vh]">
          <div
            className="px-4 md:px-8 fixed left-0"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "75%",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="font-semibold text-[48px] text-artsy-linearGradient-brown">
              Current bid: {bidPrice}
            </h1>
          </div>
          <div className="flex flex-col p-4 fixed right-0 w-[50%] h-[75vh]">
            <div
              id="div"
              className="post-msg flex-1 h-[65vh] overflow-y-scroll"
            >
              {getBid &&
                getBid.map((bids) => (
                  <div className="mb-2" key={bids.id}>
                    <p className="font-medium text-[25px]">{bids.title}</p>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
              <i className="font-medium text-[20px] text-artsy-HR-bg">
                Creator: {creator}
              </i>
              <div className="w-full max-w-md border border-artsy-linearGradient-brown flex flex-row items-center p-4 rounded-[25px]">
                <input
                  type="text"
                  value={bid}
                  onKeyUp={(e) => (e.key === "Enter" ? placeBid() : null)}
                  onChange={(e) => setBid(e.target.value)}
                  placeholder="Place a bid"
                  className="text-[22px] placeholder:text-[22px] text-artsy-text-greyBlack focus:outline-0 flex-1"
                />
                <button onClick={() => placeBid()}>
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
              <li className="font-medium text-[13px] flex items-center justify-center bg-artsy-button-blue text-artsy-HR-bg h-[30px] w-[50px]">
                LIVE
              </li>
              <li>
                <button type="button" onClick={() => navigate(url.auction)}>
                  <img
                    src={closeIcon}
                    alt="Cancel"
                    className="h-[15px] w-[15px]"
                  />
                </button>
              </li>
            </ul>
          </div>

          <h1 className="font-bold text-[30px] text-artsy-linearGradient-brown text-center">
            Current bid: {bidPrice}
          </h1>

          <div className="flex flex-col gap-4">
            <div className="text-artsy-background-white min-h-[5vh] max-h-[20vh] overflow-auto">
              {getBid &&
                getBid.map((bids) => (
                  <div className="mb-2" key={bids.id}>
                    <p className="font-normal text-[13px]">{bids.title}</p>
                  </div>
                ))}
            </div>

            <div className="flex flex-row items-center px-4 rounded-[15px] md:rounded-[30px] w-full md:max-w-lg h-[35px] md:h-[55px] border border-artsy-background-white">
              <input
                type="text"
                placeholder="Join conversation..."
                value={bid}
                onKeyUp={(e) => (e.key === "Enter" ? placeBid() : null)}
                onChange={(e) => setBid(e.target.value)}
                className="auction-input px-2 text-[13px] md:text-18px placeholder:text-[13px] md:placeholder:text-[18px] text-artsy-linearGradient-brown focus:outline-0 flex-1 w-full h-full"
              />
              <button
                className="text-[16px] text-artsy-background-white"
                onClick={() => placeBid()}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </section>

        {/* AUCTION MOBILE VIEW ENDS */}

        <section className="hidden lg:mb-2 md:flex flex-row items-center gap-4 w-full max-w-[500px] min-h-[5vh] px-4 md:px-8">
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
