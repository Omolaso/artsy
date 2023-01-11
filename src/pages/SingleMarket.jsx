import React from "react";
import { useParams } from "react-router-dom";
import { marketPlaceGrid } from "../Products";

const SingleMarket = () => {
  const { Id } = useParams();
  const singleProduct = marketPlaceGrid.find(
    (product) => product.id === Number(Id)
  );

  console.log(singleProduct);

  return <div>{Id}</div>;
};

export default SingleMarket;
