import React, { Component } from "react";
import "../../App.css";

export default function ProductsRender(props) {
  const productsList = props.data.map(product => {
    return (
      <div className="product-display" key={product.id}>
        <div>{product.name}</div>
        <div>{product.price}</div>
        
        <div>
          <img src={product.image} alt="product" />
        </div>
      </div>
    );
  });
  return <div>{productsList}</div>
}
