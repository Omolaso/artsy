import React, { useState } from "react";
import { allProducts } from "../Products";
import { useParams, useNavigate } from "react-router-dom";
import { addItem, increment, decrement } from "../reduxSlice/CartSlice";
import { useDispatch } from "react-redux";

const SingleSearch = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { searchId } = useParams();
  const navigate = useNavigate();
  const singleSearched = allProducts.find(
    (product) => product.id === Number(searchId)
  );

  const { url, imgUrl, name, creator, size, amount } = singleSearched;
  return (
    <main className="flex flex-col gap-2 md:gap-4 px-4 md:px-8 text-artsy-text-greyBlack">
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

      <section className="flex flex-col lg:flex-row items-start w-full gap-4 md:gap-8">
        <div className="flex items-start justify-start flex-[0.6]">
          <img src={url || imgUrl} alt={name} className="w-full h-full" />
        </div>

        <div className="flex-1 flex flex-col gap-2 md:gap-4 font-medium text-[30px] md:text-[36px] mb-4">
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

          <div className="flex flex-row items-center justify-start gap-8">
            <button
              type="button"
              onClick={() => {
                setToggle(!toggle);
                dispatch(decrement(singleSearched));
              }}
              className="active:scale-75 ease-in-out duration-300"
            >
              -
            </button>
            <h1> {amount} </h1>
            <button
              type="button"
              onClick={() => {
                setToggle(!toggle);
                dispatch(increment(singleSearched));
              }}
              className="active:scale-75 ease-in-out duration-300"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => dispatch(addItem(singleSearched))}
            className="active:scale-95 ease-in-out duration-300 w-full max-w-[214px] md:max-w-[315px] h-[55px] md:h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
          >
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default SingleSearch;
