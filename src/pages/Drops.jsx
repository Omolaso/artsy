import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components";
import { drops } from "../Products";

const Drops = () => {
  const [dropItems, setDropItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setDropItems(drops);
  }, []);
  return (
    <>
      <main className="flex flex-col gap-20 md:my-[15px] my-[10px] px-4 md:px-8">
        <section className="flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <h1 className="font-bold md:font-medium text-[30px] md:text-[48px]">
              Upcoming drops
            </h1>
            <p className="font-normal text-[18px] md:text-[32px] text-[#616161] w-full max-w-[290px] md:max-w-full">
              Get notified so that no drops will miss you!
            </p>
            <button
              type="button"
              onClick={() => navigate("/notifications")}
              className="max-w-[260px] md:max-w-[420px] w-full rounded-[6px] hover:bg-artsy-text-greyBlack hover:text-artsy-searchGrey ease-in-out duration-500 md:rounded-[10px] font-medium text-[22px] md:text-[36px] border min-h-[50px] md:min-h-[80px]"
            >
              Notify me
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-16 md:gap-20">
          {dropItems &&
            dropItems.map((item) => (
              <section
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-5"
              >
                <div
                  className="flex-1 flex flex-col justify-between md:items-end md:justify-end min-h-[225px] md:min-h-[450px] rounded-[10px] p-4 w-full"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/*status mobile view */}
                  <div className="flex items-end justify-end w-full md:hidden">
                    <button
                      disabled="disabled"
                      type="button"
                      className={
                        item.inProgress === true
                          ? "bg-artsy-dropGreen rounded-[5px] font-medium text-artsy-background-white text-[12px] w-full min-h-[23px] max-w-[103px]"
                          : item.inProgress === "upcoming"
                          ? "bg-artsy-linearGradient-blue rounded-[5px] font-medium text-artsy-background-white text-[12px] w-full min-h-[23px] max-w-[103px]"
                          : "bg-artsy-dropEnded rounded-[5px] font-medium text-artsy-background-white text-[12px] w-full min-h-[23px] max-w-[103px]"
                      }
                    >
                      {item.auction}
                    </button>
                  </div>
                  {/*status mobile view ends */}

                  <div
                    className="flex items-center justify-center border border-[#ffff] mb-4 md:mb-8 w-full min-h-[72px] md:min-h-[130px] max-w-[370px] md:max-w-[570px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(245, 244, 244, 0.24)",
                      backdropFilter: " blur(1.5px)",
                      margin: "0 auto",
                      borderRadius: "8px",
                    }}
                  >
                    <h1>Time Elapsed</h1>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start justify-between w-full md:justify-around min-h-[180px] md:min-h-[450px]">
                  {/*status desktop view */}
                  <div className="hidden md:flex items-start justify-start w-full">
                    <button
                      disabled="disabled"
                      type="button"
                      className={
                        item.inProgress === true
                          ? "bg-artsy-dropGreen rounded-[10px] font-medium text-artsy-background-white text-[18px] w-full min-h-[45px] max-w-[200px]"
                          : item.inProgress === "upcoming"
                          ? "bg-artsy-linearGradient-blue rounded-[10px] font-medium text-artsy-background-white text-[18px] w-full min-h-[45px] max-w-[200px]"
                          : "bg-artsy-dropEnded rounded-[10px] font-medium text-artsy-background-white text-[18px] w-full min-h-[45px] max-w-[200px]"
                      }
                    >
                      {item.auction}
                    </button>
                  </div>
                  {/*status desktop view ends */}
                  <p className="font-normal text-[16px] md:text-[20px]">
                    {item.date}
                  </p>
                  <h1 className="font-medium text-[24px] md:text-[36px]">
                    {item.name}
                  </h1>
                  <p className="font-normal text-[16px] md:text-[20px] w-full max-w-[335px] md:max-w-[430px]">
                    {item.about}
                  </p>
                  <h1 className="flex items-center font-medium text-[20px] md:text-[24px]">
                    <span className="">Creator:</span>
                    <span className="text-artsy-linearGradient-blue ml-2 align-end">
                      {item.creator}
                    </span>
                  </h1>
                </div>
              </section>
            ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Drops;
