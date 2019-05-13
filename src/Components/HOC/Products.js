import React from "react";
import hoc from "./hoc";

function Products(props) {
  const productsList = props.data.map(product => {
    return (
      <div className="product-display" key={product.id}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>
            <img src={product.image} />
        </div>
      </div>
    );
  });
  return <div>
      {productsList}
  </div>
}


export default hoc(Products, ("/api/products"))