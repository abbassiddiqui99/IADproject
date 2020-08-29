import React from "react";
import data from "../data";

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => {
    return x._id === props.match.params.id;
  });

  return <div></div>;
}
export default ProductScreen;
