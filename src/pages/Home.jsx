import React, { useState, useEffect } from "react";
import { url } from "../URLs";
import { Footer } from "../components";
import { useNavigate } from "react-router-dom";
import svgImage1 from "../images/landing-page-images/mobileLandingPageCarosel.svg";
import pngImage1 from "../images/landing-page-images/image1.png";
import pngImage2 from "../images/landing-page-images/image2.png";
import pngImage3 from "../images/landing-page-images/image3.png";
import { homepageSlide, exhibitionSlide, homepageCarousel } from "../Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [slides, setSlides] = useState(null);
  const [exhibite, setExhibite] = useState(exhibitionSlide);
  const [carousel, setCarousel] = useState(homepageCarousel);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(2);

  const navigate = useNavigate();
  const goToMarketplace = () => {
    navigate(url.market);
  };
  const goToAuction = () => {
    navigate(url.auction);
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === exhibitionSlide.length - 1 ? 0 : currentIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? exhibitionSlide.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    setSlides(homepageSlide);
    setExhibite(exhibitionSlide);
    setCarousel(homepageCarousel);

    setTimeout(() => {
      setCurrentCarouselIndex(
        currentCarouselIndex === homepageCarousel.length - 1
          ? 0
          : currentCarouselIndex + 1
      );
    }, 2000);
  }, [currentCarouselIndex]);

  return (
    <main className="flex items-start justify-center min-h-screen">
      <div className=" flex flex-col gap-y-10 md:gap-y-16 min-h-screen">
        <section className="flex flex-col items-start gap-6 text-center text-artsy-text-greyBlack px-4 md:px-8">
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
          <div className="hidden h-full md:flex items-baseline justify-center gap-x-3">
            {slides &&
              slides.map((slide) => (
                <div key={slide.id} className="bar_content">
                  <img src={slide.url} alt={slide.name} />
                </div>
              ))}
          </div>
        </section>

        <section className="hidden md:flex flex-col items-start gap-6 px-8 text-center text-artsy-text-greyBlack w-full">
          <h2 className="font-medium text-[48px]">Featured Products</h2>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center py-8 border-t border-t-artsy-text-black border-b border-b-artsy-text-black">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div className="flex-1">
                  <img
                    src={pngImage1}
                    alt="Boolean Egytian"
                    className="h-full w-full"
                  />
                </div>
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

            <div className="flex items-center justify-center py-8 border-b border-b-artsy-text-black">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div className="flex-1 order-2">
                  <img
                    src={pngImage2}
                    alt="Are We There Yet?"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-left order-1">
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

            <div className="flex items-center justify-center py-8">
              <div className="flex flex-row items-center gap-x-8 h-full w-full">
                <div className="flex-1">
                  <img
                    src={pngImage3}
                    alt="Oloibiri 1997"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-left">
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

        {/* FEATURED PRODUCTS MOBILE VIEW */}
        <section className="md:hidden flex flex-col gap-y-8 min-h-screen px-4">
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
        {/* FEATURED PRODUCTS MOBILE VIEW ENDS*/}

        <section
          className="flex items-center justify-center px-4 min-h-[400px]"
          style={{
            background:
              "linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",
            width: "100%",
          }}
        >
          <div className="flex flex-col gap-8 py-4 text-artsy-background-white w-full max-w-[1200px] mx-auto">
            <div className="hidden md:flex flex-col items-start w-full max-w-[730px]">
              <h1 className="text-[40px] font-medium">
                See Upcoming Auctions and Exhibitions
              </h1>
              <hr className="w-full max-w-[660px] mx-auto" />
            </div>

            <div className="">
              <div
                style={{
                  backgroundColor:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), linear-gradient(104.57deg, rgba(0, 0, 0, 0.1) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%)",
                  backgroundImage: `url(${exhibite[currentIndex].url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  position: "relative",
                }}
                className="min-h-[350px] md:min-h-[546px] flex item-center justify-center duration-500 ease-in-out md:items-end md:justify-start p-8"
              >
                <div className="flex flex-row items-center gap-x-4 w-full max-w-[705px]">
                  <h1 className="hidden md:block font-normal text-[40px] md:text-[70px]">
                    {exhibite[currentIndex].sn}
                  </h1>
                  <div className="flex flex-col gap-y-2 justify-start">
                    <h1 className="font-normal text-[20px] md:text-[30px]">
                      {exhibite[currentIndex].name}
                    </h1>
                    <p className="font-medium text-[10px] md:text-[16px]">
                      {exhibite[currentIndex].about}
                    </p>
                    <small className="font-normal text-[12px] md:text-[14px]">
                      {exhibite[currentIndex].starts}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center gap-4 self-end w-full h-[70px] max-w-[160px]">
              <button
                type="button"
                className="focus:outline-0"
                onClick={() => prevSlide()}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{
                    background: "rgba(255, 255, 255,0.2)",
                    boxShadow:
                      "7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(7.77035px)",
                  }}
                  className="border p-4 rounded-full text-base"
                />
              </button>
              <button
                type="button"
                className="focus:outline-0"
                onClick={() => nextSlide()}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{
                    background: "rgba(255, 255, 255,0.2)",
                    boxShadow:
                      "7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(7.77035px)",
                  }}
                  className="border p-4 rounded-full text-base"
                />
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full border-t border-t-artsy-text-greyBlack border-b border-b-artsy-text-greyBlack">
          <div className="flex items-center justify-between h-[75px] border-b border-b-artsy-text-greyBlack">
            <h1 className="text-[24px] md:text-[48px] font-medium pl-4 md:pl-8">
              Explore marketplace
            </h1>
            <button type="button" className="pr-4 md:pr-8">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[24px] md:text-[48px] align-middle font-medium rounded-full md:rounded-none border md:border-0 border-artsy-text-greyBlack md:p-0 p-2 text-artsy-text-greyBlack md:text-artsy-linearGradient-blue"
                onClick={() => goToMarketplace()}
              />
            </button>
          </div>

          <div className="flex items-center justify-between h-[75px]">
            <h1 className="text-[24px] md:text-[48px] font-medium pl-4 md:pl-8">
              See auctions
            </h1>
            <button type="button" className="pr-4 md:pr-8">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[24px] md:text-[48px] align-middle font-medium rounded-full md:rounded-none border md:border-0 border-artsy-text-greyBlack md:p-0 p-2 text-artsy-text-greyBlack md:text-artsy-linearGradient-blue"
                onClick={() => goToAuction()}
              />
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-4 relative w-full bg-artsy-carousel-greyBackground min-h-[260px] md:min-h-[922px] px-4 md:p-8">
          <div className="flex-1 flex flex-row items-start justify-between w-full px-2">
            <h1 className="font-semibold text-[24px] md:text-[55px] w-full max-w-[270px] md:max-w-[535px] md:px-0">
              TOP CREATORS OF THE WEEK
            </h1>
            <div className="hidden md:flex flex-row items-center gap-x-3">
              <div className="h-[265px] bg-artsy-black w-full max-w-[300px] text-artsy-black border" />
              <ul className="flex flex-col gap-y-4 font-normal text-[40px]">
                <li>Editorials</li>
                <li>Fashion</li>
                <li>Lifestyle</li>
                <li>Blueprint</li>
              </ul>
            </div>
          </div>
          <p
            style={{ color: "rgba(0, 0, 0, 0.57)" }}
            className="flex-1 text-[13px] md:text-[32px] font-extralight text-center md:text-left"
          >
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there&apos;s always more people
            in a black and white photograph. It just makes it seem that there
            were more people at a gig, more people at a football match, than
            with colour photography. Everything looks more exciting.”– Jack
            Lowden
          </p>
          <h1 className="flex-1 font-bold text-[64px] line-through md:text-[170px] self-end">
            1985
          </h1>
          <div className="flex-1">
            {carousel && (
              <div
                className="home-carousel h-[260px] md:h-[836px] absolute left-[20%] md:left-[30%] top-[25%] md:top-[15%]"
                style={{
                  backgroundColor:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04))",
                  height: "",
                }}
              >
                <img
                  src={carousel[currentCarouselIndex].url}
                  alt={carousel[currentCarouselIndex].name}
                  className="h-full"
                />
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
