import React from "react";
import delivery from "../images/utils/delivery.png";
import cone from "../images/utils/cone.svg";

const Completed = () => {
  return (
    <>
      <main className="flex items-center px-0 md:px-8 w-full min-h-[70vh]">
        <section className="flex flex-col gap-4 md:gap-0 items-center justify-center w-full">
          <img src={delivery} alt="delivery" />
          <h1 className="text-[18px] md:text-[40px] font-medium">
            Hey! Thank you for your purchase.
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-[15px] md:text-[25px] font-medium">
              You are amazing. Cheers to being
              <span className="text-artsy-button-blue ml-2">ARTSY.</span>
            </p>
            <img src={cone} alt="thanks" className="hidden md:block" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Completed;
