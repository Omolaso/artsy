import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { url } from "../URLs";
import {
  removeItem,
  incrementInCart,
  decrementInCart,
} from "../reduxSlice/CartSlice";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartQuantity, total, cartItems } = useSelector((store) => store.cart);
  const shippingFee = cartItems.length * 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/paymentDetails");
  };

  const eachItem = cartItems.map((item) => (
    <article
      key={item.id}
      className="flex flex-row items-center justify-between md:border-t border-t-0 border-artsy-cartBorder py-4 w-full"
    >
      <div className="flex items-center justify-center gap-5">
        <img
          src={item.url || item.imgUrl}
          alt={item.name}
          className="max-w-[126px] md:max-w-[250px] rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <i className="block md:hidden font-normal text-[16px] text-artsy-cartTextColor">
            {item.category ? item.category : "Editorials"}
          </i>

          <h1 className="font-medium md:max-w-full max-w-[100px] text-[18px] md:text-[24px] text-artsy-black">
            {item.name}
          </h1>

          <i className="hidden md:flex items-center justify-start gap-2 font-medium text-[24px] text-artsy-cartTextColor">
            {item.creator}
          </i>
          <h1 className="flex items-center justify-start text-artsy-cartTextColor gap-2 text-[20px] font-medium">
            {item.size ? item.size : "Not Stated"}
          </h1>

          <div className="flex flex-row items-center md:justify-start justify-center gap-0 md:gap-5 border md:border-0 rounded-lg font-medium text-[20px] md:text-[32px] md:max-w-[70%] max-w-[110px]">
            <button
              type="button"
              onClick={() => {
                item.amount === 1
                  ? dispatch(removeItem(item))
                  : dispatch(decrementInCart(item));
              }}
              className="md:border-r-0 border-r flex-1 active:opacity-90 px-2 md:px-0"
            >
              -
            </button>
            <p className="flex-1 self-center text-center px-2 md:px-0">
              {item.amount}
            </p>
            <button
              type="button"
              className="flex-1 md:border-l-0 border-l active:opacity-90 px-2 md:px-0"
              onClick={() => dispatch(incrementInCart(item))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between min-h-[110px] md:min-h-[160px]">
        <button
          type="button"
          title="Remove item"
          className="flex items-center justify-center w-full"
          onClick={() => dispatch(removeItem(item))}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="font-normal text-[12px] md:text-[15px] text-artsy-cartTextColor border rounded-[100%] px-2 py-1"
          />
        </button>

        <h1 className="font-normal text-[20px] md:text-[36px] text-artsy-cartTextColor">
          {item.value ? `$${item.value}` : `$${35}`}
        </h1>
      </div>
    </article>
  ));

  const breadCrumb = (
    <section className="flex flex-row items-center justify-start text-[20px] md:text-[24px] font-medium gap-2 min-h-[10vh] px-4 md:px-8">
      <button
        type="button"
        className=" text-artsy-HR-bg hover:underline"
        onClick={() => navigate(url.cart)}
      >
        Cart
      </button>
      <span>›</span>
      <h2 className="cursor-text">Shipping details</h2>
    </section>
  );

  return (
    <>
      {breadCrumb}
      <main className="flex flex-row items-center gap-16 w-full px-4 md:px-8 my-4">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <label
              htmlFor="email"
              className="flex flex-col gap-2 md:gap-4 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
            >
              Your Email
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="tobifrancisadesanya@gmail.com"
                className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
              />
            </label>

            <label
              htmlFor="checkBox"
              className="flex flex-row gap-2 text-artsy-cartBorder text-[13px] md:text-[20px]"
            >
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                className="min-h-[16px] md:min-h-[26px] min-w-[16px] md:min-w-[26px] bg-artsy-searchGrey accent-artsy-text-black"
              />
              Get updates about new drops & exclusive offers
            </label>
          </div>

          <button
            type="submit"
            className="active:scale-95 ease-in-out duration-300 px-3 w-full min-h-[50px] md:min-h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
          >
            Proceed to payment
          </button>
        </form>

        <section className="flex-1 hidden lg:flex flex-col gap-4">
          {eachItem}

          <section className="flex-1 flex flex-col gap-2 w-full max-w-full md:max-w-[600px] order-1 md:order-3 border-t border-artsy-cartBorder py-4">
            <div className="flex items-center justify-between w-full font-normal text-[20px] md:text-[28px]">
              <p className="text-artsy-cartTextColor">Products in cart:</p>
              <p className="text-artsy-black">
                {cartQuantity} {cartQuantity > 1 ? "items" : "item"}
              </p>
            </div>

            <div className="flex items-center justify-between w-full font-normal text-[20px] md:text-[28px]">
              <p className="text-artsy-cartTextColor">Shipping:</p>
              <p className="text-artsy-black">${shippingFee}</p>
            </div>

            <div className="flex items-center justify-between w-full font-normal text-[20px] md:text-[28px]">
              <p className="text-artsy-cartTextColor">Product total:</p>
              <p className="text-artsy-black">${total}</p>
            </div>

            <div className="flex items-center justify-between w-full font-bold text-[20px] md:text-[28px] border-t border-t-artsy-black">
              <p className="text-artsy-black">Grand Total:</p>
              <p className="text-artsy-black"> ${shippingFee + total} </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Shipping;
