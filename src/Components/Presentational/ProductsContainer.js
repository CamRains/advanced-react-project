import React, { Component } from "react";
import axios from "axios";
import ProductsDisplay from "./ProductsDisplay";

class ProductsContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      console.log("RES IN PRESENTATIONAL, PRODUCTS CONTAINER", res);
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    return <div>
      <ProductsDisplay products={this.state.products} />
    </div>;
  }
}

export default ProductsContainer;
