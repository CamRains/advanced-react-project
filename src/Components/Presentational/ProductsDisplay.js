import React, { Component } from "react";
import "../../App.css";

export default function(props) {
  const productsList = props.products.map(product => {
    return (
      <div className="product-display" key={product.id}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>
          <img src={product.image} alt="products" />
        </div>
      </div>
    );
  });
  return <div>{productsList}</div>;
}
