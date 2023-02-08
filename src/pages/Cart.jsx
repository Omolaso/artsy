import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  removeItem,
  incrementInCart,
  decrementInCart,
  totalInCart,
} from "../reduxSlice/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartQuantity, total, cartItems } = useSelector((store) => store.cart);
  const shippingFee = cartQuantity * 2;

  useEffect(() => {
    dispatch(totalInCart());
    console.log(total);
  }, [cartItems]);

  if (cartQuantity < 1) {
    return (
      <h1 className="px-4 md:px-8 text-center text-artsy-text-greyBlack text-[20px] md:text-[48px] font-bold mt-10">
        CART IS EMPTY
      </h1>
    );
  }

  const checkOut = () => {
    if (cartItems.length < 1) return;
    navigate("/shippingDetails");
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

          <h1 className="hidden md:flex items-center justify-start gap-2 font-medium text-[24px] text-artsy-black">
            <span className="font-medium text-[24px] text-artsy-cartTextColor">
              Creator:
            </span>
            {item.creator}
          </h1>
          <h1 className="hidden md:flex items-center justify-start gap-2 text-[20px] font-medium">
            <span className="font-medium text-[24px] text-artsy-cartTextColor">
              Size:
            </span>
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

  return (
    <main className="flex flex-col justify-between px-4 md:px-8 w-full min-h-screen my-4">
      {/* <section className="hidden md:block">Navs</section> */}
      <section className="flex-1 flex flex-col items-start gap-6 w-full">
        {eachItem}
      </section>

      <footer className="flex-[0.2] flex flex-col py-4 gap-6 border-t border-artsy-cartBorder">
        <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 w-full">
          <div className="flex-[0.7] flex flex-col gap-5 items-center max-w-[350px] justify-start w-full order-3 md:order-1">
            <button
              type="button"
              onClick={() => checkOut()}
              className="active:scale-95 ease-in-out duration-300 w-full max-w-[300px] md:max-w-full min-h-[50px] md:min-h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
            >
              Proceed to checkout
            </button>
            <Link
              to="/marketplace"
              className="underline hover:no-underline text-artsy-linkBlue font-medium text-[20px] md:text-[28px]"
            >
              Continue shopping
            </Link>
          </div>

          <div className="md:hidden flex items-center justify-between pt-3 border-t border-dotted w-full text-[20px] order-2 font-medium">
            <h1 className="text-artsy-cartTextColor">Grand Total:</h1>
            <h1 className="text-artsy-black">${shippingFee + total}</h1>
          </div>

          <div className="flex-1 flex flex-col gap-2 w-full max-w-full md:max-w-[600px] order-1 md:order-3">
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
          </div>
        </section>

        <section className="hidden md:flex items-center justify-center w-full text-[30px] font-bold text-artsy-text-black">
          <h1>Grand Total: ${shippingFee + total}</h1>
        </section>
      </footer>
    </main>
  );
};

export default Cart;
