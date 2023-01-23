import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { marketPlaceGrid } from "../Products";
import { Footer } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SingleMarket = () => {
  const [description, setDescription] = useState(true);
  const [like, setLike] = useState(false);
  const { Id } = useParams();
  const navigate = useNavigate();
  const singleProduct = marketPlaceGrid.find(
    (product) => product.id === Number(Id)
  );

  // console.log(singleProduct);
  const { nameLowercase, url, madeIn, totalViews, creator, category, price } =
    singleProduct;

  return (
    <>
      <main className="my-[10px] md:my-[15px] px-4 md:px-8">
        <div className="flex flex-col gap-y-0 md:gap-y-10">
          <section className="md:self-start self-center mb-3 font-medium md:text-[24px] text-[18px] flex items-center gap-x-2">
            <button
              type="button"
              className=" text-artsy-HR-bg hover:underline"
              onClick={() => navigate("/marketplace")}
            >
              Marketplace
            </button>
            <span>›</span>
            <h2 className=" cursor-text">{nameLowercase}</h2>
          </section>

          <section className="flex md:flex-row flex-col md:items-start items-center justify-between border-t md:border border-artsy-text-greyBlack min-h-[800px] lg:min-h-[1020px] w-full">
            <div className="flex-1 flex items-center justify-center p-4 md:min-h-[1020px] mt-5 md:mt-0 border-r-0 md:border-r-2 border-r-artsy-text-greyBlack w-full">
              <img
                src={url}
                alt={nameLowercase}
                className="md:min-h-[926px] h-full w-full"
              />
            </div>

            <div className="flex-1 flex flex-col gap-y-5 md:gap-y-10 w-full">
              <div className="flex flex-row items-center justify-between w-full h-[50px] md:h-[150px] border-b-0 md:border-b border-b-artsy-text-greyBlack px-4">
                <h1 className="text-[16px] md:text-[30px] lg:text-[35px] xl:text-[46px] font-medium md:font-bold flex-1">
                  {nameLowercase}
                </h1>
                <h3 className="text-[16px] md:text-[26px] lg:text-[30px] xl:text-[40px] font-medium">
                  {price}
                </h3>
              </div>

              <div className="flex flex-col gap-y-4 px-4">
                <h1 className="flex items-center">
                  <span className="font-normal text-[20px] md:text-[30px] text-[#616161]">
                    Creator:
                  </span>
                  <span className="font-medium text-[20px] md:text-[30px] text-artsy-linearGradient-blue ml-2 align-end">
                    {creator}
                  </span>
                </h1>

                <small className="font-normal text-[18px] md:text-[24px]">
                  {madeIn}
                </small>

                <h1 className="flex items-center">
                  <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                    Category:
                  </span>
                  <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                    {category}
                  </span>
                </h1>

                <h1 className="flex items-center">
                  <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
                    Total views:
                  </span>
                  <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                    {totalViews}
                  </span>
                </h1>
              </div>

              <div className="flex flex-col gap-4 px-4">
                <div className="flex flex-row items-center justify-start gap-8 font-medium text-[30px] md:text-[36px]">
                  <button type="button"> - </button>
                  <h1> 0 </h1>
                  <button type="button"> + </button>
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <button
                    type="button"
                    className="w-full max-w-[214px] md:max-w-[315px] h-[55px] md:h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center h-[55px] md:h-[76px] fill-artsy-like-red active:outline-0 focus:outline-0 bg-artsy-background-white w-full max-w-[66px] md:max-w-[110px] border"
                    onClick={() => setLike(!like)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={like ? "artsy-like-red" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={0.8}
                      stroke={like ? "none" : "currentColor"}
                      className="w-[35px] md:w-[80px] h-[35px] md:h-[80px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className={
                  description
                    ? "px-4 border-y md:border-t mt-5 md:mt-0"
                    : "px-4 border-y mt-5 md:mt-0"
                }
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full min-h-[50px] focus:outline-0"
                  onClick={() => setDescription(!description)}
                >
                  <span className="font-medium text-[18px]">Description</span>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={
                      description
                        ? "rotate-0 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                        : "rotate-180 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                    }
                  />
                </button>
                <div className={description ? "block mb-4" : "hidden"}>
                  <p className="font-normal text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid esse aspernatur deserunt tempora doloribus libero
                    accusamus in. Harum, molestiae perferendis voluptatum nemo
                    labore minima, dolores assumenda id rem ratione ea?
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleMarket;
