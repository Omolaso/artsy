import React, { useState, useEffect } from "react";
import svgImage1 from "../images/landing-page-images/mobileLandingPageCarosel.svg";
// import landingPageNext from "../images/landing-page-images/landingPageNext.svg";
import pngImage1 from "../images/landing-page-images/image1.png";
import pngImage2 from "../images/landing-page-images/image2.png";
import pngImage3 from "../images/landing-page-images/image3.png";
import { homepageSlide } from "../Products";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    setSlides(homepageSlide);
  }, []);

  return (
    <main className="flex items-start justify-center min-h-screen">
      <div className=" flex flex-col md:gap-y-16 min-h-screen">
        <section className="flex flex-col items-start gap-6 text-center text-artsy-text-greyBlack min-h-[90vh] md:min-h-screen">
          <div className="mx-auto w-full max-w-[1068px]">
            <h1 className="font-medium md:font-semibold text-[32px] md:text-[65px] lg:text-[80px] w-full">
              Photography is poetry & beautiful untold stories.
            </h1>
            <p className="font-medium text-[16px] md:text-[22px] lg:text-[28px] mx-auto w-full max-w-[926px]">
              Flip through more than 10,000 vintage shots, old photograghs,
              historic images and captures seamlessly in one place. Register to
              get top access.
            </p>
          </div>
          <div className="block md:hidden mx-auto">
            <img src={svgImage1} alt="illustration" />
          </div>
          <div className="bar_content hidden md:flex items-baseline justify-center gap-x-3">
            {slides &&
              slides.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.url} alt={slide.name} />
                </div>
              ))}
          </div>
        </section>

        <section className="hidden md:flex flex-col items-start gap-6 text-center text-artsy-text-greyBlack w-full min-h-screen">
          <h2 className="font-medium text-[48px]">Featured Products</h2>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center min-h-[60vh] border-t border-t-artsy-text-black border-b border-b-artsy-text-black">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div
                  style={{
                    backgroundImage: `url(${pngImage1})`,
                    backgroundSize: "cover",
                    height: "305px",
                    width: "100%",
                    flex: "1",
                  }}
                />
                <div className="flex-1 flex flex-col justify-between self-star text-left">
                  <h1 className="font-bold md:text-[30px] lg:text-[40px]">
                    The Boolean Egyptian
                  </h1>
                  <p className="font-normal md:text-[18px] lg:text-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center min-h-[60vh] border-b border-b-artsy-text-black">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div
                  style={{
                    backgroundImage: `url(${pngImage2})`,
                    backgroundSize: "cover",
                    height: "305px",
                    width: "100%",
                    flex: "1",
                    order: "2",
                  }}
                />
                <div className="flex-1 flex flex-col justify-between self-star text-left order-1">
                  <h1 className="font-bold md:text-[30px] lg:text-[40px]">
                    Are We There Yet?
                  </h1>
                  <p className="font-normal md:text-[18px] lg:text-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center min-h-[60vh] border-b border-b-artsy-text-black">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div
                  style={{
                    backgroundImage: `url(${pngImage3})`,
                    backgroundSize: "cover",
                    height: "305px",
                    width: "100%",
                    flex: "1",
                  }}
                />
                <div className="flex-1 flex flex-col justify-between self-star text-left">
                  <h1 className="font-bold md:text-[30px] lg:text-[40px]">
                    Oloibiri 1997
                  </h1>
                  <p className="font-normal md:text-[18px] lg:text-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:hidden flex flex-col gap-y-8 min-h-screen">
          <h2 className="font-bold text-[28px]">Featured Products</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 w-full">
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pngImage1})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 className="font-semibold text-[30px] text-artsy-background-white">
                  Boolean Egyptian
                </h1>
              </div>
              <p className="w-full max-w-[343px] font-normal text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="w-3/4">
                <hr className="border-artsy-black w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pngImage2})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 className="font-semibold text-[30px] text-artsy-background-white">
                  Are We There Yet?
                </h1>
              </div>
              <p className="w-full max-w-[343px] font-normal text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="w-3/4">
                <hr className="border-artsy-black w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${pngImage3})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1 className="font-semibold text-[30px] text-artsy-background-white">
                  Oloibiri 1997
                </h1>
              </div>
              <p className="w-full max-w-[343px] font-normal text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor pur
              </p>
              <div className="w-3/4">
                <hr className="border-artsy-black w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
