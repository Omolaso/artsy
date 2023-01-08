import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import searchIcon from "../images/market-place/marketplaceSearchIcon.svg";
import filterIcon from "../images/market-place/marketplaceFilterIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Market = () => {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [artist, setArtist] = useState(false);
  const [value, setValue] = useState([2]);

  // MATERIAL UI
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `$${value}`;
  }
  // MATERIAL UI

  return (
    <main className="flex items-start justify-center min-h-screen w-full mt-[20px] text-artsy-black">
      <div className="flex flex-col min-h-screen justify-between gap-6 md:gap-10 w-full px-4 md:px-8">
        <h1 className="block md:hidden text-[20px] font-medium">
          Explore Marketplace
        </h1>
        <section className="flex flex-row items-center justify-center md:justify-between gap-5">
          <div className="hidden md:flex flex-[0.3] flex-row items-center px-4 gap-4 bg-artsy-searchGrey border border-artsy-searchGrey h-[60px] rounded-[15px]">
            <img src={searchIcon} alt="search" className="h-[28px]" />
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Search"
              className="marketplace-search bg-artsy-searchGrey focus:outline-none font-medium text-2xl max-[1000px]:text-xl w-full"
            />
          </div>

          <div
            style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
            className="flex-1 rounded-[15px] h-[90px] hidden md:flex items-center justify-between px-4"
          >
            <p className="font-normal text-[24px] max-[1000px]:text-[20px]">
              Explore products
            </p>
            <select
              name="sort"
              id="sort"
              className="h-[60px] border border-artsy-black px-2 w-full max-w-[190px] focus:outline-none font-normal text-[18px] rounded-[8px] cursor-pointer"
            >
              <option value="sort-all" selected disabled>
                Sort by
              </option>
              <option value="sort-all">All</option>
              <option value="price">Price</option>
              <option value="price">Name</option>
            </select>
          </div>

          {/* SEARCH & SORT MOBILE VIEW */}

          <div
            style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
            className="flex-1 rounded-[15px] h-[60px] md:hidden flex items-center justify-between px-4"
          >
            <select
              name="filter"
              id="filter"
              className="filter-select h-[60px] px-2 w-full max-w-[90px] focus:outline-none font-normal text-[18px] rounded-[8px] cursor-pointer"
            >
              <option value="all" selected disabled>
                Filter
              </option>
              <option value="all">All</option>
              <option value="price">Price</option>
              <option value="price">Name</option>
            </select>

            <select
              name="sort"
              id="sort"
              className="sort-select h-[60px] px-2 w-full max-w-[100px] focus:outline-none font-normal text-[18px] rounded-[8px] cursor-pointer"
            >
              <option value="sort-all" selected disabled>
                Sort by
              </option>
              <option value="sort-all">All</option>
              <option value="price">Price</option>
              <option value="price">Name</option>
            </select>
          </div>

          {/* SEARCH & SORT MOBILE VIEW ENDS*/}
        </section>

        <section className="flex-1 flex items-start gap-5 justify-between border">
          <div className="hidden md:flex flex-col flex-[0.3] gap-5 px-4">
            <div className="flex items-center justify-start gap-5">
              <img
                src={filterIcon}
                alt="filter"
                className="w-[35px] h-[40px] max-[1000px]:w-[30px] max-[1000px]:h-[35px]"
              />
              <h2 className="font-medium text-[32px] max-[1000px]:text-[28px]">
                Filter
              </h2>
            </div>

            <hr className="w-full h-[6px] rounded-[10px] bg-artsy-HR-bg" />

            <div className="flex flex-col gap-10 justify-between w-full">
              {/* FILTER BY CATEGORY */}
              <div className="flex flex-col gap-4 w-full">
                <button
                  type="button"
                  className="flex items-center justify-between w-full"
                  onClick={() => setCategory(!category)}
                >
                  <span className="font-medium text-[28px] max-[1000px]:text-[20px]">
                    By category
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={
                      category
                        ? "rotate-0 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                        : "rotate-180 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                    }
                  />
                </button>
                <ul
                  className={
                    category
                      ? "flex flex-col gap-2 text-artsy-text-black"
                      : "hidden"
                  }
                >
                  <li className="flex items-center">
                    <label
                      htmlFor="editorials"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="editorials"
                        id="editorials"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Editorials
                      </span>
                    </label>
                  </li>
                  <li className="flex items-center">
                    <label
                      htmlFor="fashion"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="fashion"
                        id="fashion"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Fashion
                      </span>
                    </label>
                  </li>
                  <li className="flex items-center">
                    <label
                      htmlFor="optics"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="optics"
                        id="optics"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Optics
                      </span>
                    </label>
                  </li>
                  <li className="lg:hidden flex items-center">
                    <label
                      htmlFor="art"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="art"
                        id="art"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Art
                      </span>
                    </label>
                  </li>
                  <li className="hidden lg:flex items-center">
                    <label
                      htmlFor="art"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="art"
                        id="art"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Art & Museum
                      </span>
                    </label>
                  </li>
                  <li className="flex items-center">
                    <label
                      htmlFor="nature"
                      className="flex items-center gap-4 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="nature"
                        id="nature"
                        className="accent-artsy-searchGrey w-[26px] h-[26px] max-[1000px]:w-[20px] focus:outline-none"
                      />
                      <span className="font-normal text-[24px] max-[1000px]:text-[18px]">
                        Nature
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              {/* CATEGORY ENDS*/}

              {/* FILTER BY PRICE*/}
              <div className="flex flex-col gap-4 w-full">
                <button
                  type="button"
                  className="flex items-center justify-between w-full"
                  onClick={() => setPrice(!price)}
                >
                  <span className="font-medium text-[28px] max-[1000px]:text-[20px]">
                    By price
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={
                      price
                        ? "rotate-0 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                        : "rotate-180 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                    }
                  />
                </button>

                <div
                  className={
                    price
                      ? "flex flex-col gap-2 text-artsy-text-black"
                      : "hidden"
                  }
                >
                  <h1 className="font-normal text-[24px] max-[1000px]:text-[18px]">
                    $2 - $10
                  </h1>
                  <Box className="w-full">
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="on"
                      sx={{ color: "black" }}
                      min={2}
                      max={10}
                      getAriaValueText={valuetext}
                    />
                  </Box>
                </div>
              </div>
              {/* FILTER BY PRICE ENDS*/}

              {/* FILTER BY ARTIST*/}
              <div className="flex flex-col gap-4 w-full">
                <button
                  type="button"
                  className="flex items-center justify-between w-full"
                  onClick={() => setArtist(!artist)}
                >
                  <span className="font-medium text-[28px] max-[1000px]:text-[20px]">
                    By artist
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={
                      artist
                        ? "rotate-0 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                        : "rotate-180 duration-150 ease-in-out font-medium text-[22px] max-[1000px]:text-[15px] mt-2"
                    }
                  />
                </button>

                <ul
                  className={
                    artist
                      ? "flex flex-col gap-2 text-artsy-text-black font-normal text-[24px] max-[1000px]:text-[18px]"
                      : "hidden"
                  }
                >
                  <li>
                    <button type="button">Ali Dawa</button>
                  </li>
                  <li>
                    <button type="button">Clearamane</button>
                  </li>
                </ul>
              </div>
              {/* FILTER BY ARTIST ENDS*/}
            </div>
          </div>

          <div className="border flex-1 h-full">PRODUCTS</div>
        </section>
      </div>
    </main>
  );
};

export default Market;
