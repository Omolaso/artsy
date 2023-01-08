import React from "react";
import searchIcon from "../images/market-place/marketplaceSearchIcon.svg";

const Market = () => {
  return (
    <main className="flex items-start justify-center min-h-screen w-full mt-[20px]">
      <div className="flex flex-col min-h-screen justify-between gap-6 md:gap-10 w-full px-4 md:px-8">
        <section className="flex flex-row items-center justify-between gap-5">
          <div className="hidden md:flex flex-[0.3] flex-row items-center px-4 gap-4 bg-artsy-searchGrey border border-artsy-searchGrey h-[60px] rounded-[15px]">
            <img src={searchIcon} alt="search" className="h-[28px]" />
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Search"
              className="marketplace-search bg-artsy-searchGrey focus:outline-none font-medium text-2xl w-full"
            />
          </div>

          <div
            style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
            className="flex-1 rounded-[15px] h-[90px] hidden md:flex items-center justify-between px-4"
          >
            <p className="font-normal text-[24px]">Explore products</p>
            <select
              name="sort"
              id="sort"
              className="h-[60px] border border-artsy-black px-2 w-full max-w-[190px] focus:outline-none font-normal text-[18px] rounded-[8px] cursor-pointer"
            >
              <option value="sort" selected disabled>
                Sort by
              </option>
              <option value="price">Price</option>
              <option value="price">Name</option>
            </select>
          </div>

          {/* FILTER MOBILE VIEW */}
          <div
            style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
            className="flex-1 rounded-[15px] h-[90px] md:hidden flex items-center justify-between px-4"
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
        </section>

        <section className="flex-1 flex items-center justify-center border">
          AA
        </section>
      </div>
    </main>
  );
};

export default Market;
