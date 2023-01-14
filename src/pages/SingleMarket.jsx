import React from "react";
import { useParams } from "react-router-dom";
import { marketPlaceGrid } from "../Products";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Footer } from "../components";

const SingleMarket = () => {
  const { Id } = useParams();
  const singleProduct = marketPlaceGrid.find(
    (product) => product.id === Number(Id)
  );

  // console.log(singleProduct);
  const { nameLowercase, url, madeIn, totalViews, creator, category, price } =
    singleProduct;

  //BREADCRUMB

  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/marketplace"
      className="font-medium md:text-[24px] text-[18px]"
    >
      Marketplace
    </Link>,
    <Typography
      key="3"
      color="text.primary"
      className="font-medium md:text-[24px] text-[18px]"
    >
      {nameLowercase}
    </Typography>,
  ];

  return (
    <>
      <main className="my-[10px] md:my-[15px] px-4 md:px-8">
        <div className="flex flex-col gap-y-0 md:gap-y-10">
          <section className="md:self-start self-center mb-3">
            <Stack spacing={2}>
              <Breadcrumbs
                separator="›"
                aria-label="breadcrumb"
                className="font-medium md:text-[22px] text-[18px]"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </section>

          <section className="flex md:flex-row flex-col md:items-start items-center justify-between border-t lg:border border-artsy-text-greyBlack h-[800px] lg:h-[1020px] w-full">
            <div className="flex-1 flex items-center justify-center px-4 h-full mt-5 border-r-0 lg:border-r-2 border-r-artsy-text-greyBlack w-full">
              <img
                src={url}
                alt={nameLowercase}
                className="md:h-[926px] h-[385px] w-full"
              />
            </div>

            <div className="flex-1 flex flex-col gap-y-3 md:gap-y-5 w-full">
              <div className="flex flex-row items-center justify-between w-full h-[50px] md:h-[150px] border-b-0 md:border-b border-b-artsy-text-greyBlack px-4">
                <h1 className="text-[16px] md:text-[46px] font-medium md:font-bold flex-1">
                  {nameLowercase}
                </h1>
                <h3 className="text-[16px] md:text-[40px] font-medium">
                  {price}
                </h3>
              </div>

              <div className="flex flex-col gap-y-4 px-4">
                <h1 className="flex items-center">
                  <span className="font-normal text-[30px] text-[#616161]">
                    Creator:
                  </span>
                  <span className="font-medium text-[30px] text-artsy-linearGradient-blue ml-2 align-end">
                    {creator}
                  </span>
                </h1>

                <small className="font-normal text-[24px]">{madeIn}</small>

                <h1 className="flex items-center">
                  <span className="font-medium text-[28px] text-[#616161]">
                    Category:
                  </span>
                  <span className="font-medium text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                    {category}
                  </span>
                </h1>

                <h1 className="flex items-center">
                  <span className="font-medium text-[28px] text-[#616161]">
                    Total views:
                  </span>
                  <span className="font-medium text-[28px] text-artsy-linearGradient-blue ml-2 align-end">
                    {totalViews}
                  </span>
                </h1>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleMarket;
