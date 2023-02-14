import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { url } from "../URLs";
import {
  removeItem,
  incrementInCart,
  decrementInCart,
} from "../reduxSlice/CartSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartQuantity, total, cartItems } = useSelector((store) => store.cart);
  const shippingFee = cartItems.length * 2;

  //form validation with formik
  const phoneRegExp = /[0-9]{4}-[0-9]{3}-[0-9]{4}/;
  const emailRegExp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      walletType: "MetaMask",
      city: "Lagos",
      country: "Nigeria",
      posterCode: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, "Must be at least 1 charactet")
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      email: Yup.string()
        .matches(emailRegExp, "Invalid email address")
        .required("Required"),

      phoneNumber: Yup.string()
        .required("Required")
        .matches(
          phoneRegExp,
          "Phone number is not valid. Format: xxxx-xxx-xxxx"
        )
        .min(13, "Too short. Format: xxxx-xxx-xxxx")
        .max(13, "Too long. Format: xxxx-xxx-xxxx"),

      posterCode: Yup.string()
        .required("Required")
        .min(6, "Too short")
        .max(6, "Too long"),
    }),

    onSubmit: (values) => {
      // console.log(values);
      window.localStorage.setItem("Shipping-Name", values.name);
      window.localStorage.setItem("Shipping-Email", values.email);
      window.localStorage.setItem("Shipping-PhoneNumber", values.phoneNumber);
      window.localStorage.setItem("Shipping-GetUpdates", values.checkBox);
      window.localStorage.setItem("Shipping-WalletType", values.walletType);
      window.localStorage.setItem("Shipping-City", values.city);
      window.localStorage.setItem("Shipping-Country", values.country);
      window.localStorage.setItem("Shipping-PosterCode", values.posterCode);

      navigate(url.payment);
    },
  });

  //form validation with formik

  const eachItem = cartItems.map((item) => (
    <article
      key={item.id}
      className="flex flex-row items-center justify-between md:border-t border-t-0 border-artsy-cartBorder py-8 w-full"
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

          <h1
            className={
              item.name.length > 6
                ? "font-medium md:max-w-full max-w-[100px] text-[16px] md:text-[18px] text-artsy-black"
                : "font-medium md:max-w-full max-w-[100px] text-[18px] md:text-[24px] text-artsy-black"
            }
          >
            {item.name}
          </h1>

          <i
            className={
              item.creator.length > 5
                ? "hidden md:flex items-center justify-start gap-2 font-medium text-[18px] text-artsy-cartTextColor"
                : "hidden md:flex items-center justify-start gap-2 font-medium text-[24px] text-artsy-cartTextColor"
            }
          >
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

        <h1
          className={
            item.value > 10
              ? "font-normal text-[18px] md:text-[30px] text-artsy-cartTextColor"
              : "font-normal text-[20px] md:text-[36px] text-artsy-cartTextColor"
          }
        >
          {item.value ? `$${item.value}` : `$${35}`}
        </h1>
      </div>
    </article>
  ));

  const breadCrumb = (
    <section className="flex flex-row items-center justify-start text-[18px] md:text-[24px] font-medium gap-2 min-h-[10vh] px-4 md:px-8">
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

      <main className="flex flex-row items-start gap-16 w-full px-4 md:px-8 mb-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex-1 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
            >
              Your Email
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="johndoe@gmail.com"
                className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-artsy-like-red font-medium text-[16px]">
                  {formik.errors.email}
                </div>
              ) : null}
            </label>

            <label
              htmlFor="checkBox"
              className="flex flex-row gap-2 text-artsy-cartBorder text-[13px] md:text-[18px]"
            >
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                className="min-h-[16px] md:min-h-[22px] min-w-[16px] md:min-w-[22px] bg-artsy-searchGrey accent-artsy-text-black"
                {...formik.getFieldProps("checkBox")}
              />
              Get updates about new drops & exclusive offers
            </label>
          </div>

          <label
            htmlFor="fullName"
            className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
          >
            Your full name
            <input
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="off"
              placeholder="John Doe"
              className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-artsy-like-red font-medium text-[16px]">
                {formik.errors.name}
              </div>
            ) : null}
          </label>

          <label
            htmlFor="wallet"
            className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
          >
            Choose a wallet
            <select
              name="wallet"
              id="wallet"
              {...formik.getFieldProps("walletType")}
              className="filter-select cursor-pointer text-[18px] md:text-[26px] font-normal border border-artsy-cartBorder text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
            >
              <option value="MetaMask">MetaMask</option>
              <option value="TrustWallet">Trust Wallet</option>
            </select>
          </label>

          <label
            htmlFor="city"
            className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
          >
            City
            <select
              name="city"
              id="city"
              {...formik.getFieldProps("city")}
              className="filter-select cursor-pointer text-[18px] md:text-[26px] font-normal border border-artsy-cartBorder text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
            >
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
            </select>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <label
              htmlFor="country"
              className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
            >
              Country
              <select
                name="country"
                id="country"
                {...formik.getFieldProps("country")}
                className="filter-select cursor-pointer text-[18px] md:text-[26px] font-normal border border-artsy-cartBorder text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
              </select>
            </label>

            <label
              htmlFor="posterCode"
              className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
            >
              Poster Code
              <input
                type="text"
                name="posterCode"
                id="posterCode"
                autoComplete="off"
                placeholder="101001"
                className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
                {...formik.getFieldProps("posterCode")}
              />
              {formik.touched.posterCode && formik.errors.posterCode ? (
                <div className="text-artsy-like-red font-medium text-[16px]">
                  {formik.errors.posterCode}
                </div>
              ) : null}
            </label>
          </div>

          <label
            htmlFor="phoneNumber"
            className="flex flex-col gap-2 text-[18px] md:text-[26px] font-normal text-artsy-cartTextColor"
          >
            Phone Number
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="off"
              placeholder="0814-548-5635"
              className="border border-artsy-cartBorder placeholder:text-[16px] md:placeholder:text-[26px] text-artsy-text-black rounded-lg focus:outline-0 px-4 bg-artsy-searchGrey min-h-[50px] md:min-h-[75px]"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-artsy-like-red font-medium text-[16px]">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </label>

          <button
            type="submit"
            className="active:scale-95 ease-in-out duration-300 px-3 w-full min-h-[50px] md:min-h-[76px] outline-none bg-artsy-button-blue text-artsy-background-white font-medium text-[18px] md:text-[26px] rounded-[4px]"
          >
            Proceed to payment
          </button>

          <Link
            to={url.cart}
            className="underline hover:no-underline w-full max-w-[180px] text-center mx-auto text-artsy-linkBlue font-medium text-[20px] md:text-[28px]"
          >
            Back to cart
          </Link>
        </form>

        <section className="flex-1 hidden lg:flex flex-col gap-4 lg:max-h-[110vh] overflow-y-auto">
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
