import React, { useState, useEffect } from "react";
import svgImage1 from "../images/landing-page-images/mobileLandingPageCarosel.svg";
import landingPageNext from "../images/landing-page-images/landingPageNext.svg";
import pngImage1 from "../images/landing-page-images/image1.png";
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
      <div className=" flex flex-col gap-y-16 min-h-screen">
        <section className="flex flex-col items-start gap-6 text-center text-artsy-text-greyBlack min-h-screen">
          <div className="mx-auto w-full max-w-[1068px]">
            <h1 className="font-medium md:font-semibold text-[32px] md:text-[80px] w-full">
              Photography is poetry & beautiful untold stories.
            </h1>
            <p className="font-medium text-[16px] md:text-[28px] mx-auto w-full max-w-[926px]">
              Flip through more than 10,000 vintage shots, old photograghs,
              historic images and captures seamlessly in one place. Register to
              get top access.
            </p>
          </div>
          <div className="block md:hidden mx-auto">
            <img src={svgImage1} alt="illustration" />
          </div>
          <div className="hidden md:flex items-baseline justify-center gap-x-3">
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
          <div className="flex flex-col gap-y-12 w-full">
            <div className="flex items-center justify-center max-[950px]:min-h-[80vh] min-h-[60vh] border-t border-t-artsy-text-black border-b border-b-artsy-text-black">
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
                <div className="flex-1 flex flex-col justify-between self-start text-left h-[305px]">
                  <h1 className="font-bold text-[40px]">
                    The Boolean Egyptian
                  </h1>
                  <p className="font-normal text-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor pur
                  </p>
                  <button type="button" className="self-end">
                    <img src={landingPageNext} alt="next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block md:hidden"></section>
      </div>
    </main>
  );
};

export default Home;
