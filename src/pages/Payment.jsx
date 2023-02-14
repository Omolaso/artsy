import React, { useState } from "react";
import { url } from "../URLs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reduxSlice/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { wallets } from "../Products";

const Payment = () => {
  const { cartQuantity, total, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const shippingFee = cartItems.length * 2;

  const handleConfirmPayment = (e) => {
    e.preventDefault();
    navigate(url.completed);
    dispatch(clearCart());
  };

  const breadCrumb = (
    <section className="flex flex-row items-center justify-start text-[17px] md:text-[24px] font-medium gap-2 min-h-[5vh] md:min-h-[10vh] px-4 md:px-8">
      <button
        type="button"
        className=" text-artsy-HR-bg hover:underline"
        onClick={() => navigate(url.cart)}
      >
        Cart
      </button>
      <span>›</span>
      <button
        type="button"
        className=" text-artsy-HR-bg hover:underline"
        onClick={() => navigate(url.shipping)}
      >
        Shipping details
      </button>
      <span>›</span>
      <h2 className="cursor-text">Payment details</h2>
    </section>
  );
  return (
    <>
      {breadCrumb}
      <main className="flex flex-col gap-5 md:gap-8 p-4 md:p-8">
        <section className="flex items-center justify-between w-full">
          <h1 className="font-medium text-[28px] text-artsy-text-black hidden md:block">
            Payment Method
          </h1>
          <h1 className="flex flex-row items-center gap-2 text-artsy-cartBorder font-normal text-[18px] md:text-[24px]">
            <FontAwesomeIcon icon={faLock} />
            Secure Server
          </h1>
        </section>

        <section className="flex flex-row items-center gap-4 w-full">
          <div className="flex-1 flex flex-col gap-8 md:min-h-[950px] rounded-lg p-0 md:p-8 shadow-none md:shadow-[0_0_5px_0_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
                <label
                  htmlFor="wallet"
                  className="flex-1 flex flex-row items-center gap-2 px-4 md:px-0 md:gap-4 font-medium text-[18px] xl:text-[22px]"
                >
                  <input
                    type="radio"
                    name="wallet"
                    id="wallet"
                    className="accent-artsy-dropGreen"
                    defaultChecked
                  />
                  Select your wallet
                </label>
                <h1 className="font-normal text-[16px] md:text-[24px] text-artsy-cartBorder w-full max-w-[384px] mx-0 block md:hidden">
                  Connect with one of our available wallet providers or add and
                  connect a new wallet.
                </h1>
                <div className="flex-1 flex flex-row items-center self-center md:self-auto">
                  {wallets.map((wallet, index) => (
                    <button
                      key={index}
                      type="button"
                      className="focus:outline-0"
                      onClick={() => setCurrentIndex(index)}
                    >
                      <img src={wallet.imgUrl} alt={wallet.name} />
                    </button>
                  ))}
                </div>
              </div>
              <h1 className="hidden md:block font-normal text-[24px] text-artsy-cartBorder w-full max-w-[460px] mx-auto">
                Connect with one of our available wallet providers or add and
                connect a new wallet.
              </h1>
            </div>

            <form
              onSubmit={(e) => handleConfirmPayment(e)}
              className="flex flex-col gap-6 md:gap-12 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
            >
              <label
                htmlFor="walletType"
                className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
              >
                Wallet type
                <input
                  type="text"
                  name="walletType"
                  id="walletType"
                  autoComplete="off"
                  className="border border-artsy-cartBorder text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
                />
              </label>

              <label
                htmlFor="key"
                className="flex flex-col gap-2 text-[18px] md:text-[26px] w-full font-normal text-artsy-cartTextColor"
              >
                Key
                <div className="flex items-center justify-between w-full border border-artsy-cartBorder rounded-lg bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]">
                  <input
                    type="text"
                    name="key"
                    id="key"
                    placeholder="Please enter your key"
                    autoComplete="off"
                    className="text-artsy-text-black focus:outline-0 px-4 flex-1 min-h-full bg-artsy-searchGrey"
                  />
                  <img
                    src={wallets[currentIndex].imgUrl}
                    alt={wallets[currentIndex].name}
                  />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <label
                  htmlFor="date"
                  className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
                >
                  Expiry date
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    placeholder="MM/YYYY"
                    className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
                  />
                </label>

                <label
                  htmlFor="cvv"
                  className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
                >
                  CVV
                  <input
                    type="number"
                    minLength={0}
                    maxLength={3}
                    name="cvv"
                    id="cvv"
                    autoComplete="off"
                    placeholder="***"
                    className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
                  />
                </label>
              </div>

              <label htmlFor="checkBox" className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  className="min-h-[16px] md:min-h-[22px] min-w-[16px] md:min-w-[22px] bg-artsy-searchGrey accent-artsy-text-black"
                />
                <span className="text-artsy-cartBorder font-normal text-[16px] md:text-[20px] mt-5 sm:mt-0">
                  Save my wallet details & information for future transactions
                </span>
              </label>

              <button
                type="submit"
                className="active:scale-95 ease-in-out duration-300 px-3 w-full min-h-[50px] md:min-h-[76px] max-w-[280px] mx-auto md:max-w-full md:mx-0 outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
              >
                Confirm
              </button>
            </form>
          </div>

          <div className="flex-[0.5] lg:flex-1 self-start hidden lg:flex flex-col gap-8">
            <h1 className="text-[28px] font-medium">Payment Summary</h1>

            <h1 className="flex flex-row gap-2 text-[28px] font-medium text-artsy-cartTextColor">
              Wallet Selected:
              <span className="text-artsy-black">
                {wallets[currentIndex].name}
              </span>
            </h1>

            <div className="flex flex-col gap-5 border-t border-artsy-cartBorder">
              <div className="flex items-center justify-between w-full font-normal text-[28px]">
                <p className="text-artsy-cartTextColor">Products in cart:</p>
                <p className="text-artsy-black">
                  {cartQuantity} {cartQuantity > 1 ? "items" : "item"}
                </p>
              </div>

              <div className="flex items-center justify-between w-full font-normal text-[28px]">
                <p className="text-artsy-cartTextColor">Shipping:</p>
                <p className="text-artsy-black">${shippingFee}</p>
              </div>

              <div className="flex items-center justify-between w-full font-normal text-[28px]">
                <p className="text-artsy-cartTextColor">Grand Total:</p>
                <p className="text-artsy-black"> ${shippingFee + total} </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Payment;
