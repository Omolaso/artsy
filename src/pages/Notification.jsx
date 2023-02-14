import React from "react";
import { Footer } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";

const Notification = () => {
  const phoneRegExp = /[0-9]{4}-[0-9]{3}-[0-9]{4}/;
  const emailRegExp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
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
    }),

    onSubmit: (values, { resetForm }) => {
      alert("Thanks! We'll keep you informed");
      window.localStorage.setItem("Name", values.name);
      window.localStorage.setItem("Email", values.email);
      window.localStorage.setItem("Phone Number", values.phoneNumber);
      resetForm();
    },
  });

  return (
    <>
      <main className="flex items-start justify-center my-[10px] md:my-[15px] px-4 md:px-8">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-medium text-center md:text-left text-[30px] md:text-[48px] text-artsy-text-greyBlack">
            Stay informed at all time!
          </h1>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <label
              htmlFor="name"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Name:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-artsy-like-red font-medium text-[16px]">
                  {formik.errors.name}
                </div>
              ) : null}
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Email:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-artsy-like-red font-medium text-[16px]">
                  {formik.errors.email}
                </div>
              ) : null}
            </label>

            <label
              htmlFor="phoneNumber"
              className="flex flex-col gap-1 font-medium md:font-semibold text-[16px] md:text-[20px]"
            >
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="xxxx-xxx-xxxx"
                className="border focus:outline-0 px-3 min-h-[50px]"
                autoComplete="off"
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
              className="w-full active:scale-95 duration-500 ease-out rounded-[6px] bg-artsy-text-greyBlack text-artsy-searchGrey md:rounded-[10px] font-medium md:font-semibold text-[18px] md:text-[24px] border min-h-[50px] md:min-h-[60px]"
            >
              Notify Me
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Notification;
