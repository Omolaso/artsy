import React, { useState } from "react";
import { Navbar } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faRefresh } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../images/market-place/marketplaceSearchIcon.svg";
import { allProducts } from "../Products";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(""); //search input
  const [searchProducts, setSearchProducts] = useState([]); //search images
  const [refresher, setRefresher] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const handleSearch = () => {
    if (!searchValue) {
      return;
    }
    if (searchProducts) {
      setSearchProducts([]);
    }
    setRefresher(true);
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
        product.id.toString() === searchValue ||
        product.creator.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    setTimeout(() => {
      if (filtered.length < 1) {
        setNoMatch(true);
      }
      setRefresher(false);
      setSearchProducts(filtered);
    }, 2000);
  };

  const clearSearchValue = () => {
    setSearchValue("");
    setSearchProducts([]);
    setNoMatch(false);
  };
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-6 px-4 md:px-8 mt-6">
        <h1 className="text-[24px] text-artsy-text-greyBlack font-medium">
          Search all products
        </h1>
        <section className="flex flex-col gap-4">
          <div className="flex flex-row w-full gap-4 max-w-2xl">
            <div className="flex-1 flex flex-row items-center px-4 gap-4 bg-artsy-searchGrey border border-artsy-searchGrey h-[45px] md:h-[60px] rounded-[15px]">
              <img
                src={searchIcon}
                alt="search"
                className="h-[18px] md:h-[28px]"
              />
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={(e) =>
                  e.key === "Enter"
                    ? handleSearch()
                    : !searchValue
                    ? setSearchProducts([])
                    : e.key === "Backspace"
                    ? setNoMatch(false)
                    : null
                }
                value={searchValue}
                name="search"
                id="search"
                autoComplete="off"
                autoFocus
                placeholder="Search by name, id or artist"
                className="marketplace-search bg-artsy-searchGrey focus:outline-none font-medium text-lg placeholder:text-[13px] sm:placeholder:text-base w-full"
              />
              <FontAwesomeIcon
                onClick={() => clearSearchValue()}
                icon={faClose}
                className={
                  searchValue ? "block text-2xl cursor-pointer" : "hidden"
                }
              />
            </div>

            <button
              type="button"
              onClick={() => handleSearch()}
              className="flex-[0.2] px-3 text-artsy-searchGrey active:scale-90 hover:bg-artsy-text-black duration-500 ease-out bg-artsy-text-greyBlack focus:outline-none font-medium text-lg h-[45px] md:h-[60px] rounded-[15px]"
            >
              Search
            </button>
          </div>

          <div
            className={
              refresher ? "flex items-center justify-center mt-20" : "hidden"
            }
          >
            <FontAwesomeIcon icon={faRefresh} className="animate-spin" />
          </div>

          <div
            className={
              noMatch ? "flex items-center justify-center mt-20" : "hidden"
            }
          >
            <h1 className="text-[20px] text-artsy-text-greyBlack font-medium">
              No match found
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {searchProducts &&
              searchProducts.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  onClick={() => navigate(`/search/${product.id}`)}
                  className="flex flex-col items-center hover:scale-105 duration-500 ease-in-out gap-4 min-h-[250px] lg:min-h-[300px] bg-artsy-background-white p-4 w-full rounded-[15px]"
                  style={{
                    boxShadow: "0px 34px 68px rgba(217, 225, 244, 0.36)",
                  }}
                >
                  <img
                    src={product.url || product.imgUrl}
                    alt={product.name}
                    className="h-[384px] lg:h-[280px] w-full"
                  />
                  <h1 className="text-[18px] lg:text-[22px] font-medium lg:font-normal text-artsy-text-greyBlack">
                    {product.name}
                  </h1>
                </button>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Search;
