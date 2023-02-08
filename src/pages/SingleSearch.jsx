import React from "react";
import { allProducts } from "../Products";
import { useParams, useNavigate } from "react-router-dom";
import { addItem } from "../reduxSlice/CartSlice";
import { useDispatch } from "react-redux";

const SingleSearch = () => {
  const dispatch = useDispatch();
  const { searchId } = useParams();
  const navigate = useNavigate();
  const singleSearched = allProducts.find(
    (product) => product.id === Number(searchId)
  );

  const { url, imgUrl, name, creator, size } = singleSearched;
  return (
    <main className="flex flex-col gap-0 md:gap-4 px-4 md:px-8 text-artsy-text-greyBlack">
      <section className="flex flex-row items-center justify-start text-[16px] md:text-[24px] font-medium gap-2 min-h-[10vh]">
        <button
          type="button"
          className=" text-artsy-HR-bg hover:underline"
          onClick={() => navigate("/search")}
        >
          Search
        </button>
        <span>›</span>
        <h2 className="cursor-text">{name}</h2>
      </section>

      <section className="flex flex-col lg:flex-row items-center w-full gap-8">
        <div className="flex items-start justify-start flex-[0.6] self-start">
          <img src={url || imgUrl} alt={name} className="w-full h-full" />
        </div>

        <div className="flex-1 flex flex-col gap-3 font-medium text-[30px] md:text-[36px] mb-4">
          <h1 className="flex items-center">
            <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
              Name:
            </span>
            <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
              {name}
            </span>
          </h1>

          <h1 className="flex items-center">
            <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
              Creator:
            </span>
            <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
              {creator}
            </span>
          </h1>

          <h1 className="flex items-center">
            <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
              Size:
            </span>
            <span className="font-medium text-[20px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
              {size ? size : "Not Stated"}
            </span>
          </h1>

          <h1 className="flex flex-col gap-2 md:flex-row items-start">
            <span className="font-medium text-[20px] md:text-[28px] text-[#616161]">
              Description:
            </span>
            <span className="font-medium leading-[30px] md:leading-[35px] text-[18px] md:text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              nemo praesentium! Dignissimos nihil, placeat ipsum aspernatur
              ullam recusandae et repellat cumque adipisci veniam laboriosam
              quos eos accusantium consequuntur doloribus rem
            </span>
          </h1>

          <button
            type="button"
            onClick={() => dispatch(addItem(singleSearched))}
            className="my-2 active:scale-95 ease-in-out duration-300 w-full max-w-[214px] md:max-w-[315px] h-[55px] md:h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default SingleSearch;
