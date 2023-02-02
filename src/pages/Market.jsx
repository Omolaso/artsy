import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { marketPlaceGrid } from "../Products";
import { Footer } from "../components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import searchIcon from "../images/market-place/marketplaceSearchIcon.svg";
import filterIcon from "../images/market-place/marketplaceFilterIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faClose,
  faRefresh,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Market = () => {
  const [searchValue, setSearchValue] = useState(""); //search input
  const [reload, setReload] = useState(false); //general reloader
  const [sortedReload, setSortedReload] = useState(false); //sort reloader
  const [refresher, setRefresher] = useState(false);
  const [checkAli, setCheckAli] = useState(false);
  const [checkCleara, setCheckCleara] = useState(false);
  const [marketProducts, setMarketProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState(true); //category accordion
  const [price, setPrice] = useState(true); //price accordion
  const [artist, setArtist] = useState(true); //artist accordion
  const [value, setValue] = useState([2, 10]); //price range
  const [editorial, setEditorial] = useState(true);
  const [fashion, setFashion] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setRefresher(true);

    //loader icon display medium screen
    setTimeout(() => {
      setLoader(false);
    }, 900);

    //market products
    setTimeout(() => {
      setMarketProducts(marketPlaceGrid);
      setRefresher(false);
    }, 1000);
  }, [reload]);

  const handleRefresh = () => {
    if (searchValue) {
      setSearchValue("");
    }

    setRefresher(true);
    setCheckAli(false);
    setCheckCleara(false);
    setValue([2, 10]);

    setTimeout(() => {
      setMarketProducts(marketPlaceGrid);
      setRefresher(false); //set refresher to false after setting market products
    }, 1000);
  };

  // FILTERS
  //filter by search input
  const handleSearch = () => {
    const filtered = marketPlaceGrid.filter((product) =>
      product.name
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
    setMarketProducts(filtered);
  };

  const clearSearchValue = () => {
    setSearchValue("");
    setReload(!reload);
    setCheckAli(false);
    setCheckCleara(false);
    setValue([2, 10]);
  };

  //filter by category
  const handleEditorial = (e) => {
    const forEditorial = "Editorials";
    const checked = e.target.checked;
    setEditorial(!editorial);

    if (editorial && checked) {
      const filteredByEditorial = marketProducts.filter(
        (products) => products.category === forEditorial
      );
      setMarketProducts(filteredByEditorial);
    } else {
      setReload(!reload);
      setCheckAli(false);
      setCheckCleara(false);
      setValue([2, 10]);
      setSearchValue("");
    }
  };

  const handleFashion = (e) => {
    const checked = e.target.checked;
    const forFashion = "Fashion";
    setFashion(!fashion);

    if (fashion && checked) {
      const filteredByFashion = marketProducts.filter(
        (products) => products.category === forFashion
      );
      setMarketProducts(filteredByFashion);
    } else {
      setReload(!reload);
      setCheckAli(false);
      setCheckCleara(false);
      setValue([2, 10]);
      setSearchValue("");
    }
  };

  //filter by material UI price filter
  const handleChange = (event, newValue) => {
    let priceFilter = [];
    let newProduct;
    setValue(newValue);
    const firstNewValue = newValue[0];
    const secondNewValue = newValue[1];
    for (let i = firstNewValue; i <= secondNewValue; i++) {
      priceFilter.push(i);
    }

    newProduct = marketProducts.filter((product) =>
      priceFilter.includes(product.value)
    );

    setMarketProducts(newProduct);
  };
  function valuetext(value) {
    return `$${value}`;
  }

  //filter by artist
  const handleAliDawa = () => {
    const AliDawa = "Ali Dawa";
    const filtered = marketProducts.filter(
      (product) => product.creator === AliDawa
    );
    window.scrollTo(0, 50);
    setMarketProducts(filtered);
    setCheckAli(true);
    setCheckCleara(false);
  };

  const handleClearamane = () => {
    const Clearamane = "Clearamane";
    const filtered = marketProducts.filter(
      (product) => product.creator === Clearamane
    );
    window.scrollTo(0, 50);
    setMarketProducts(filtered);
    setCheckAli(false);
    setCheckCleara(true);
  };

  // SORT
  const handleSort = (e) => {
    let value = e.target.value;
    if (value === "price") {
      const sortedPrice = marketProducts.sort((a, b) => a.value - b.value);
      setSortedReload(!sortedReload);
      setMarketProducts(sortedPrice);
    }
    if (value === "name") {
      const sortedName = marketProducts.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setSortedReload(!sortedReload);
      setMarketProducts(sortedName);
    }
  };

  //MOBILE VIEW FILTER
  const handleFilterOnMobile = (e) => {
    let AliDawa = "Ali Dawa";
    let Clearamane = "Clearamane";
    let value = e.target.value;
    if (value === AliDawa) {
      const filteredByAli = marketProducts.filter((item) =>
        item.creator.toLowerCase().includes(value.toLowerCase())
      );
      setSortedReload(!sortedReload);
      setMarketProducts(filteredByAli);
    }

    if (value === Clearamane) {
      const filteredByCleara = marketProducts.filter((item) =>
        item.creator.toLowerCase().includes(value.toLowerCase())
      );
      setSortedReload(!sortedReload);
      setMarketProducts(filteredByCleara);
    }

    if (!marketProducts) {
      console.log(marketProducts);
    }
  };

  return (
    <>
      <main className="flex items-start justify-center min-h-screen w-full my-[15px] text-artsy-black">
        <div className="flex flex-col min-h-screen justify-between gap-6 md:gap-10 w-full px-4 md:px-8">
          <h1 className="block md:hidden text-[20px] font-medium">
            Explore Marketplace
          </h1>
          <section className="flex flex-row items-center justify-center md:justify-between gap-5">
            <div className="hidden md:flex flex-[0.3] flex-row items-center px-4 gap-4 bg-artsy-searchGrey border border-artsy-searchGrey h-[60px] rounded-[15px]">
              <img src={searchIcon} alt="search" className="h-[28px]" />
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={handleSearch}
                value={searchValue}
                name="search"
                id="search"
                autoComplete="off"
                autoFocus
                placeholder="Search by name"
                className="marketplace-search bg-artsy-searchGrey placeholder:text-lg focus:outline-none font-medium text-2xl max-[1000px]:text-xl w-full"
              />
              <FontAwesomeIcon
                onClick={clearSearchValue}
                icon={faClose}
                className={
                  searchValue ? "block text-2xl cursor-pointer" : "hidden"
                }
              />
            </div>

            <div
              style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
              className="flex-1 hidden md:flex items-center justify-between px-4 rounded-[15px] h-[90px]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-normal text-[24px] max-[1000px]:text-[20px]">
                  Explore products
                </p>
                <button
                  type="button"
                  title="Refresh"
                  className={marketProducts.length < 1 ? "block" : "hidden"}
                  onClick={handleRefresh}
                >
                  <FontAwesomeIcon
                    icon={faRefresh}
                    className={
                      refresher ? "align-middle animate-spin" : "align-middle"
                    }
                  />
                </button>
              </div>
              <select
                name="sort"
                id="sort"
                defaultValue="sortAll"
                onChange={handleSort}
                className="h-[60px] border border-artsy-black px-2 w-full max-w-[190px] focus:outline-none font-normal text-[18px] rounded-[8px] cursor-pointer"
              >
                <option value="sortAll" disabled>
                  Sort by
                </option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* FILTER & SORT MOBILE VIEW */}

            <div
              style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
              className="flex-1 rounded-[15px] h-[60px] md:hidden flex items-center justify-between gap-x-12 px-4"
            >
              <div className="flex flex-row items-center gap-2">
                <select
                  name="filter"
                  id="filter"
                  defaultValue={"all"}
                  className="filter-select h-[60px] px-2 w-full max-w-[117px] focus:outline-none font-normal text-[16px] rounded-[8px] cursor-pointer"
                  onChange={handleFilterOnMobile}
                >
                  <option value="all" disabled>
                    Filter Items
                  </option>
                  <option value="Ali Dawa">Ali Dawa</option>
                  <option value="Clearamane">Clearame</option>
                </select>
                <button
                  type="button"
                  title="Refresh"
                  className={marketProducts.length < 1 ? "block" : "hidden"}
                  onClick={handleRefresh}
                >
                  <FontAwesomeIcon
                    icon={faRefresh}
                    className={
                      refresher ? "align-middle animate-spin" : "align-middle"
                    }
                  />
                </button>
              </div>

              <select
                name="sort"
                id="sort"
                defaultValue={"sort-all"}
                className="sort-select h-[60px] px-2 w-full max-w-[90px] focus:outline-none font-normal text-[16px] rounded-[8px] cursor-pointer"
                onChange={handleSort}
              >
                <option value="sort-all" disabled>
                  Sort By
                </option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* FILTER & SORT MOBILE VIEW ENDS*/}
          </section>

          <section className="flex-1 flex items-start gap-5 justify-between min-h-screen">
            <div className="hidden lg:flex flex-col flex-[0.3] gap-5 px-4">
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
                          value={editorial}
                          onChange={handleEditorial}
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
                          value={fashion}
                          onChange={handleFashion}
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
                        htmlFor="museum"
                        className="flex items-center gap-4 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="museum"
                          id="museum"
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
                        disableSwap
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
                        ? "flex flex-col justify-start gap-2 text-artsy-text-black font-normal text-[24px] max-[1000px]:text-[18px] w-full"
                        : "hidden"
                    }
                  >
                    <li className="flex items-center justify-between">
                      <button
                        type="button"
                        className=" focus:outline-none"
                        onClick={handleAliDawa}
                      >
                        Ali Dawa
                      </button>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={checkAli ? "block" : "hidden"}
                      />
                    </li>
                    <li className="flex items-center justify-between">
                      <button
                        type="button"
                        className=" focus:outline-none"
                        onClick={handleClearamane}
                      >
                        Clearamane
                      </button>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={checkCleara ? "block" : "hidden"}
                      />
                    </li>
                  </ul>
                </div>
                {/* FILTER BY ARTIST ENDS*/}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="flex-1 min-h-screen">
              {loader && (
                <div className="md:hidden lg:hidden flex items-center justify-center mt-[150px]">
                  <FontAwesomeIcon icon={faRefresh} className="animate-spin" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {marketProducts &&
                  marketProducts.map((product) => (
                    <button
                      type="button"
                      key={product.id}
                      onClick={() => navigate(`/marketplace/${product.id}`)}
                      className="flex flex-col items-center flex-1 gap-4 h-[480px] lg:h-[420px] bg-artsy-background-white p-4 w-full rounded-[15px]"
                      style={{
                        boxShadow: "0px 34px 68px rgba(217, 225, 244, 0.36)",
                      }}
                    >
                      <img
                        src={product.url}
                        alt={product.name}
                        className="h-[384px] lg:h-[280px] w-full"
                      />
                      <div className="flex flex-row items-center lg:items-start justify-between w-full lg:flex-col lg:ml-3 lg:mt-3">
                        <h1 className="text-[16px] lg:text-[22px] font-medium lg:font-normal text-artsy-text-greyBlack">
                          {product.name}
                        </h1>
                        <big className="text-[16px] lg:text-[28px] font-normal lg:font-bold">
                          {product.price}
                        </big>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Market;
