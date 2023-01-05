import React from "react";
import location from "../images/utils/location-icon.svg";
import mail from "../images/utils/mail-icon.svg";
const Footer = () => {
  return (
    <main className="flex flex-col gap-4 md:gap-8 p-4 md:p-8">
      <div className="flex flex-col items-start md:items-center justify-start md:justify-center gap-5 h-[250px] md:h-[320px] border-0 md:border border-artsy-text-greyBlack px-0 md:px-4">
        <h1 className="font-normal text-[24px] md:text-[30px] text-artsy-text-greyBlack">
          NEWSLETTER
        </h1>
        <p className="font-normal text-left md:text-center text-[12px] md:text-[32px] text-artsy-text-greyBlack">
          Subscribe to get daily updates on new drops & exciting deals
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 w-full max-w-[640px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ENTER YOUR EMAIL"
            className="px-4 placeholder:text-artsy-text-greyBlack h-[46px] md:h-[60px] text-[10px] md:text-base text-artsy-text-greyBlack font-normal focus:outline-none border border-artsy-text-greyBlack w-full max-w-[340px] md:max-w-[446px]"
            autoComplete="off"
          />
          <button
            type="submit"
            className="font-normal text-[12px] h-[50px] md:h-[60px] md:text-base text-artsy-background-white w-full max-w-[180px] bg-artsy-text-greyBlack"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between w-full max-w-5xl mx-auto h-[180px] md:h-[260px]">
        <h1 className="hidden md:block max-[1000px]:text-[35px] text-[48px] font-semibold flex-[0.3] mt-[50px]">
          ARTSY.
        </h1>
        <div className="flex flex-row flex-1">
          <ul className="hidden md:flex flex-col flex-[0.7] gap-4 max-[1000px]:text-[20px] text-[26px] font-normal">
            <li>Home</li>
            <li>Marketplace</li>
            <li>Auction</li>
            <li>Drops</li>
          </ul>
          <ul className="hidden md:flex flex-col flex-[0.7] gap-4 max-[1000px]:text-[20px] text-[26px] font-normal">
            <li>Blog</li>
            <li>Wallet</li>
            <li>Rates</li>
            <li>High bids</li>
          </ul>
          <ul className="flex flex-col flex-1 gap-4 max-[1000px]:text-[20px] text-[24px] h-[150px] font-normal">
            <li className="block md:hidden font-light text-base">Reach us</li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <img
                  src={mail}
                  alt="mailIcon"
                  className="w-[20px] md:w-[40px] h-[18px] md:h-[30px]"
                />
                <span>artsystudios@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <img
                  src={location}
                  alt="locationIcon"
                  className="w-[18px] md:w-[40px] h-[22px] md:h-[50px]"
                />
                <span>Lagos, Nigeria.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:block self-center font-medium text-[24] opacity-50">
        <h1>Artsystudios © 2022. All Rights Reserved.</h1>
      </div>
    </main>
  );
};

export default Footer;
